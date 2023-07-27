import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useConnection } from "../redux/connections/hooks";
import LiteWalletAPI from "../axios/liteWallet.api";

function Transaction() {
  const { connection, onSetTokens, onSetEmail } = useConnection();
  const { tokens, email } = connection;
  const [tokenAddress, setTokenAddress] = useState([]);

  useEffect(() => {}, []);
  console.log(tokens, email);

  const CallApi = async () => {
    const res = await LiteWalletAPI.Transaction();
    console.log(res);
    setTokenAddress(res.erc20Transactions)
  };
  
  return (
    <div>
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
        <button onClick={CallApi}>Click</button>
        
          <div>
            {tokenAddress.map((item) => (
              <div key={item.id}>
                <p>{item.id}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Transaction;
