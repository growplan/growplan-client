import { surveys } from "@/asset/development";
import Card from "@/design/Card";
import TitleBox from "@/design/TitleBox";
import { cn } from "fast-jsx/util";
import CheckBoxMolecule from "../molecule/CheckBox.molecule";

export default function CheckList() {
  const body = {
    displays: "flex flex-col gap-y-2",
    sizes: "w-full",
    boundareis: "px-[26px] mt-[24px] pb-[28px]",
  };

  return (
    <Card>
      <TitleBox
        subtitle={"보통의 39개월생은?"}
        title="39개월된 아이는 이렇게 행동해요!"
        descriptions={["하단의 내용은 매일 자정마다 자동 새로고침 됩니다."]}
      />
      <div className={cn(body)}>
        {surveys.map((survey) => (
          <CheckBoxMolecule
            key={survey.id}
            type={survey.type}
            script={survey.script}
            onClick={() => {}}
          />
        ))}
      </div>
    </Card>
  );
}
