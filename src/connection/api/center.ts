import { Center } from "@/interface/Center";
import httpRequest from "../axios";

const api = httpRequest.api();

interface CenterRaw {
  lastPageIndex: number;
  surveys: Center[];
}

async function getCenters({ userId }: { userId: number }) {
  const response = await api.get<CenterRaw>("/centers", {
    params: {
      userId,
    },
  });
  return response.data;
}

const centerApi = {
  get: getCenters,
};
export default centerApi;
