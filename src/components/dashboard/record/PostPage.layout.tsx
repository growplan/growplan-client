import HeaderDetail from "@/design/HeaderDetail";
import { cn } from "fast-jsx/util";
import moment from "moment-timezone";

export default function RecordPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = {
    positions: "relative",
    displays: "flex flex-col",
    paddings: "pt-4",
    sizes: "w-full min-h-auto",
  };
  const body = {
    displays: "flex flex-col flex-grow items-center justify-center",
  };
  const now = moment().tz("Asia/Seoul").format("YYYY.MM.DD");
  return (
    <div className={cn(container)}>
      <HeaderDetail title={now} />
      <div className={cn(body)}>{children}</div>
    </div>
  );
}
