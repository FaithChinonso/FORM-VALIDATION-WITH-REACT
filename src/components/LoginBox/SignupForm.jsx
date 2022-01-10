import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";

import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./common";

import { useContext } from "react";

import { AccountContext } from "./AccountContext";

const SignupForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const { switchToSignin } = useContext(AccountContext);
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
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <Input
          type="password"
          placeholder="Confirm Password"
          value={values.password2}
          onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
        <MutedLink href="#">Forget your Password?</MutedLink>
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <MutedLink href="#">
          Have an account?{" "}
          <BoldLink href="#" onClick={switchToSignin}>
            Sign In
          </BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
};
export default SignupForm;
