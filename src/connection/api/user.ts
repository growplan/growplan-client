import { Child, CreateChild } from "@/interface/Child";
import httpRequest from "../axios";
import { calculateWeeksSince } from "@/util/calculate";

const api = httpRequest.api();

async function getChilds(userId: number) {
  const response = await api.get<{ childern: Child[] }>(
    `/users/${userId}/childs`
  );
  return response.data.childern;
}

async function postChild(
  userId: number,
  createChild: Omit<CreateChild, "birthWeeks">
) {
  const response = await api.post<CreateChild>(`/users/${userId}/childs`, {
    ...createChild,
    birthWeeks: calculateWeeksSince(createChild.birthdate),
  });
  return response.data;
}

const userApi = {
  child: {
    get: getChilds,
    post: postChild,
  },
};
export default userApi;
