import { FC } from "react";

interface IProps {
  sum: string;
}

export const Price: FC<IProps> = (props) => {
  const { sum } = props;
  const [entire, cents = ""] = sum.split(".");

  return (
    <span className="text-black font-bold text-[0.875rem]">
      $<span className="text-[1.25rem] ">{entire}</span>.{cents.padEnd(2, "0")}
    </span>
  );
};
