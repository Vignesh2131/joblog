import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

type ClerkWebhookData = {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    email_addresses: {
      email_address: string;
    }[];
    image_url: string;
  };
  type: string;
};

type User = {
  email: string;
  username: string;
  imageUrl: string;
  clerkId: string;
};

export async function POST(req: NextRequest) {
  try {
    const evt = (await verifyWebhook(req)) as ClerkWebhookData;

    const email = evt.data.email_addresses?.[0]?.email_address || "";
    const username = `${evt.data.first_name ?? ""} ${
      evt.data.last_name ?? ""
    }`.trim();
    const imageUrl = evt.data.image_url || "";
    const clerkId = evt.data.id;

    const user: User = await prisma.user.create({
      data: {
        email,
        username,
        imageUrl,
        clerkId,
      },
    });

    if (evt.type === "user.created") {
      console.log("User created:", user);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
