import styled from "styled-components";

export const BoxTitleWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 48px;
`;

export const BoxTitleH1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: black;
`;

export const BoxDescription1 = styled.p`
  font-size: 16px;
  color: #333;

  @media screen and (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const BoxContent = styled.div`
  border: 2px solid #ff414d;
  border-radius: 10px;
  display: flex;
  width: 160px;
  margin: 48px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 30px;

  @media screen and (max-width: 768px) {
    width: auto;
    margin: 0 auto;
    margin-bottom: 16px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const BoxDescription = styled.p`
  color: #333;
  font-size: 14px;
`;
