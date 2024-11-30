export type OAuthType = "naver" | "kakao";
export function isOAuthType(value: string): value is OAuthType {
  return ["naver", "kakao"].includes(value);
}
export interface AuthResponse {
  id: number;
  email: string;
  socialLoginType: string;
  isAdditionalSignup: boolean;
  accessToken: string;
  refreshToken: string;
}
