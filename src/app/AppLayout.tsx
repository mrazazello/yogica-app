import { FC } from "react";
import { Header } from "shared/ui/Header/Header";
import { MainMenu } from "shared/ui/MainMenu/MainMenu";

interface IProps {
  children: React.ReactNode;
}

export const AppLayout: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Header />
      <div className="h-full w-full bg-blue-100">{children}</div>
      <MainMenu />
    </div>
  );
};
