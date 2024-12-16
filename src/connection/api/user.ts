import { Child, CreateChild } from "@/interface/Child";
import httpRequest from "../axios";
import { calculateWeeksSince } from "@/util/calculate";
import { CreateRecord, Record } from "@/interface/Record";

const api = httpRequest.api();

async function getChilds(userId: number) {
  const response = await api.get<{ children: Child[] }>(
    `/users/${userId}/childs`
  );
  return response.data.children;
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

async function getRecords(userId: number, childId: number) {
  const response = await api.get<{ records: Record[] }>(
    `/users/${userId}/childs/${childId}/records`
  );
  return response.data.records;
}

const postApi = httpRequest.api(undefined, {
  contentType: "multipart/form-data",
});

async function postRecord({
  userId,
  childId,
  createRecord,
}: {
  userId: number;
  childId: number;
  createRecord: CreateRecord;
}) {
  const formData = new FormData();
  formData.append(
    "requestDto",
    new Blob(
      [
        JSON.stringify({
          script: createRecord.requestDto.script,
          developmentTypes: createRecord.requestDto.developmentTypes,
        }),
      ],
      {
        type: "application/json",
      }
    )
  );
  createRecord.files.forEach((file) => {
    formData.append("files", file);
  });
  const response = await postApi.post(
    `/users/${userId}/childs/${childId}/records`,
    formData
  );
  return response.data;
}

const userApi = {
  child: {
    get: getChilds,
    post: postChild,
  },
  record: {
    get: getRecords,
    post: postRecord,
  },
};
export default userApi;
