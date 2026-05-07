export type SubscriberSource = "free-resource" | "newsletter" | "other";

export interface EmailSubscriber {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  source: SubscriberSource;
  subscribedAt: string;
}

export interface SubscribeResponse {
  success: boolean;
  message: string;
  alreadySubscribed?: boolean;
}
