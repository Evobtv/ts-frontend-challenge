import { UnderConstructionProps } from '../../types/globals';
import Button from '../Button';
import TitleComponent from '../TittleComponent';
import { Message } from './style';

const UnderConstruction: React.FC<UnderConstructionProps>  = ({
  setIsLoggedIn
}) => {
  return (
    <>
      <TitleComponent>Página em Construção...</TitleComponent>
      <Message>Para mais informações acesse nosso Whatsapp no canto inferior direito, será um prazer lhe atender!</Message>
      <Button variant='transparent' onClick={() => setIsLoggedIn(false)}>Voltar para o login</Button>
    </>
  );
};

export default UnderConstruction;
