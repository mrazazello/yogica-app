import { Price } from "@shared/ui/Price/Price";
import { TextLine } from "@shared/ui/Text/TextLine";
import { FC } from "react";

interface IProps {
  item: {
    date: string;
    summ: string;
    plan: string;
    period: string;
  };
}

export const PaymentListItem: FC<IProps> = (props) => {
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
