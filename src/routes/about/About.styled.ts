import styled from "styled-components";

export const Content = styled.div`
  padding-bottom: 64px;
  max-width: 795px;
`;

export const Section = styled.section`
  margin-bottom: 64px;
`;

export const SkillList = styled.ul<{ $twoColumn?: boolean }>`
  margin-bottom: 16px;
  ${({ $twoColumn }) => $twoColumn && `columns: 2;`}
`;
