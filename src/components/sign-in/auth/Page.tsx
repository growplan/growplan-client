import { signApi } from "@/connection";
import Loading from "@/design/Loading";
import { isOAuthType } from "@/interface/Sign";
import useSignStore from "@/store/useSignStore";
import { cn } from "fast-jsx/util";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";

export default function AuthPage() {
  const { setSign } = useSignStore();
  const { provider } = useParams();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  if (!provider || !isOAuthType(provider)) return null;
  if (!code) return null;
  const { mutate } = useMutation({
    mutationKey: ["postAuth"],
    mutationFn: () =>
      signApi.postAuth({
        provider,
        code,
      }),
    onSuccess: (data) => {
      setSign(data);
      window.location.href = "/dashboard";
    },
  });
  useEffect(() => {
    mutate();
  }, []);
  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-full min-h-screen",
  };
  return <Loading.Screen />;
}
