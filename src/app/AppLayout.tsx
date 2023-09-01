import { FC } from "react";
import { cn } from "shared/lib/classNames/classNames";
import { Header } from "shared/ui/Header/Header";
import { MainMenu } from "shared/ui/MainMenu/MainMenu";

interface IProps {
  title?: string;
  valign?: "top" | "center" | "bottom";
  children: React.ReactNode;
}

export const AppLayout: FC<IProps> = (props) => {
  const { title, valign = "top", children } = props;
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Header title={title} />
      <div
        className={cn(
          "w-full h-full flex flex-col p-10px overflow-y-auto bg-blue-100",
          {
            "justify-start": valign === "top",
            "justify-center": valign === "center",
            "justify-end": valign === "bottom",
          }
        )}
      >
        {children}
      </div>
      <MainMenu />
    </div>
  );
};
