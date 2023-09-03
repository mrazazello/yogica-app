import { AppLayout } from "app/AppLayout";
import { FolderCard } from "shared/ui/FolderCard/FolderCard";

import LogoutIcon from "./logout.svg";
import SettingsIcon from "./settings.svg";
import ProfileIcon from "./user.svg";

const folders = [
  {
    title: "Profile",
    icon: ProfileIcon,
    description: "User Settings, Birth Date, Age, Gender, Common Data",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    description: "Custom Application Parameters and Settings",
  },
  {
    title: "Logout",
    icon: LogoutIcon,
  },
];

const More = () => {
  return (
    <AppLayout title="More">
      {folders.map((item) => (
        <FolderCard key={item.title} item={item} />
      ))}
    </AppLayout>
  );
};

export default More;
