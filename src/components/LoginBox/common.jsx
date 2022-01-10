import styled from "styled-components";

export const BoxContainer = styled.div`
width: 100%
display: flex;
flex-direction: column
align-items: center;
margin-top: 1rem;
`;
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const MutedLink = styled.a`
  font-size: 1.2rem;
  color: rgba(148, 187, 233, 1);
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 1.2rem;
  color: rgba(148, 187, 233, 1);
  font-weight: 600;
  text-decoration: none;
`;

export const Input = styled.input`
width: 100%;
height: 3rem;
border: 10px solid rgba(238, 174, 202, 0.03)
outline: none;
border-bottom: 1.4px solid transparent;
color: #000;
font-size: 1.2rem;

&::placeholder{
    color: rgba(238, 174, 202, 1);
}

&:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(238, 174, 202, 0.4);
    
}
&:focus {
    outline: none;
    border-bottom: 2px solid rgba(148, 187, 233, 0.8);
}
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 1.1rem 40%;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 70rem;
  cursor: pointer;
  transition: all, 240ms ease-in;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  &:hover {
    filter: brightness(1.06);
  }
`;
