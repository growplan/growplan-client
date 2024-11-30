import useSign from "@/hook/useSign";

export default function MyPagePage() {
  const { sign } = useSign();
  return <div>{sign?.email}</div>;
}
