import {
  invokeFunction,
  invokeAdminFunction,
} from "@/lib/supabase-invoke";
import type { EmailSubscriber, SubscribeResponse } from "./types";

export async function subscribeEmail(
  email: string,
  firstName: string,
  lastName: string,
): Promise<SubscribeResponse> {
  return invokeFunction<SubscribeResponse>("subscribe-email", {
    body: { email, firstName, lastName },
  });
}

export async function fetchAdminSubscribers(
  adminToken: string,
): Promise<EmailSubscriber[]> {
  const response = await invokeAdminFunction<{ items: EmailSubscriber[] }>(
    "admin-emails-list",
    adminToken,
    { action: "list" },
  );

  return response.items;
}

export async function deleteAdminSubscriber(
  adminToken: string,
  id: string,
) {
  await invokeAdminFunction<{ success: true }>(
    "admin-emails-list",
    adminToken,
    { action: "delete", id },
  );
}
