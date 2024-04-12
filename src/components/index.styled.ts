import styled from "styled-components";

export const Main = styled.main`
  font-family: "Roboto Mono";
  color: #e8e9eb;
  margin: 2% 10%;
  height: inherit;
  flex: 1;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 820px) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.h3`
  text-align: left;
  text-transform: uppercase;
  margin: 0.5rem 0;
`;

export const SubHeader = styled.h5`
  text-align: left;
  margin: 0.5rem 0;
  color: #f5b700;
`;

export const Row = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const SectionHeader = styled.h6`
  text-align: left;
  margin: 0.5rem 0;
  font-weight: 700;
  color: #f5b700;
`;

export const Paragraph = styled.p`
  margin: 0.5rem 0;
  font-size: 12px;
  line-height: 20px;
`;

export const Stack = styled.div`
  margin: 2rem 0;
  width: 100%;
  position: relative;
`;

export const LeftSection = styled.div`
  height: 100%;
  width: 20rem;
  position: fixed;
  z-index: 1;

  @media screen and (max-width: 820px) {
    position: relative;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 70%;
  height: 100vh;
  margin-left: 22rem;
  padding-bottom: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 820px) {
    position: relative;
    width: 100%;
    margin-left: 0;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

export const Link = styled.a`
  font-size: 11px;
  color: #e8e9eb;
  padding-right:10px;
`;

export const RowStack = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;
