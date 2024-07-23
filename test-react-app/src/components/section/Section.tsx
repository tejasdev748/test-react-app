import { ChildrenProps } from "./Heading";
import { LevelContext } from "./index";

export default function Section({
  level,
  children,
}: ChildrenProps & { level: number }) {
  return (
    <LevelContext.Provider value={level}>
      <section className="section">{children}</section>
    </LevelContext.Provider>
  );
}
