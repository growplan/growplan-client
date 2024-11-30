import { signApi } from "@/connection";
import { isOAuthType } from "@/interface/Sign";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";

export default function AuthPage() {
  const { provider } = useParams();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  if (!provider || !isOAuthType(provider)) return null;
  if (!code) return null;

  const { data, mutate, isSuccess } = useMutation({
    mutationKey: ["postAuth"],
    mutationFn: () =>
      signApi.postAuth({
        provider,
        code,
      }),
  });
  useEffect(() => {
    mutate();
  }, []);
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      // window.location.href = "/";
    }
  }, [isSuccess]);
  return <div>{provider}</div>;
}
