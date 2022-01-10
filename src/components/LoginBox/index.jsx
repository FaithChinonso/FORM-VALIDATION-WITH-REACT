import React, { useState } from "react";
import styled from "styled-components";
import { AccountContext } from "./AccountContext";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const BoxContainer = styled.div`
  width: 32rem;
  min-height: 50rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.9rem;
  background-colour: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.2);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1.8em;
  padding-bottom: 4em;
`;

const BackDrop = styled.div`
  width: 100%;
  height: 55rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -60%;
  right: -25%;
  transform: rotate(60deg);

  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1rem;
`;

const HeaderText = styled.h2`
  font-size: 3rem;
  color: #fff;
  font-weight: 600;
  line-height: 1.25;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
color: #fff;
font-weight: 400;
font-size; 1.6rem;
z-index: 10;
margin-top: ,5rem;


`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "105rem",
    borderRaduis: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "100%",
    height: "55rem",
    borderRaduis: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const AccountBox = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setActive("signup");
    // setTimeout(() => {
    //   setActive("signup");
    // }, 400);
  };
  const switchToSignin = () => {
    playExpandingAnimation();
    setActive("signin");
    // setTimeout(() => {
    //   setActive("signin");
    // }, 400);
  };
  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome Back</HeaderText>
              <SmallText>Please fill form to sign-in to continue</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create Account</HeaderText>
              <SmallText>Please sign-up to continue</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
};
export default AccountBox;
