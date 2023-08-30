import { FC } from "react";

interface IProps {
  align?: "start" | "center" | "end";
  valign?: "start" | "center" | "end";
  children: React.ReactNode;
}

export const ContentWrapper: FC<IProps> = (props) => {
  const { align = "start", valign = "start", children } = props;
  return (
    <div
      className={`h-full flex flex-col items-${align} justify-${valign} px-10px`}
    >
      {children}
    </div>
  );
};
