export interface User {
    id:number
    name: string;
    gender: string;
    address: string;
    phone: string;
    email: string;
    age: number;
}

export interface UserResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
  }