import { FC } from "react";
import { useSelector } from "react-redux";

import { getUserAuthData } from "@entities/user";
import { cn } from "@shared/lib/classNames/classNames";
import { Header } from "@shared/ui/header/Header";
import { MainMenu } from "@shared/ui/mainMenu/MainMenu";

interface IProps {
  title?: string;
  valign?: "top" | "center" | "bottom";
  noPadding?: boolean;
  children: React.ReactNode;
}

export const AppLayout: FC<IProps> = (props) => {
  const { title, valign = "top", noPadding = false, children } = props;
  const auth = useSelector(getUserAuthData);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Header title={title} />
      <div
        className={cn(
          "w-full h-full overflow-y-auto flex flex-col bg-blue-100",
          {
            "p-10px": !noPadding,
            "justify-start": valign === "top",
            "justify-center": valign === "center",
            "justify-end": valign === "bottom"
          }
        )}
      >
        {children}
      </div>
      {auth && <MainMenu />}
    </div>
  );
};
