import styled from "styled-components";


export const ExpStack = styled.div`
  width: 100%;
`;

export const ExpHeader = styled.h4`
  margin: 0.5rem 0;
  font-weight: 700;
  color: #f5b700;
`;


export const ExpContainer = styled.div`
  border-radius: 10px;
  width: 40%;
  margin: 30px;
  border-top: 0;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const ExpContent = styled.div`
  font-size: 11px;
`;

export const ExpRelated = styled.p`
  margin: 0.2rem 0;
  font-size: 10px;
  line-height: 20px;
`;

export const ExpImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 5px;
`;