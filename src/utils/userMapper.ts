import { User } from '../types/User';

export const mapUser = (user: any): User => ({
  id: user.id,
  name: `${user.firstName} ${user.lastName}`,
  gender: user.gender,
  address: user.address.address? `${user.address.address}, ${user.address.city}, ${user.address.stateCode}`:user.address,
  phone: user.phone,
  email: user.email,
  age: user.age,
});

export const mapUsers = (users: any[]): User[] => users.map(mapUser);