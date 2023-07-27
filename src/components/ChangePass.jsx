import { Link } from "react-router-dom";
import { useState } from "react";
import LiteWalletAPI from "../axios/litewallet.api";

function ChangePass() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const CallApi = async () => {
    const res = await LiteWalletAPI.ChangePass(oldPass, newPass);
    localStorage.getItem("token");
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
        placeholder="Password"
        value={oldPass}
        onChange={(event) => {
          setOldPass(event.target.value);
        }}
      />
      <input
        placeholder="New Password"
        value={newPass}
        onChange={(event) => {
          setNewPass(event.target.value);
        }}
      />
      <button onClick={CallApi}>Click</button>
    </div>
  );
}

export default ChangePass;
