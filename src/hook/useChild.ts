import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userApi } from "@/connection";
import { useMutation, useQuery } from "react-query";
import useSign from "./useSign";
import { Child } from "@/interface/Child";
import { useEffect, useState } from "react";

interface ChildStore {
  store: {
    child?: Child;
  };
  setStore: (store: { child?: Child }) => void;
}

const useChildStore = create(
  persist<ChildStore>(
    (set) => ({
      store: { selectedChild: undefined },
      setStore: (store) => set({ store }),
    }),
    {
      name: "childStorage",
    }
  )
);

export default function useChild() {
  const [selectedChild, setSelectedChild] = useState<Child>();
  const { store, setStore } = useChildStore();
  const { sign } = useSign();
  const { data: childs, mutate } = useMutation({
    mutationKey: ["getChilds"],
    mutationFn: (userId: number) => userApi.child.get(userId),
    onSuccess: (childs) => {
      if (childs.length > 0) {
        setSelectedChild(childs[0]);
      }
    },
  });
  useEffect(() => {
    if (sign && !childs) {
      mutate(sign.id);
    }
  }, [sign]);
  useEffect(() => {
    if (selectedChild) {
      setStore({ child: selectedChild });
    }
  }, [selectedChild]);

  return {
    childs,
    selectedChild,
    setSelectedChild,
    store,
    nowChild: store.child,
  };
}
