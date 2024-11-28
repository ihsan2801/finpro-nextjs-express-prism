// src/types.ts

// Definisi tipe untuk data yang ada di tabel sample
export type Sample = {
    id: number;
    name: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
  };
  
  // Definisi tipe untuk respons API
  export type ApiResponse<T> = {
    data: T;
    message: string;
  };
  
  // Definisi tipe untuk role pengguna
  export type UserRole = 'admin' | 'user';
  