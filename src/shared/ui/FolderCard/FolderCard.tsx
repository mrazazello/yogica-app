import { H123 } from "@shared/ui/H123/H123";
import { TextLine } from "@shared/ui/Text/TextLine";
import { FC } from "react";

interface IProps {
  item: {
    title: string;
    icon: string;
    description?: string;
  };
}

export const FolderCard: FC<IProps> = (props) => {
  const { title, icon, description } = props.item;
  return (
    <div className="flex items-start border-dotted border-b py-[15px]">
      <img
        src={icon}
        width={24}
        height={24}
        alt={title}
        className="mx-[10px] mt-[8px]"
      />
      <div>
        <H123 title={title} type="h2" />
        {description && <TextLine text={description} />}
      </div>
    </div>
  );
};
