import Button from "./shared/Button/Button";
import { Header } from "./shared/Header/Header";
import { MainMenu } from "./shared/MainMenu/MainMenu";

function App() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Header />
      <div className="h-full">
        <h1 className="text-3xl font-bold">Vite + React + Tailwind</h1>
        <Button text="test" />
        <p>Edit and save to test HMR</p>
        <p>Click on the Vite and React logos to learn more</p>
      </div>
      <MainMenu />
    </div>
  );
}

export default App;
