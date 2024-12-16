import { OAuthType } from "@/interface/Sign";

const {
  VITE_OAUTH_NAVER_ORIGIN: naverOrigin,
  VITE_OAUTH_NAVER_CLIENT_ID: naverClientId,
  VITE_OAUTH_KAKAO_ORIGIN: kakaoOrigin,
  VITE_OAUTH_KAKAO_CLIENT_ID: kakaoClientId,
} = import.meta.env;

const href = (provider: OAuthType) =>
  [location.href.replace(/\/$/, ""), "sign-in/auth", provider].join("/");
const auth: Record<OAuthType, string> = {
  naver: [
    naverOrigin,
    [
      "response_type=code",
      `client_id=${naverClientId}`,
      `redirect_uri=${href("naver")}`,
    ].join("&"),
  ].join("?"),
  kakao: [
    kakaoOrigin,
    [
      "response_type=code",
      `client_id=${kakaoClientId}`,
      `redirect_uri=${href("kakao")}`,
    ].join("&"),
  ].join("?"),
};

export default auth;
