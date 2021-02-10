import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Button } from '../../theme/globalStyles';
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIcon,
  SocialIconLink,
  WebsiteRights,
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form>
          <FormInput
            name="email"
            type="email"
            placeholder="Your E-mail"
          ></FormInput>
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>About us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink>Testimonials</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Investors</FooterLink>
            <FooterLink>Terms of service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Contact us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink>Testimonials</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Investors</FooterLink>
            <FooterLink>Terms of service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink>Testimonials</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Investors</FooterLink>
            <FooterLink>Terms of service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Social media</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink>Testimonials</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Investors</FooterLink>
            <FooterLink>Terms of service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon></SocialIcon>
            Tiago<strong>Gonçalves</strong>
          </SocialLogo>
          <WebsiteRights> Tiago Gonçalves © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Behance">
              <FaBehance />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
