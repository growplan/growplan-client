import useSignStore from "@/store/useSignStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useSign() {
  const router = useNavigate();
  const { sign } = useSignStore();
  useEffect(() => {
    if (!sign) {
      alert("로그인이 필요합니다.");
      router("/sign-in");
    }
  }, [sign]);
  return { sign };
}
