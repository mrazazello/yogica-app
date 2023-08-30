import Button from "shared/Button/Button";
import H123 from "./shared/H123/H123";
import { Header } from "./shared/Header/Header";
import { MainMenu } from "./shared/MainMenu/MainMenu";
import TextLine from "./shared/Text/TextLine";

function App() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Header />
      <div className="h-full">
        <H123 title="Whereas recognition of the inherent dignity" />
        <TextLine text="Sign up any way you like to start working out" />
        <Button text="test" />
      </div>
      <MainMenu />
    </div>
  );
}

export default App;
