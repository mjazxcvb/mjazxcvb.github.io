import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  SectionHeader,
  FooterText,
  Header,
  Main,
  Row,
  Stack,
  SubHeader,
  Paragraph,
  Footer,
  LeftSection,
  Content,
  RowStack,
  Link,
} from "../components/index.styled";
import "../styles/index.css";
import Experience from "../components/exp";
import { experiences, links, skills } from "../constants";
import Skill from "../components/skills";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <LeftSection>
        <Stack>
          <Header>MJ Aguelo</Header>
          <SubHeader>Software Engineer</SubHeader>
        </Stack>
        <Stack>
          <SectionHeader>About</SectionHeader>
          <Paragraph>
            Hello, I'm MJ. I have developed different types of websites and
            mobile applications. Passionate with building complex applications.
            Always open to new learning and technologies.
          </Paragraph>
        </Stack>
        <Stack>
          {skills.map((skill) => {
            return <Skill skills={skill} />;
          })}
        </Stack>
        <Stack>
          {links.map((i) => {
            return (
              <Link href={i.link} target="_blank">
                {i.name}
              </Link>
            );
          })}
        </Stack>
      </LeftSection>
      <Content>
        <Stack>
          <SectionHeader>My Recent Work</SectionHeader>
          <RowStack>
            {experiences.map((exp) => {
              return <Experience exp={exp} />;
            })}
          </RowStack>
        </Stack>
      </Content>
    </Main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>MJA</title>;
