import { Link } from "react-router-dom";
import { useState } from "react";
import LiteWalletAPI from "../axios/liteWallet.api";

function ResetPass() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");

  async function CallApi() {
    const res = await LiteWalletAPI.ResetPass(email, password, verify);
    console.log(res);
  }

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
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="Password"
        value={password}
      />
      <input
        onChange={(event) => {
          setVerify(event.target.value);
        }}
        placeholder="verifyCode"
        value={verify}
      />
      <button onClick={CallApi}>Click</button>
    </div>
  );
}

export default ResetPass;
