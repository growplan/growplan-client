import Svg from "@/asset/Svg";
import useChild from "@/hook/useChild";
import useSign from "@/hook/useSign";
import { Child } from "@/interface/Child";
import { calculateMonthsSince } from "@/util/calculate";
import { OnClick } from "fast-jsx/interface";
import { cn } from "fast-jsx/util";
import { useNavigate } from "react-router-dom";

export default function Info() {
  const { sign } = useSign();
  const { childs } = useChild();
  const router = useNavigate();
  const container = {
    positions: "relative",
    displays: "flex flex-col items-center",
    sizes: "w-screen h-[600px]",
    backgrounds: "bg-gradient-to-t from-blue-2 to-blue-1",
    paddings: "px-5",
  };
  return (
    <div className={cn(container)}>
      <div className="py-5 w-full flex justify-start">
        <img
          src="/images/logos/growplan.png"
          width={120.5}
          height={26.86}
          alt="growplan"
        />
      </div>
      <div className="flex px-4.5 py-5 w-full h-[104px] bg-white rounded-[10px]">
        <div className="h-full flex flex-col gap-y-3">
          <div className="text-xs text-blue-5">MY 프로필</div>
          <div className="font-bold">
            {`${sign?.email}`.split("@")[0] + "님"}
          </div>
        </div>
        <div className="ml-auto w-16 h-16 rounded-full">
          <img
            src="/images/logos/growplan-symbol.png"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-4  mt-[46px]">
        <div className="font-bold text-blue-5">우리 아이 관리</div>
        {childs && childs.length === 0 ? (
          <Exception onClick={() => router("/dashboard/mypage/create-child")} />
        ) : (
          childs?.map((child) => <ChildBox key={child.id} {...child} />)
        )}
      </div>
    </div>
  );
}

function ChildBox({ name, gender, birthdate }: Child) {
  const container = {
    sizes: "w-[191px] h-[280px]",
    styles: "overflow-hidden",
    boundaries: "rounded-[10px]",
    displays: "flex flex-col",
  };
  return (
    <div className={cn(container)}>
      <div className="bg-white w-full h-[175px] flex justify-center items-center">
        <img
          src="/images/dashboard/character-blue.png"
          width={111}
          height={107}
          alt="character"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-full bg-blue-5 text-white">
        <div>{name}</div>
        <div className="flex items-center gap-x-1 ">
          <div>{calculateMonthsSince(birthdate)}개월생</div>
          {gender === "남자" ? (
            <Svg.Icon.Male background="#FFFFFF" />
          ) : (
            <Svg.Icon.Female background="#FFFFFF" />
          )}
        </div>
        <div className="text-blue-3">{birthdate}</div>
      </div>
    </div>
  );
}

function Exception({ onClick }: { onClick: OnClick }) {
  const container = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full h-[280px]",
    borders: "border-[1px] border-blue-5 rounded-[10px] border-dashed",
    fonts: "text-blue-5",
  };
  return (
    <div onClick={onClick} className={cn(container)}>
      <div>아직 등록된 아이가 없어요...</div>
    </div>
  );
}
