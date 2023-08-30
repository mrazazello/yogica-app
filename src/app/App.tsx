import { Button } from "shared/Button/Button";
import { ContentWrapper } from "shared/ContentWrapper/ContentWrapper";
import { H123 } from "shared/H123/H123";
import { Header } from "shared/Header/Header";
import { Input } from "shared/Input/Input";
import { MainMenu } from "shared/MainMenu/MainMenu";
import { TextLine } from "shared/Text/TextLine";

function App() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Header />
      <div className="h-full bg-blue-100">
        <ContentWrapper valign="center">
          <H123
            title="Whereas recognition of the inherent dignity"
            align="center"
          />
          <TextLine
            text="Sign up any way you like to start working out"
            align="center"
          />
          <Input placeholder="E-mail / Phone / Telegram" name="email" />
          <Button text="test" />
        </ContentWrapper>
      </div>
      <MainMenu />
    </div>
  );
}

export default App;
