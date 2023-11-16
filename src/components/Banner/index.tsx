import { CallAction, Logo, Slogan, SubTitle, Wrapper } from "./style";

interface BannerProps {
  subtitle: string;
  slogan: string;
  callAction: string;
  logoDesktop: string;
  logoMobile: string;
}

const Banner = ({
  subtitle,
  slogan,
  callAction,
  logoDesktop,
  logoMobile,
}: BannerProps) => {
  return (
    <Wrapper>
      <picture>
        <source media="(min-width:728px)" srcSet={logoDesktop}></source>
        <Logo src={logoMobile} alt="Topttoo"></Logo>
      </picture>
      <SubTitle>{subtitle}</SubTitle>
      <Slogan>{slogan}</Slogan>
      <CallAction>{callAction}</CallAction>
    </Wrapper>
  );
};

export default Banner;
