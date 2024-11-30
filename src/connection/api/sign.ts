import { AuthResponse } from "@/interface/Sign";
import httpRequest from "../axios";

const api = httpRequest.api();

async function postAuth({
  provider,
  code,
}: {
  code: string;
  provider: string;
}) {
  const response = await api.post<undefined, AuthResponse>(
    `/sign-in/auth/${provider}`,
    undefined,
    {
      params: {
        code,
      },
    }
  );
  return response.data;
}

const signApi = {
  postAuth,
};

export default signApi;
