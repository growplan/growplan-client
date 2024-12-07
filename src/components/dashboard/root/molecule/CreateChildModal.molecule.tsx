import { Input, Modal } from "fast-jsx";
import { ShowAction } from "fast-jsx/interface/Action";
import { useState } from "react";

export default function CreateChildModal({
  showAction,
}: {
  showAction?: ShowAction;
}) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gener, setGener] = useState("");
  const [bornHeight, setBornHeight] = useState("");
  const [bornWeight, setBornWeight] = useState("");
  const [isPremature, setIsPremature] = useState("");
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
    </Modal>
  );
}
