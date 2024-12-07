import Card from "@/design/Card";
import useChild from "@/hook/useChild";
import { Action, Label, Modal } from "fast-jsx";
import { useActionStore } from "fast-jsx/store";
import { cn } from "fast-jsx/util";
import CreateChildModal from "../molecule/CreateChildModal.molecule";

export default function Children() {
  const { setModal } = useActionStore();
  const { childs } = useChild();
  const container = {
    sizes: "w-[353px] h-[139px]",
    boundaries: "bg-blue-sky-light rounded-md",
  };
  const titleBox = {
    displays: "flex gap-x-1.5 items-end",
  };
  console.log(childs);
  return (
    <Action.Show actions={[["createChild", <CreateChildModal />]]}>
      {childs?.map((children) => (
        <div>{children.name}</div>
      ))}
      <button onClick={() => setModal("createChild")}>등록해주세열</button>
    </Action.Show>
  );
}
