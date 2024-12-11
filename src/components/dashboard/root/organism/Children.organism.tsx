import useChild from "@/hook/useChild";
import { Action } from "fast-jsx";
import CreateChildModal from "../molecule/CreateChildModal.molecule";
import ChildCard from "../molecule/ChildCard.molecule";
import { cn } from "fast-jsx/util";

export default function Children() {
  const { childs } = useChild();
  const container = {
    displays: "flex",
  };

  return (
    <Action.Show actions={[["createChild", <CreateChildModal />]]}>
      <div className={cn(container)}>
        {childs?.map((children) => (
          <ChildCard key={children.id} {...children} />
        ))}
      </div>
    </Action.Show>
  );
}
