import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerForm = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(232, 232, 232, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const FormIcon = styled(Link)`
  margin-top: 32px;
  margin-left: 20px;
  text-decoration: none;
  color: #ff414d;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-top: 15vh;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`;

export const Form = styled.form`
  background: #2f2e41;
  height: auto;
  min-width: 400px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
    margin: 0;
    min-width: 0;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 290px) {
    font-size: 16px;
    text-align: left;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 290px) {
    width: 85%;
  }
`;

export const FormButton = styled.button`
  background: #ff414d;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;
