import styled from "styled-components";
import facebookIcon from "../../../assets/svg/sns_logo/icon-logo-facebook.svg";
import twitterIcon from "../../../assets/svg/sns_logo/icon-logo-twitter.svg";
import instagramIcon from "../../../assets/svg/sns_logo/icon-logo-instagram.svg";

const Footer = () => {
  const styles = {
    borderRight: "2px solid #EEEEEE",
  };

  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <MailToLink href="mailto:stovegg@gmail.com" style={styles}>
          문의
        </MailToLink>
        <MailToLink href="mailto:stovegg@gmail.com">제휴</MailToLink>
      </FooterInnerWrapper>
      <FooterInnerWrapper>
        <SNSLogo
          href="https://www.facebook.com/profile.php?id=100087614380077"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="facebook logo" />
        </SNSLogo>
        <SNSLogo
          href="https://twitter.com/Stovegg"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="twitter logo" />
        </SNSLogo>
        <SNSLogo
          href="https://www.instagram.com/stove.gg/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="instagram logo" />
        </SNSLogo>
      </FooterInnerWrapper>
      <FooterInnerWrapper className="copyright">
        &copy; {new Date().getFullYear()} Stove, All rights reserved.
      </FooterInnerWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.typography.bodyRg};
  color: ${(props) => props.theme.color.grayScale.gray40};
`;

const FooterInnerWrapper = styled.div`
  & + & {
    margin-top: 14px;
  }
`;

const MailToLink = styled.a`
  color: ${(props) => props.theme.color.grayScale.gray80};
  padding: 0 8px;

  &:hover {
    color: ${(props) => props.theme.color.main80};
    text-decoration: underline;
  }
`;

const SNSLogo = styled.a`
  margin: 0 8px;
`;

export default Footer;
