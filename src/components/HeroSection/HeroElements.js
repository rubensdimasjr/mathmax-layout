import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: grid;
  /*   border: 1px solid #333; */
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
    margin: 16px 50px 0 0;
  }
`;

export const HeroColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const HeroTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const HeroTopLine = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const HeroHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 900;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const HeroBtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const HeroBtn = styled.button`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 12px 30px;
  color: #ff414d;
  font-size: 16px;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff414d;
    border: 1px solid #fff;
    color: #fff;
  }
`;

export const HeroColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const HeroImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const HeroImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
