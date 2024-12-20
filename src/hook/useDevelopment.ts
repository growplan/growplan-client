import { userApi } from "@/connection";
import { useQuery } from "react-query";
import useSign from "./useSign";
import useChild from "./useChild";

export default function useDevelopment() {
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { data: developmentInfo, isLoading } = useQuery({
    enabled: !!sign && !!nowChild,
    queryKey: ["getDevelopments"],
    queryFn: () =>
      userApi.child.development.get(Number(sign?.id), Number(nowChild?.id)),
  });
  return { developmentInfo, isLoading };
}
