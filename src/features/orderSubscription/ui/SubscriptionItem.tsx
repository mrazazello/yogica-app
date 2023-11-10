import { Price } from "@shared/ui/price/Price";
import { TextLine } from "@shared/ui/text/TextLine";
import { FC } from "react";

interface IProps {
  summ: string;
  membership: string;
  period: string;
  perDay: string;
}

export const SubscriptionItem: FC<IProps> = (props) => {
  const { summ, period, perDay, membership } = props;
  return (
    <div className="w-full flex justify-between">
      <div>
        <Price sum={summ} />
        <TextLine>{membership}</TextLine>
      </div>
      <div>
        <Price sum={perDay} />
        <TextLine>/ {period}</TextLine>
      </div>
    </div>
  );
};
