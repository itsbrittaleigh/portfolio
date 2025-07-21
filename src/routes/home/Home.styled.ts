import styled from "styled-components";

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 144px);
  justify-content: center;
  padding-bottom: 144px;
  width: calc(100% - 44px);
`;

export const Headline = styled.h1`
  font-size: 44px;
  letter-spacing: 4px;
  line-height: 1.15;
  margin: 0;

  span {
    display: block;
    font-size: 22px;
    line-height: 1.35;
    margin-top: 12px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 76px;
    span {
      font-size: 44px;
    }
  }
`;
