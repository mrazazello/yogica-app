import { FolderCard } from "@shared/ui/FolderCard/FolderCard";

import LogoutIcon from "./icons/logout.svg";
import SettingsIcon from "./icons/settings.svg";
import ProfileIcon from "./icons/user.svg";

const folders = [
  {
    title: "Profile",
    icon: ProfileIcon,
    description: "User Settings, Birth Date, Age, Gender, Common Data"
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    description: "Custom Application Parameters and Settings"
  },
  {
    title: "Logout",
    icon: LogoutIcon
  }
];

export const FoldresList = () => {
  return (
    <>
      {folders.map((item) => (
        <FolderCard key={item.title} item={item} />
      ))}
    </>
  );
};
