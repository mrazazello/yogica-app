import AppLayout from "app/AppLayout";
import { Button } from "shared/ui/Button/Button";
import { ContentWrapper } from "shared/ui/ContentWrapper/ContentWrapper";
import { H123 } from "shared/ui/H123/H123";
import { Input } from "shared/ui/Input/Input";
import { TextLine } from "shared/ui/Text/TextLine";
import { VSpace } from "shared/ui/VSpace/VSpace";

function Registration() {
  return (
    <AppLayout>
      <ContentWrapper valign="center">
        <H123 title="Registration" align="center" />
        <TextLine
          text="Sign up any way you like to start working out"
          align="center"
        />
        <VSpace />
        <Input placeholder="E-mail / Phone / Telegram" name="email" required />

        <TextLine text="Already registered? Login is here" align="center" />

        <Button text="Continue" />
      </ContentWrapper>
    </AppLayout>
  );
}

export default Registration;
