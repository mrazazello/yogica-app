import { FC } from "react";

interface IProps {
  text: string;
  align?: "left" | "center" | "right";
}

export const TextLine: FC<IProps> = (props) => {
  const { text, align = "left" } = props;
  return (
    <div className={`text-sm text-blue-400 font-Raleway text-${align}`}>
      {text}
    </div>
  );
};
