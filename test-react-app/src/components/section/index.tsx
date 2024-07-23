import Heading from "./Heading";
import Section from "./Section";

import { createContext } from "react";

export const LevelContext = createContext(1);

export default function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={4}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
        </Section>
      </Section>
    </Section>
  );
}
