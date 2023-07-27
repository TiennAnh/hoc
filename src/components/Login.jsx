import { Link } from "react-router-dom";
import { useState } from "react";
import LiteWalletAPI from "../axios/liteWallet.api";
import { useConnection } from "../redux/connections/hooks";

const Login = () => {
  const {onSetTokens} = useConnection();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleApi = async () => {
    const res = await LiteWalletAPI.Login(email, password);
    onSetTokens(res.token);
    localStorage.setItem("token", res.token);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Link style={{ padding: "0px 20px" }} to={"/"}>
        Register
      </Link>
      <Link style={{ padding: "0px 20px" }} to={"/login"}>
        Login
      </Link>
      <Link style={{ padding: "0px 20px" }} to={"/changePass"}>
        ChangePass
      </Link>
      <Link style={{ padding: "0px 20px" }} to={"/forgotPass"}>
        ForgotPass
      </Link>
      <Link style={{ padding: "0px 20px" }} to={"/resetPass"}>
        ResetPass
      </Link>
      <Link style={{ padding: "0px 20px" }} to={"/transaction"}>
        Transaction
      </Link>
      <input
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        placeholder="email"
      />
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        placeholder="******"
      />
      <button onClick={handleApi}>Click</button>
    </div>
  );
};

export default Login;
