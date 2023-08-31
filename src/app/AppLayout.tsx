import { FC } from "react";
import { Header } from "shared/ui/Header/Header";
import { MainMenu } from "shared/ui/MainMenu/MainMenu";

interface IProps {
  title?: string;
  children: React.ReactNode;
}

export const AppLayout: FC<IProps> = (props) => {
  const { title, children } = props;
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Header title={title} />
      <div className="h-full w-full bg-blue-100">{children}</div>
      <MainMenu />
    </div>
  );
};
