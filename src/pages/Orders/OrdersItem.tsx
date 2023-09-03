import { FC } from "react";
import { TextLine } from "shared/ui/Text/TextLine";

interface IProps {
  item: {
    date: string;
    summ: string;
    plan: string;
    period: string;
  };
}

export const OrdersItem: FC<IProps> = (props) => {
  const { date, summ, plan, period } = props.item;
  return (
    <div className="grid grid-cols-dateList gap-x-4 mb-4">
      <TextLine text={date} align="right" />
      <div>
        <span className="text-black font-bold text-[0.875rem]">
          $<span className="text-[1.25rem] ">{summ}</span>.00
        </span>
        <TextLine text={` / ${plan}`} inline />
        <TextLine text={period} />
      </div>
    </div>
  );
};
