export type OAuthType = "naver" | "kakao";
export function isOAuthType(value: string): value is OAuthType {
  return ["naver", "kakao"].includes(value);
}
