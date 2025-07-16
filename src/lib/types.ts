export type Message = {
  id: number;
  text: string;
  timestamp: string;
  type: "sent" | "received" | string;
};
