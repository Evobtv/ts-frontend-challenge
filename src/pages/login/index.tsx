import { withAuthContainer } from '../../HOC/auth';
import { SectionLoginTexts } from '../../interfaces/info';

function LoginInner({
  sectionLoginTexts
}: {
  sectionLoginTexts: SectionLoginTexts;
}) {
  return (
    <div>
      login
      {sectionLoginTexts.title}
    </div>
  );
}

const Login = withAuthContainer(LoginInner);
export default Login;
