import { FC } from "react";

interface IProps {
  text: string;
}

export const Button: FC<IProps> = (props) => {
  const { text } = props;
  return (
    <button className="py-2 px-4 bg-green-100 text-green-300 font-bold border-b-4 border-green-200 rounded-lg">
      {text}
    </button>
  );
};
