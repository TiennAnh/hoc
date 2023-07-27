import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePass from "./components/ChangePass";
import ForgotPass from "./components/ForgotPass";
import ResetPass from "./components/ResetPass";
import Register from "./components/register";
import Login from "./components/login";
import Transaction from "./components/Transaction";
import { Provider } from "react-redux";
import store from "./redux";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/changePass' element={<ChangePass />} />
          <Route path='/forgotPass' element={<ForgotPass />} />
          <Route path='/resetPass' element={<ResetPass />} />
          <Route path='/transaction' element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
