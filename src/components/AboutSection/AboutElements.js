import styled from "styled-components";

export const AboutRow = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const AboutTitleWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;
  @media screen and (max-width: 768px) {
    padding-bottom: 16px;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: black;
  margin-bottom: 6px;
`;

export const AboutDescription = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
`;

export const ImgAboutWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding-top: 16px;
  }
`;

export const AboutImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
