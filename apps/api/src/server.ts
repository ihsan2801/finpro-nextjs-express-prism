// src/server.ts
import App from './app';
import prisma from './prisma';

const main = async () => {
  try {
    console.log('Connecting to database...');
    await prisma.$connect();
    console.log('Database connected.');

    const app = new App();
    app.start();
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  } finally {
    // Opsional: Menutup koneksi database saat server berhenti
    process.on('SIGINT', async () => {
      await prisma.$disconnect();
      console.log('Database disconnected. Exiting...');
      process.exit(0);
    });
  }
};

main();
