import Notice from "./atom/Notice.atom";
import ButtonContainerMolecule from "./molecule/ButtonContainer.molecule";
import CreateDevelopment from "./organism/CreateDevelopment.organism";
import CreateImage from "./organism/CreateImage.organism";
import CreateScript from "./organism/CreateScript.organism";
import RecordLayout from "./PostPage.layout";
import { cn } from "fast-jsx/util";
import { DevelopmentType } from "@/interface/Development";
import { useState } from "react";
import { useMutation } from "react-query";
import { userApi } from "@/connection";
import useChild from "@/hook/useChild";
import useSign from "@/hook/useSign";
import { useNavigate } from "react-router-dom";

export default function RecordPostPage() {
  const { sign } = useSign();
  const { store } = useChild();
  const { child } = store;
  const [developments, setDevelopments] = useState<DevelopmentType[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [script, setScript] = useState<string>();
  const router = useNavigate();
  const container = {
    displays: "flex flex-col items-center gap-y-12",
    sizes: "w-full",
  };
  const { mutate: postRecord } = useMutation({
    mutationKey: ["createRecord"],
    mutationFn: ({ childId, userId }: { childId: number; userId: number }) =>
      userApi.record.post({
        userId,
        childId,
        createRecord: {
          requestDto: {
            script: String(script),
            developmentTypes: developments,
          },
          files,
        },
      }),
    onSuccess: () => router("/dashboard/records"),
  });

  return (
    <RecordLayout>
      <div className={cn(container)}>
        <Notice />
        <CreateDevelopment state={[developments, setDevelopments]} />
        <CreateImage state={[files, setFiles]} />
        <CreateScript state={[script, setScript]} />
      </div>
      <ButtonContainerMolecule
        title="제출하기"
        onClick={() =>
          postRecord({ childId: Number(child?.id), userId: Number(sign?.id) })
        }
      />
    </RecordLayout>
  );
}
