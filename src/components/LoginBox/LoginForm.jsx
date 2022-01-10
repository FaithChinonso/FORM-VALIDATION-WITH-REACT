import React, { useContext, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { AccountContext } from "./AccountContext";

import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./common";

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit} className="form" noValidate>
        <Input
          type="email"
          placeholder="Email"
          id="email"
          value={values.email}
          onChange={handleChange}
        />{" "}
        {errors.email && <p>{errors.email}</p>}
        <Input
          type="password"
          placeholder="Password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <MutedLink href="#">Forget your Password?</MutedLink>
        <SubmitButton type="submit">Sign In</SubmitButton>
        <MutedLink href="#">
          Dont have an account?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Sign Up
          </BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
};
export default LoginForm;
