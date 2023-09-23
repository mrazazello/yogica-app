import { Price } from "@shared/ui/price/Price";
import { TextLine } from "@shared/ui/text/TextLine";
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
      <TextLine align="right">{date}</TextLine>
      <div>
        <Price sum={summ} />
        <TextLine inline> / {plan}</TextLine>
        <TextLine>{period}</TextLine>
      </div>
    </div>
  );
};
