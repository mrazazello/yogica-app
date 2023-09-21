import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppLayout } from "@app/AppLayout";
import { userActions } from "@entities/user/model/slice/userSlice";
import { routePaths } from "@shared/config/router/routes";
import { IFolderItem } from "@shared/ui/folderCard/FolderCard";
import { FoldresList } from "@shared/ui/foldersList/FoldersList";

import LogoutIcon from "./icons/logout.svg";
import SettingsIcon from "./icons/settings.svg";
import ProfileIcon from "./icons/user.svg";

const More = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = useCallback(() => {
    dispatch(userActions.logout());
    navigate(routePaths.main);
  }, [dispatch, navigate]);

  const profileHandler = useCallback(() => {
    navigate(routePaths.profile);
  }, [navigate]);

  const folders: IFolderItem[] = useMemo(
    () => [
      {
        title: "Profile",
        icon: ProfileIcon,
        description: "User data, Birth Date, Age, Gender, Common Data",
        onClick: profileHandler
      },
      {
        title: "Settings",
        icon: SettingsIcon,
        description: "Custom Application Parameters and Settings"
      },
      {
        title: "Logout",
        icon: LogoutIcon,
        onClick: logoutHandler
      }
    ],
    [logoutHandler, profileHandler]
  );

  return (
    <AppLayout title="More">
      <FoldresList data={folders} />
    </AppLayout>
  );
};

export default More;
