import { Child, CreateChild } from "@/interface/Child";
import httpRequest from "../axios";
import { calculateWeeksSince } from "@/util/calculate";
import { CreateRecord, Record } from "@/interface/Record";
import { DevelopmentInfo, DevelopmentType } from "@/interface/Development";
import { Survey } from "@/interface/Survey";

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

async function getSurveys(
  userId: number,
  childId: number,
  developmentType: DevelopmentType
) {
  const response = await api.get<{ surveys: Survey[] }>(
    `/users/${userId}/childs/${childId}/surveys/${developmentType}`
  );
  return response.data.surveys;
}

interface PostSurvey {
  id: number;
  status: number;
}

async function postSurvey({
  userId,
  childId,
  surveys,
}: {
  userId: number;
  childId: number;
  surveys: PostSurvey[];
}) {
  const response = await api.post(
    `/users/${userId}/childs/${childId}/surveys`,
    { surveys }
  );
  return response.data;
}

async function getDevelopments(userId: number, childId: number) {
  const response = await api.get<DevelopmentInfo>(
    `/users/${userId}/childs/${childId}/developments`
  );
  return response.data;
}

async function getReports(
  userId: number,
  childId: number,
  developmentType: DevelopmentType
) {
  const response = await api.get<{ summary: string }>(
    `/users/${userId}/childs/${childId}/reports/${developmentType}`
  );
  return response.data;
}

const userApi = {
  child: {
    get: getChilds,
    post: postChild,
    development: {
      get: getDevelopments,
    },
    record: {
      get: getRecords,
      getById: getRecord,
      post: postRecord,
    },
    survey: {
      get: getSurveys,
      post: postSurvey,
    },
    report: {
      get: getReports,
    },
  },
};
export default userApi;
