import { Link } from "react-router-dom";
import { useState } from "react";
import LiteWalletAPI from "../axios/liteWallet.api";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CallApi = async () => {
    const res = await LiteWalletAPI.Register(email, password);
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
      <div style={{ marginTop: "100px" }}>
        <input
          style={{ margin: "10px" }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
          placeholder="Email"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
          placeholder="Password"
        />
        <div>
          <button onClick={CallApi}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
