import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const eventData = [
  { title: "Event 1", maxAttendance: 100, location: "Location 1" },
  { title: "Event 2", maxAttendance: 150, location: "Location 2" },
  // ... more events
];

async function main() {
  for (const event of eventData) {
    await prisma.event.create({
      data: event,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
