export interface SectionLoginTexts {
  title: string;
  forgot: string;
  register: string;
  register_call: string;
  login_call: string;
}

export interface InfoTexts {
  title: string;
  subtitle: string;
  slogan: string;
  call_action: string;
  section_login: SectionLoginTexts;
}

export interface InfoImages {
  logo: string;
  logo_mobile: string;
}

export interface Info {
  texts: InfoTexts;
  images: InfoImages;
}
