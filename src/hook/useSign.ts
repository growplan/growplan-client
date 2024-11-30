import useSignStore from "@/store/useSignStore";
import { useEffect } from "react";

export default function useSign() {
  const { sign } = useSignStore();
  useEffect(() => {
    if (!sign) {
      alert("로그인이 필요합니다.");
    }
  }, [sign]);
  return { sign };
}
