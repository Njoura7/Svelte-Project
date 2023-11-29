// src/routes/create-event/+page.server.ts
import prisma from "$lib/prisma";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData();

    // Use optional chaining and nullish coalescing operator to handle undefined values
    const title = form.get("title")?.toString() || "";
    const maxAttendanceStr = form.get("maxAttendance")?.toString() || "0";
    const location = form.get("location")?.toString() || "";

    // Parse the maxAttendance string to an integer
    const maxAttendance = parseInt(maxAttendanceStr, 10);

    await prisma.event.create({
      data: { title, maxAttendance, location },
    });

    throw redirect(303, "/");
  },
};
