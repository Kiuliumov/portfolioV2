import api from "./axios";

export interface CreateMessageRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface CreateMessageResponse {
  id: string;
  createdAt: string;
  status: "new";
}

export async function createMessage(
  data: CreateMessageRequest,
): Promise<CreateMessageResponse> {
  const response = await api.post<CreateMessageResponse>(
    "/messages",
    data,
  );

  return response.data;
}
