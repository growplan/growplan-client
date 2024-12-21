import useChild from "@/hook/useChild";
import { Action } from "fast-jsx";
import CreateChildModal from "../molecule/CreateChildModal.molecule";
import ChildCard from "../molecule/ChildCard.molecule";
import { cn } from "fast-jsx/util";
import { OnClick } from "fast-jsx/interface";
import { useNavigate } from "react-router-dom";

export default function Children() {
  const router = useNavigate();
  const { childs } = useChild();
  const container = {
    displays: "flex",
  };
  return (
    <div className={cn(container)}>
      <Action.Show actions={[["modal", <CreateChildModal />]]}>
        <Action.Replace
          actions={[
            [!childs, <Exception title="로딩 중입니다..." />],
            [
              childs && childs.length === 0,
              <Exception
                title="아이를 추가해주세요"
                onClick={() => router("/dashboard/mypage/create-child")}
              />,
            ],
          ]}
        >
          {childs &&
            childs.map((children) => (
              <ChildCard key={children.id} {...children} />
            ))}
        </Action.Replace>
      </Action.Show>
    </div>
  );
}

function Exception({ title, onClick }: { title: string; onClick?: OnClick }) {
  const container = {
    displays: "flex  gap-x-3.5 items-center justify-center",
    sizes: "w-[353px] h-[139px]",
    backgrounds: "bg-blue-1",
    boundaries: "rounded-[10px]",
  };
  return (
    <div onClick={onClick} className={cn(container)}>
      <img
        src="/images/logos/growplan-symbol.png"
        alt="growplan-symbol"
        width={60}
        height={60}
      />
      <div className="text-blue-5 font-bold text-lg">{title}</div>
    </div>
  );
}
