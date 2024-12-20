import { create } from "zustand";
import { userApi } from "@/connection";
import useSign from "./useSign";
import useChild from "./useChild";
import { useQuery } from "react-query";
import { DevelopmentType } from "@/interface/Development";

export function useSurvey(developmentType: DevelopmentType) {
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { data: surveys, isLoading } = useQuery({
    enabled: !!sign && !!nowChild,
    queryKey: ["getSurvey"],
    queryFn: () =>
      userApi.child.survey.get(
        Number(sign?.id),
        Number(nowChild?.id),
        developmentType
      ),
  });
  return { surveys, isLoading };
}

export interface TempSurvey {
  id: number;
  script: string;
  status: number;
}

interface CheckStore {
  tempSurveys: TempSurvey[];
  createTempSurvey: (tempSurvey: TempSurvey) => void;
}

export const useCheckStore = create<CheckStore>((set) => ({
  tempSurveys: [],
  createTempSurvey: (tempSurvey) =>
    set((state) => ({
      tempSurveys: [...state.tempSurveys, tempSurvey],
    })),
}));

export function useSurveyCheck() {
  const { tempSurveys, createTempSurvey } = useCheckStore();
  return {
    tempSurveys,
    createTempSurvey,
  };
}
