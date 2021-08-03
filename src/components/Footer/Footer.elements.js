import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  color: #fff;
`;
export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 2rem;
  font-size: 2rem;
`;
export const FooterSubText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.25rem;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;
export const FormInput = styled.input`
  padding: 0.5rem 1.25rem;
  border-radius: 2px;
  margin-right: auto.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  border: 1px solid #fff;
  &::plaholder {
    color: #242424;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;
