import { FC } from "react";

import { Button } from "@shared/ui/Button/Button";
import { H123 } from "@shared/ui/H123/H123";
import { Input } from "@shared/ui/Input/Input";
import { TextLine } from "@shared/ui/Text/TextLine";
import { VSpace } from "@shared/ui/VSpace/VSpace";
import { Link } from "react-router-dom";

import { routePaths } from "@shared/config/router/routes";
import fb from "/facebook.svg";
import gl from "/google.svg";
import tg from "/telegram.svg";

export const LoginForm: FC = () => {
  return (
    <>
      <H123 title="Login" align="center" />
      <TextLine
        text="Sign up any way you like to start working out"
        align="center"
      />
      <VSpace />
      <Input placeholder="E-mail / Phone / Telegram" name="email" required />
      <Input placeholder="Password" name="password" required />
      <VSpace />
      <div className="flex justify-center gap-4">
        <img src={tg} width={24} height={24} alt="Telegram" />
        <img src={fb} width={24} height={24} alt="Facebook" />
        <img src={gl} width={24} height={24} alt="Google" />
      </div>
      <VSpace />
      <TextLine
        text={
          <>
            Already registered?{" "}
            <Link to={routePaths.registration}>Registration is here</Link>
          </>
        }
        align="center"
      />
      <VSpace />
      <Button text="Continue" />
    </>
  );
};
