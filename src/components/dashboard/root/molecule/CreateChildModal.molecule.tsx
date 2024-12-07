import { userApi } from "@/connection";
import useSign from "@/hook/useSign";
import { Input, Modal } from "fast-jsx";
import { ShowAction } from "fast-jsx/interface/Action";
import { useState } from "react";
import { useMutation } from "react-query";

export default function CreateChildModal({
  showAction,
}: {
  showAction?: ShowAction;
}) {
  const { sign } = useSign();
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gener, setGener] = useState("");
  const [bornHeight, setBornHeight] = useState("");
  const [bornWeight, setBornWeight] = useState("");
  const [isPremature, setIsPremature] = useState("");
  const { mutate: postChild } = useMutation({
    mutationKey: ["createChild"],
    mutationFn: (userId: number) =>
      userApi.child.post(userId, {
        name: "김메디",
        birthdate: "2020-06-07",
        gender: "남자",
        bornHeight: 49.9,
        bornWeight: 3.3,
        isPremature: false,
      }),
  });
  return (
    <Modal
      titles={{
        title: "등록",
      }}
      showAction={showAction}
      option={{
        height: "3xl",
      }}
    >
      <Input placeholder="이름" state={[name, setName]} />
      <Input placeholder="생년월일" state={[birthday, setBirthday]} />
      <Input placeholder="성별" state={[gener, setGener]} />
      <Input
        type="number"
        placeholder="키"
        state={[bornHeight, setBornHeight]}
      />
      <Input
        type="number"
        placeholder="몸무게"
        state={[bornWeight, setBornWeight]}
      />
      <Input placeholder="우량아여부" state={[isPremature, setIsPremature]} />
      <button
        onClick={() => {
          if (!sign) return;
          postChild(sign.id);
        }}
      >
        등록
      </button>
    </Modal>
  );
}
