import { FC } from "react";

interface IProps {
  title: string;
}

const H123: FC<IProps> = (props) => {
  const { title } = props;
  return <h1 className="text-3xl font-bold font-Nunito">{title}</h1>;
};

export default H123;
