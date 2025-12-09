import { LoginForm } from "@/features/auth/components/login-fom";
import { requireUauth } from "@/lib/auth-utils";

const Signin = async () => {
  await requireUauth();

  return <LoginForm />;
};

export default Signin;
