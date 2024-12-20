import centerApi from "@/connection/api/center";
import { useQuery } from "react-query";
import useSign from "./useSign";

export default function useCenter() {
  const { sign } = useSign();
  const { data: center } = useQuery({
    enabled: !!sign,
    queryKey: ["getCenters", sign],
    queryFn: () =>
      centerApi.get({
        userId: Number(sign?.id),
      }),
  });
  return { centers: center?.surveys };
}
