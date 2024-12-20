import useChild from "@/hook/useChild";
import { Action } from "fast-jsx";
import CreateChildModal from "../molecule/CreateChildModal.molecule";
import ChildCard from "../molecule/ChildCard.molecule";
import { cn } from "fast-jsx/util";
import { useMutation } from "react-query";
import { userApi } from "@/connection";
import { useActionStore } from "fast-jsx/store";

export default function Children() {
  const { setModal } = useActionStore();
  const { childs } = useChild();

  const container = {
    displays: "flex",
  };

  return (
    <div className={cn(container)}>
      <Action.Show actions={[["modal", <CreateChildModal />]]}>
        {!childs || childs.length === 0 ? (
          <button onClick={() => setModal("modal")}>등록이 필요합니다.</button>
        ) : (
          childs.map((children) => (
            <ChildCard key={children.id} {...children} />
          ))
        )}
      </Action.Show>
    </div>
  );
}
