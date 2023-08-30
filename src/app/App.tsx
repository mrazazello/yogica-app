import { Button } from "shared/ui/Button/Button";
import { ContentWrapper } from "shared/ui/ContentWrapper/ContentWrapper";
import { H123 } from "shared/ui/H123/H123";
import { Header } from "shared/ui/Header/Header";
import { Input } from "shared/ui/Input/Input";
import { MainMenu } from "shared/ui/MainMenu/MainMenu";
import { TextLine } from "shared/ui/Text/TextLine";
import { VSpace } from "shared/ui/VSpace/VSpace";

function App() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Header />
      <div className="h-full w-full bg-blue-100">
        <ContentWrapper valign="center">
          <H123 title="Login" align="center" />
          <TextLine
            text="Sign up any way you like to start working out"
            align="center"
          />
          <VSpace />
          <Input
            placeholder="E-mail / Phone / Telegram"
            name="email"
            required
          />
          <Input placeholder="Password" name="password" />

          <TextLine text="Already registered? Login is here" align="center" />

          <Button text="Continue" />
        </ContentWrapper>
      </div>
      <MainMenu />
    </div>
  );
}

export default App;
