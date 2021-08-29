import SignIn from '../../components/SignIn/SignIn';

import SignUp from '../../components/SignUp/SignUp';

import {SignInAndSignUpContainer} from './SignInAndSignUpStyles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;