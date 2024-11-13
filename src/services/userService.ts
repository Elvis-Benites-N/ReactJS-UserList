import axios from 'axios';
import { User } from '../types/User';
import { mapUsers } from '../utils/userMapper';

const BASE_URL = 'https://dummyjson.com/users';

export const fetchUsers = async (
  page: number,
  itemsPerPage: number,
  sortBy: string = 'firstName',
  order: 'asc' | 'desc' = 'asc'
): Promise<{ users: User[]; total: number }> => {
  try {
    const sortField = sortBy === 'address' ? 'macAddress' : sortBy === 'name' ? 'firstName' : sortBy;

    const response = await axios.get(BASE_URL, {
      params: {
        limit: itemsPerPage,
        skip: (page - 1) * itemsPerPage,
        sortBy: sortField,
        order,
      },
    });

    console.log(`Ordenando por: ${sortField}, Orden: ${order}`);
    return { users: mapUsers(response.data.users), total: response.data.total };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const searchUsers = async (query: string): Promise<User[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { q: query },
    });

    return mapUsers(response.data.users);
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const fetchFilteredUsers = async (
  selectedAge: string,
  selectedGender: string
): Promise<{ users: User[]; total: number }> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        age: selectedAge,
        gender: selectedGender,
      },
    });

    return { users: mapUsers(response.data.users), total: response.data.total };
  } catch (error) {
    console.error("Error fetching filtered users:", error);
    throw error;
  }
};


export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return mapUsers([response.data])[0];
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};

export const updateUser = async (id: number, updatedUser: Partial<User>): Promise<User> => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedUser, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return mapUsers([response.data])[0];
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    throw error;
  }
};

export const deleteUser = async (id: number): Promise<User> => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return mapUsers([response.data])[0];
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    throw error;
  }
};