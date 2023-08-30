import { FC } from "react";

interface IProps {
  text: string;
}

export const Button: FC<IProps> = (props) => {
  const { text } = props;
  return (
    <button className="bg-green-100 hover:bg-green-300 text-green-300 font-bold py-2 px-4 border-b-4 border-green-200 hover:border-green-300 rounded-lg">
      {text}
    </button>
  );
};
