import { AppLayout } from "@app/AppLayout";
import { LoginForm } from "@features/authByLogin";

const MainPage = () => {
  return (
    <AppLayout valign="center">
      <LoginForm />
    </AppLayout>
  );
};

export default MainPage;
