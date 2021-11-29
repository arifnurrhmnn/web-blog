import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

function Register() {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="ImageBg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="full name" />
        <Gap height={18} />
        <Input label="Email" placeholder="email" />
        <Gap height={18} />
        <Input label="Password" placeholder="password" />
        <Gap height={20} />
        <Button title="Register" onClick={() => history.push("/login")} />
        <Gap height={50} />
        <Link title="kembali Ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
}

export default Register;
