import { cn } from "@shared/lib/classNames/classNames";
import { H123 } from "@shared/ui/h123/H123";
import { TextLine } from "@shared/ui/text/TextLine";
import { FC } from "react";

export interface IFolderItem {
  title: string;
  icon: string;
  description?: string;
  onClick?: () => void;
}
interface IProps {
  item: IFolderItem;
}

export const FolderCard: FC<IProps> = (props) => {
  const { title, icon, description, onClick } = props.item;
  return (
    <div className="flex items-start border-dotted border-b py-[15px]">
      <img
        src={icon}
        width={24}
        height={24}
        alt={title}
        className="mx-[10px] mt-[8px]"
      />
      <div onClick={onClick}>
        <H123
          title={title}
          type="h2"
          className={cn("", {
            "cursor-pointer text-blue-300": onClick !== undefined
          })}
        />
        {description && <TextLine>{description}</TextLine>}
      </div>
    </div>
  );
};
