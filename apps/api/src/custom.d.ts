// src/custom.d.ts

// Mendefinisikan tipe User
export type User = {
    email: string;
    name: string;
    role: string;
  };
  
  // Menambahkan properti 'user' pada Request
  declare global {
    namespace Express {
      export interface Request {
        user?: User; // Menambahkan user pada Request
      }
    }
  }
  