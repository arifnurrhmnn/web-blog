import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

function Login() {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="ImageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="email" />
        <Gap height={18} />
        <Input label="Password" placeholder="password" />
        <Gap height={20} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={50} />
        <Link
          title="Belum punya akun, silahkan daftar"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
}

export default Login;
