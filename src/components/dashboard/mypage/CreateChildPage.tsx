import Svg from "@/asset/Svg";
import { userApi } from "@/connection";
import HeaderDetail from "@/design/HeaderDetail";
import useSign from "@/hook/useSign";
import { calculateMonthsSince } from "@/util/calculate";
import { Button } from "fast-jsx";
import { State } from "fast-jsx/interface";
import { cn } from "fast-jsx/util";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export default function CreateChildPage() {
  const router = useNavigate();
  const { sign } = useSign();
  const [name, setName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [gender, setGender] = useState<"남자" | "여자">();
  const [bornHeight, setBornHeight] = useState<string>("");
  const [bornWeight, setBornWeight] = useState<string>("");
  const [isPremature, setIsPremature] = useState<boolean>();

  useEffect(() => {
    console.log(birthdate);
  }, [birthdate]);
  const { mutate: postChild } = useMutation({
    mutationKey: ["createChild"],
    mutationFn: (userId: number) =>
      userApi.child.post(userId, {
        name,
        birthdate,
        gender: gender ?? "남자",
        bornHeight: +bornHeight,
        bornWeight: +bornWeight,
        isPremature: isPremature ?? false,
      }),
    onSuccess: () => router("/dashboard"),
  });

  return (
    <>
      <div className="flex flex-col gap-y-7 pt-24">
        <div>아이의 정보를 입력해주세요!</div>
        <Input title="이름" placeholder="이름" state={[name, setName]} />
        <div>
          <div className="h-[30px] flex items-center text-sm">성별</div>
          <div className="flex w-[353px] gap-x-[5px]">
            <Button
              title="남자"
              onClick={() => setGender("남자")}
              option={{
                boundary:
                  gender === "남자"
                    ? "border-1 border-blue-5 rounded-[10px]"
                    : "border-1 border-black-1 rounded-[10px]",
                background: gender === "남자" ? "bg-white" : "bg-black-1",
                width: "w-full",
                height: "h-[50px]",
                textColor: gender === "남자" ? "text-blue-5" : "text-black",
              }}
            />
            <Button
              title="여자"
              onClick={() => setGender("여자")}
              option={{
                boundary:
                  gender === "여자"
                    ? "border-1 border-blue-5 rounded-[10px]"
                    : "border-1 border-black-1 rounded-[10px]",
                background: gender === "여자" ? "bg-white" : "bg-black-1",
                width: "w-full",
                height: "h-[50px]",
                textColor: gender === "여자" ? "text-blue-5" : "text-black",
              }}
            />
          </div>
        </div>
        <Input
          title="태어날 때의 키"
          type="number"
          placeholder="숫자로 입력"
          state={[bornHeight, setBornHeight]}
        />
        <Input
          title="태어날 때의 몸무게"
          type="number"
          placeholder="숫자로 입력"
          state={[bornWeight, setBornWeight]}
        />
        <Input
          title={[
            "생년월일",
            birthdate
              ? "(생후 " + calculateMonthsSince(birthdate) + "개월 차)"
              : undefined,
          ]
            .filter((v) => v)
            .join(" ")}
          type="date"
          placeholder="생년월일 입력"
          state={[birthdate, setBirthdate]}
        />
        <div>
          <div className="h-[30px] flex items-center text-sm">
            우리 아이가 이른둥이인가요?
          </div>
          <div className="flex items-center text-xs gap-1.25 text-black-7 pb-1">
            <Svg.Icon.Question />
            <div>이른둥이는 임신 37주 이전에 태어난 아기를 말해요.</div>
          </div>
          <div className="flex w-[353px] gap-x-[5px]">
            <Button
              title="네"
              onClick={() => setIsPremature(true)}
              option={{
                boundary: isPremature
                  ? "border-1 border-blue-5 rounded-[10px]"
                  : "border-1 border-black-1 rounded-[10px]",
                background: isPremature ? "bg-white" : "bg-black-1",
                width: "w-full",
                height: "h-[50px]",
                textColor: isPremature ? "text-blue-5" : "text-black",
              }}
            />
            <Button
              title="아니오"
              onClick={() => setIsPremature(false)}
              option={{
                boundary:
                  typeof isPremature !== "undefined" && !isPremature
                    ? "border-1 border-blue-5 rounded-[10px]"
                    : "border-1 border-black-1 rounded-[10px]",
                background:
                  typeof isPremature !== "undefined" && !isPremature
                    ? "bg-white"
                    : "bg-black-1",
                width: "w-full",
                height: "h-[50px]",
                textColor:
                  typeof isPremature !== "undefined" && !isPremature
                    ? "text-blue-5"
                    : "text-black",
              }}
            />
          </div>
        </div>
        <div className="mt-12 w-full flex">
          <Button
            title="생성하기"
            onClick={() => {
              if (
                !sign ||
                !name ||
                !birthdate ||
                gender === undefined ||
                !bornHeight ||
                !bornWeight ||
                isPremature === undefined
              )
                return;
              postChild(sign.id);
            }}
            option={{
              width: "w-full",
              height: "h-[50px]",
              background:
                !sign ||
                !name ||
                !birthdate ||
                gender === undefined ||
                !bornHeight ||
                !bornWeight ||
                isPremature === undefined
                  ? "bg-blue-3"
                  : "bg-blue-5",
              font: "text-lg",
            }}
          />
        </div>
      </div>
      <HeaderDetail title="아이 생성" />
    </>
  );
}

function Input({
  title,
  placeholder,
  type = "text",
  state,
}: {
  title?: string;
  placeholder?: string;
  type?: "text" | "number" | "date" | "password";
  state: State<string>;
}) {
  const [value, setValue] = state;
  const container = {
    positions: "relative",
    displays: "flex",
    sizes: "w-[353px] h-[50px]",
    backgrounds: "bg-black-1",
    boundaries: "rounded-[10px]",
    paddings: "px-5 py-2.5",
  };
  return (
    <div>
      <div className="h-[30px] flex items-center text-sm">{title}</div>
      <div className={cn(container)}>
        <input
          type={type}
          placeholder={placeholder ?? "입력해주세요."}
          onChange={(e) => setValue(e.target.value)}
          className="
        focus:outline-none
        bg-transparent w-full h-full text-base "
        />
      </div>
    </div>
  );
}
