import { FC } from "react";
import { Price } from "shared/ui/Price/Price";
import { TextLine } from "shared/ui/Text/TextLine";

interface IProps {
  item: {
    date: string;
    summ: string;
    plan: string;
    period: string;
  };
}

export const HistoryItem: FC<IProps> = (props) => {
  const { date, summ, plan, period } = props.item;
  return (
    <div className="grid grid-cols-dateList gap-x-4 mb-4">
      <TextLine text={date} align="right" />
      <div>
        <Price sum={summ} />
        <TextLine text={` / ${plan}`} inline />
        <TextLine text={period} />
      </div>
    </div>
  );
};
