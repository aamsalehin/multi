import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
} from "./Footer.elements";
import { Button } from "../../globalStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join Our exclusive membership to recieve the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
      </FooterSubscription>
      <Form>
        <FormInput type="email" name="email" placeholder="your email" />
        <Button>subscribe</Button>
      </Form>
    </FooterContainer>
  );
};

export default Footer;
