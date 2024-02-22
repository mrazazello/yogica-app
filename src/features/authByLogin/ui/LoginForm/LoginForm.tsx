import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { getLoginError } from "@features/authByLogin/model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "@features/authByLogin/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "@features/authByLogin/model/selectors/getLoginPassword/getLoginPassword";
import { routePaths } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { H123 } from "@shared/ui/h123/H123";
import { Input } from "@shared/ui/Input/Input";
import { TextLine } from "@shared/ui/text/TextLine";
import { VSpace } from "@shared/ui/vSpace/VSpace";

import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginUserByName } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions } from "../../model/slice/loginSlice";

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const errors = useSelector(getLoginError);

  const loginHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const passwordHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserPassword(value));
    },
    [dispatch]
  );

  const submitHandler = useCallback(async () => {
    console.log("submit");
    const res = await dispatch(loginUserByName({ username, password }));
    console.log("res: ", res);
    if (res.meta.requestStatus === "fulfilled") {
      navigate(routePaths.main.URL());
    }
  }, [dispatch, navigate, username, password]);

  return (
    <>
      <H123 title="Login" align="center" />
      <TextLine align="center">
        Sign up any way you like to start working out
      </TextLine>
      <VSpace />
      {errors?.length &&
        errors.map((item, index) => (
          <Alert key={index} title={item.message} className="mb-20px" />
        ))}
      <Input
        placeholder="E-mail"
        name="email"
        required
        onChange={loginHandler}
        value={username}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        required
        onChange={passwordHandler}
        value={password}
      />
      <VSpace />
      {/* <div className="flex justify-center gap-4">
        <img src={tg} width={24} height={24} alt="Telegram" />
        <img src={gl} width={24} height={24} alt="Google" />
      </div> */}
      <VSpace />
      <TextLine align="center">
        Already registered?{" "}
        <Link to={routePaths.registration.URL()}>Registration is here</Link>
      </TextLine>
      <VSpace />
      <Button onClick={submitHandler} disabled={isLoading}>
        Continue
      </Button>
    </>
  );
};
