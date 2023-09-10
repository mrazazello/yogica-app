import { AppLayout } from "@app/AppLayout";
import { LoginForm } from "@features/AuthByLogin";

const MainPage = () => {
  return (
    <AppLayout valign="center">
      <LoginForm />
    </AppLayout>
  );
};

export default MainPage;
