// src/routes/p/[id]/+page.server.ts
import prisma from "$lib/prisma";
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';


export const load = (async ({ params }) => {
    const id = params.id; 
    const event = await prisma.event.findUnique({
        where: { id: Number(id) },
    
    });

    
    return { event };
}) satisfies PageServerLoad;

export const actions = {
    // Delete Event Action
    deleteEvent: async ({ params: { id } }) => {
        await prisma.event.delete({
            where: { id: Number(id) },
        });

        throw redirect(303, '/'); // Redirect to the home page or appropriate page after deletion
    }
}satisfies Actions;
