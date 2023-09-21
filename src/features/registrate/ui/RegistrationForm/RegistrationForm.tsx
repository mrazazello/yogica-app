import { Button } from "@shared/ui/button/Button";
import { H123 } from "@shared/ui/h123/H123";
import { Input } from "@shared/ui/Input/Input";
import { TextLine } from "@shared/ui/text/TextLine";
import { VSpace } from "@shared/ui/vSpace/VSpace";

import fb from "/facebook.svg";
import gl from "/google.svg";
import tg from "/telegram.svg";

export const RegistrationForm = () => {
  return (
    <>
      <H123 title="Registration" align="center" />
      <TextLine
        text="Sign up any way you like to start working out"
        align="center"
      />
      <VSpace />
      <Input placeholder="E-mail / Phone / Telegram" name="email" required />
      <VSpace />
      <div className="flex justify-center gap-4">
        <img src={tg} width={24} height={24} alt="Telegram" />
        <img src={fb} width={24} height={24} alt="Facebook" />
        <img src={gl} width={24} height={24} alt="Google" />
      </div>
      <VSpace />
      <TextLine text="Already registered? Login is here" align="center" />
      <VSpace />
      <Button text="Continue" />
    </>
  );
};
