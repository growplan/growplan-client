import useSign from "@/hook/useSign";
import Info from "./organism/Info.organism";

export default function MyPagePage() {
  const { sign } = useSign();
  return (
    <div>
      <Info />
    </div>
  );
}
