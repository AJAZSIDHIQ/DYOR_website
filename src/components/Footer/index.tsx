import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

// import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  // Empty,
  FooterContainer,
  Language,
  // Label,
  // LanguageSwitch,
  // LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  // const handleChange = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:l.help@dyoresearch.tech">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>
            </Col> */}
            {/* <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large>
            </Col> */}
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Developers")}</Title>
              <Large left="true" to="/">
                {t("Documentation")}
              </Large>
              <Large left="true" to="/">
                {t("Whitepaper")}
              </Large>
              <Large left="true" to="/">
                {t("Github")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Community")}</Title>
              <Large left="true" to="/">
                {t("Blog")}
              </Large>
              <Large left="true" to="/">
                {t("Announcements")}
              </Large>
              <Large left="true" to="/">
                {t("Telegram")}
              </Large>
              <Large left="true" to="/">
                {t("Reddit")}
              </Large>
              <Large left="true" to="/">
                {t("Twitter")}
              </Large>
            </Col>
          </Row>
          {/* <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Rancho Santa Margarita</Para>
              <Para>2131 Elk Street</Para>
              <Para>California</Para>
            </Col> 
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row> */}
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://t.me/dyor_channel"
                src="telegram.svg"
              />
              {/* <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              /> */}
              <SocialLink
                href="https://twitter.com/d_y_o_research"
                src="twitter.svg"
              />
              <SocialLink
                href="https://medium.com/@dyoresearch/"
                src="medium.svg"
              />
              <SocialLink
                href="https://reddit.com/r/dyoresearch/"
                src="reddit.svg"
              />
              <a href="https://t.me/dyorairdrop_bot" target="_blank" rel="noopener noreferrer">
                <img
                  src=""
                  alt="Join Airdrop"
                />
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
