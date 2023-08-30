import { FC } from "react";

interface IProps {
  text: string;
}

const TextLine: FC<IProps> = (props) => {
  const { text } = props;
  return <div className="text-sm text-blue-400 font-Raleway">{text}</div>;
};

export default TextLine;
