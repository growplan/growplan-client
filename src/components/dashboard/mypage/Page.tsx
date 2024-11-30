import useSign from "@/hook/useSign";

export default function MyPagePage() {
  const { sign } = useSign();
  return (
    <div>
      <div>{sign?.email}</div>
      <div>{sign?.socialLoginType}</div>
    </div>
  );
}
