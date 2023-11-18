import { withAuthContainer } from '../../HOC/auth';
import { SectionLoginTexts } from '../../interfaces/info';

function LoginInner({
  sectionLoginTexts
}: {
  sectionLoginTexts: SectionLoginTexts;
}) {
  return (
    <>
      login
      {sectionLoginTexts.title}
    </>
  );
}

const Login = withAuthContainer(LoginInner);
export default Login;
