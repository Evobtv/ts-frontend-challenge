import { useCallback, useEffect, useState } from 'react';

import { info } from '../../services/requests';
import { Info, SectionLoginTexts } from '../../interfaces/info';

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
    const [infoData, setInfoData] = useState<Info | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchInfo = useCallback(async () => {
      setLoading(true);
      const { options, url } = info();

      try {
        const result = await fetch(url, options);
        const data = await result.json();
        setInfoData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, []);

    useEffect(() => {
      fetchInfo();
    }, [fetchInfo]);

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
      <div>
        <WrappedComponent
          sectionLoginTexts={infoData.texts.section_login as SectionLoginTexts}
        />
      </div>
    );
  };
};
