import { SectionLoginTexts } from '../../interfaces/info';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import useInfo from './useInfo';

import * as S from './styles';
import Text from '../../components/Text';
import Feedback from '../../components/Feedback';

export type ConsumerComponent = ({
  sectionLoginTexts
}: {
  sectionLoginTexts: SectionLoginTexts;
}) => JSX.Element;

export const withAuthContainer = (WrappedComponent: ConsumerComponent) => {
  return () => {
    const { data: infoData, error, loading } = useInfo();
    const isTablet = useMediaQuery('(max-width: 768px)');

    if (loading) {
      return (
        <Feedback>
          <S.LoadingText $variant="heading1">Carregando...</S.LoadingText>
        </Feedback>
      );
    }

    if (error || !infoData) {
      return (
        <Feedback>
          <Text $variant="heading2" $align="center" $color="secondary">
            Erro ao carregar informações
          </Text>
          <Text $variant="body1" $align="center" $color="secondary">
            Tente novamente mais tarde
          </Text>
        </Feedback>
      );
    }

    return (
      <S.AuthContainer>
        {!isTablet ? (
          <S.InfoContainer>
            <S.InfoWrapperMaxWidth>
              <img src={infoData.images.logo} alt="logo" width={200} />
              <S.InfoTextsContainer>
                <Text $variant="heading2" $color="secondary">
                  {infoData.texts.subtitle}
                </Text>
                <Text
                  $variant="heading2"
                  component="p"
                  $color="secondary"
                  $weight={300}
                >
                  {infoData.texts.slogan}
                </Text>
                <Text $variant="heading2" $color="secondary" component="p">
                  {infoData.texts.call_action}
                </Text>
              </S.InfoTextsContainer>
            </S.InfoWrapperMaxWidth>
          </S.InfoContainer>
        ) : (
          <S.LogoContainer>
            <img src={infoData.images.logo_mobile} alt="logo" width={200} />
          </S.LogoContainer>
        )}

        <S.ContentWrapper>
          <S.ContentWrapperMaxWidth>
            <WrappedComponent
              sectionLoginTexts={
                infoData.texts.section_login as SectionLoginTexts
              }
            />
          </S.ContentWrapperMaxWidth>
        </S.ContentWrapper>
      </S.AuthContainer>
    );
  };
};
