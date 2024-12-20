import { userApi } from "@/connection";
import { useMutation } from "react-query";

export default function SubmitTemplate() {
  const { mutate } = useMutation({
    mutationFn: () =>
      userApi.child.survey.post({
        userId: 3,
        childId: 5,
        surveys: [{ id: 2, status: 3 }],
      }),
  });
  return <div>asdf</div>;
}
