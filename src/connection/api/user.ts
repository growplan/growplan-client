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

async function getRecord(userId: number, childId: number, recordId: number) {
  const response = await api.get<Record>(
    `/users/${userId}/childs/${childId}/records/${recordId}`
  );
  return response.data;
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

async function getSurveys(userId: number, childId: number) {
  const response = await api.get<{ surveys: Record[] }>(
    `/users/${userId}/childs/${childId}/surveys`
  );
  return response.data.surveys;
}

const userApi = {
  child: {
    get: getChilds,
    post: postChild,
    record: {
      get: getRecords,
      getById: getRecord,
      post: postRecord,
    },
    survey: {
      get: getSurveys,
    },
  },
};
export default userApi;
