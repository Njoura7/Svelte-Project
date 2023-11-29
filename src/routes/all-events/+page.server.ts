// src/routes/all-events/+page.server.ts
import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return{
    
    events : await prisma.event.findMany()
  } 


};
