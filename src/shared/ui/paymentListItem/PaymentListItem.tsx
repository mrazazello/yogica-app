import { Price } from "@shared/ui/price/Price";
import { TextLine } from "@shared/ui/text/TextLine";
import { FC } from "react";

interface IProps {
  item: {
    id: string;
    date: string;
    sum: string;
    membership: string;
    periodFrom: string;
    periodTo: string;
  };
}

export const PaymentListItem: FC<IProps> = (props) => {
  const { date, sum, membership, periodFrom, periodTo } = props.item;
  return (
    <div className="grid grid-cols-dateList gap-x-4 mb-4">
      <TextLine align="right">{date}</TextLine>
      <div>
        <Price sum={sum} />
        <TextLine inline> / {membership}</TextLine>
        <TextLine>
          {periodFrom} - {periodTo}
        </TextLine>
      </div>
    </div>
  );
};
