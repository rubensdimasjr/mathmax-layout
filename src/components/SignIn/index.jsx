import React from "react";
import {
  ContainerForm,
  FormButton,
  FormContent,
  Form,
  FormH1,
  FormIcon,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <ContainerForm>
        <FormWrap>
          <FormIcon to="/">mathmax</FormIcon>
          <FormContent>
            <Form action="#">
              <FormH1>Entre com a sua conta</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continuar</FormButton>
              <Text>Esqueceu a senha?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </ContainerForm>
    </>
  );
};

export default SignIn;
