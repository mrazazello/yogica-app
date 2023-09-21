import { FolderCard, IFolderItem } from "@shared/ui/folderCard/FolderCard";
import { FC } from "react";

interface IProps {
  data: IFolderItem[];
}

export const FoldresList: FC<IProps> = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((item) => (
        <FolderCard key={item.title} item={item} />
      ))}
    </>
  );
};
