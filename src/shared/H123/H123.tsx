import { FC } from "react";

interface IProps {
  title: string;
  align?: "left" | "right" | "center";
}

export const H123: FC<IProps> = (props) => {
  const { title, align = "left" } = props;
  return (
    <h1 className={`text-3xl font-bold font-Nunito text-${align}`}>{title}</h1>
  );
};
