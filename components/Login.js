import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="login-container">
      <div className="login-button" typeof="submit" onClick={signIn}>
        Login
      </div>
    </div>
  );
}

export default Login;
