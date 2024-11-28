// src/seed.ts
import prisma from '@/prisma';

async function main() {
  console.log('Starting seeding...');

  // Contoh data awal
  const sampleData = [
    { name: 'Sample 1', code: 'SMP1' },
    { name: 'Sample 2', code: 'SMP2' },
  ];

  // Seeding data ke dalam tabel sample
  for (const data of sampleData) {
    await prisma.sample.upsert({
      where: { code: data.code },
      update: {},
      create: data,
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
