import { Link, useNavigate } from "react-router-dom";

import { routePaths } from "@shared/config/router/routes";
import { Input } from "@shared/ui/Input/Input";
import { Button } from "@shared/ui/button/Button";
import { H123 } from "@shared/ui/h123/H123";
import { TextLine } from "@shared/ui/text/TextLine";
import { VSpace } from "@shared/ui/vSpace/VSpace";

import { registrationActions } from "@features/registration";
import { registrationByEmail } from "@features/registration/model/services/registrationByEmail/registrationByEmail";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  getRegistrationEmail,
  getRegistrationFirstName,
  getRegistrationLastName,
  getRegistrationPassword
} from "../../model/selectors/getRegistrationData/getRegistrationData";
import { ShowErrors } from "@entities/error";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const email = useSelector(getRegistrationEmail);
  const password = useSelector(getRegistrationPassword);
  const firstName = useSelector(getRegistrationFirstName);
  const lastName = useSelector(getRegistrationLastName);

  const emailHandler = useCallback(
    (value: string) => {
      dispatch(registrationActions.setUserEmail(value));
    },
    [dispatch]
  );

  const firstNameHandler = useCallback(
    (value: string) => {
      dispatch(registrationActions.setUserFirstName(value));
    },
    [dispatch]
  );

  const lastNameHandler = useCallback(
    (value: string) => {
      dispatch(registrationActions.setUserLastName(value));
    },
    [dispatch]
  );

  const passwordHandler = useCallback(
    (value: string) => {
      dispatch(registrationActions.setUserPassword(value));
    },
    [dispatch]
  );

  const submitHandler = useCallback(async () => {
    const res = await dispatch(registrationByEmail());
    // console.log("res: ", res);
    if (res.meta.requestStatus === "fulfilled") {
      // navigate(routePaths.main.URL());
    }
  }, [dispatch, navigate]);

  return (
    <>
      <H123 title="Registration" align="center" />
      <TextLine align="center">
        Sign up any way you like to start working out
      </TextLine>
      <VSpace />
      <ShowErrors />
      <Input
        placeholder="E-mail"
        name="email"
        value={email}
        required
        onChange={emailHandler}
      />
      <Input
        placeholder="First name"
        name="firstName"
        value={firstName}
        required
        onChange={firstNameHandler}
      />
      <Input
        placeholder="Last name"
        name="lastName"
        value={lastName}
        required
        onChange={lastNameHandler}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        required
        onChange={passwordHandler}
      />
      <VSpace />
      {/* <div className="flex justify-center gap-4">
        <img src={tg} width={24} height={24} alt="Telegram" />
        <img src={gl} width={24} height={24} alt="Google" />
      </div> */}
      <VSpace />
      <TextLine align="center">
        Already registered?{" "}
        <Link to={routePaths.login.URL()}>Login is here</Link>
      </TextLine>
      <VSpace />
      <Button onClick={submitHandler}>Continue</Button>
    </>
  );
};
