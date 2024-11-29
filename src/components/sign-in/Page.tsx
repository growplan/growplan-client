import auth from "@/config/auth";
import { signApi } from "@/connection";
import { Button } from "fast-jsx";
import { useMutation } from "react-query";

export default function SignInPage() {
  return (
    <div>
      <Button
        title="네이버로 로그인"
        onClick={() => (window.location.href = auth.naver)}
      />
      <Button
        title="카카오로 로그인"
        onClick={() => (window.location.href = auth.kakao)}
      />
    </div>
  );
}
