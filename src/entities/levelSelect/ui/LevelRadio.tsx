import { H123 } from "@shared/ui/h123/H123";
import { RadioSelect } from "@shared/ui/radioSelect/RadioSelect";
import { TextLine } from "@shared/ui/text/TextLine";
import { FC } from "react";
import { LevelsEnumValues } from "../model/types/levels";

interface IProps {
  selected?: string;
  onChange?: (value: string) => void;
}

const LevelItem = (props: { title: string; description: string }) => {
  const { title, description } = props;

  return (
    <div>
      <H123 title={title} type="h3" />
      <TextLine size="sm">{description}</TextLine>
    </div>
  );
};

const data = Object.entries(LevelsEnumValues).map(([key, value]) => {
  return {
    label: <LevelItem title={value.title} description={value.description} />,
    value: key
  };
});

export const LevelRadio: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <RadioSelect data={data} selectedValue={selected} onChange={onChange} />
    </>
  );
};
