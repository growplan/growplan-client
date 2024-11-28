import HeaderMolecule from "./molecule/Header.molecule";

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderMolecule />
      {children}
    </div>
  );
}
