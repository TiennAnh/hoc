import { Link } from "react-router-dom";
import { useState } from "react";
import LiteWalletAPI from "../axios/liteWallet.api";

function ForgotPass() {
  const [email, setEmail] = useState("");

  async function CallApi() {
    const res = await LiteWalletAPI.ForgotPass(email);
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
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button onClick={CallApi}>Click</button>
    </div>
  );
}

export default ForgotPass;
