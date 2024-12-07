import FloatButton from "./atom/FloatButton.atom";
import Developments from "./organism/Developments.organism";
import Records from "./organism/Records.organism";

export default function RecordPage() {
  return (
    <div>
      <Developments />
      <Records />
      <FloatButton />
    </div>
  );
}
