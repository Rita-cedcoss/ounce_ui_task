import {
  Button,
  Card,
  FormElement,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useState } from "react";
const FormLogin = () => {
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  // function for form validation
  function formlogin() {
    if (
      (email == undefined && passwd == undefined) ||
      email == undefined ||
      passwd == undefined
    ) {
      alert("please fill all data");
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("please enter correct email");
    } else if (
      !passwd.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
    ) {
      alert(
        "**Password length must be atleast 8 characters,1 atleast special character,1 atleast capital letter and 1 atleast number"
      );
    } else {
      alert("Login successfully");
      setEmail("");
      setPasswd("");
    }
  }
  return (
    <Card extraClass="outerForm">
      <TextStyles
        content="Login Form"
        headingTypes="LG-2.8"
        lineHeight="LH-4.8"
        type="Heading"
      />
      <FormElement>
        <TextField
          type="email"
          name="Email"
          lineHeight="LH-4.8"
          onChange={(e) => {
            setEmail(e);
          }}
          placeHolder="Enter Your Email"
          value={email}
        />
        <TextField
          type="password"
          name="Password"
          lineHeight="LH-4.8"
          onChange={(e) => {
            setPasswd(e);
          }}
          placeHolder="Enter Your Password"
          value={passwd}
        />
        <Button
          content="Login"
          halign="Equal"
          iconAlign="left"
          length="none"
          onAction={function noRefCheck() {}}
          onClick={() => {
            formlogin();
          }}
          tabIndex="1"
          thickness="thin"
          type="Primary"
        />
      </FormElement>
    </Card>
  );
};

export default FormLogin;
