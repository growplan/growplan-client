import { userApi } from "@/connection";
import { useQuery } from "react-query";
import useSign from "./useSign";
import useChild from "./useChild";
import { DevelopmentType } from "@/interface/Development";

export default function useDevelopment() {
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { data: developmentInfo, isLoading } = useQuery({
    enabled: !!sign && !!nowChild,
    queryKey: ["getDevelopments", nowChild],
    queryFn: () =>
      userApi.child.development.get(Number(sign?.id), Number(nowChild?.id)),
  });
  return { developmentInfo, isLoading };
}

export function useDevelopmentByType(developmentType: DevelopmentType) {
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { data: development, isLoading } = useQuery({
    enabled: !!developmentType && !!sign && !!nowChild,
    queryKey: ["getDevelopments", nowChild],
    queryFn: () =>
      userApi.child.development.getByType(
        Number(sign?.id),
        Number(nowChild?.id),
        developmentType
      ),
  });
  return {
    development,
    isLoading,
  };
}
