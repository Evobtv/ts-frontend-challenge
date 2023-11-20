import { WhatsappLink, WhatsappPopUpIcon } from './style';

function WhatsappPopUp() {
  const whatsappLink: string = "https://api.whatsapp.com/send?phone=+5584994505773&text=Ola%2C+Manoel%21+%0AQuero+fazer+o+or%C3%A7amento+da+tatuagem+pelo+WhatsApp";
  const whatsappTitle: string = "Deseja fazer o orçamento da tatuagem pelo WhatsApp?";

  return (
    <WhatsappLink
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      title={whatsappTitle}
    >
      <WhatsappPopUpIcon className="fa fa-whatsapp whatsapp-icon" />
    </WhatsappLink>
  );
}

export default WhatsappPopUp;
