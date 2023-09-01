import { AppLayout } from "app/AppLayout";
import { LoginForm } from "features/AuthByLogin";

function MainPage() {
  return (
    <AppLayout valign="center">
      <LoginForm />
    </AppLayout>
  );
}

export default MainPage;
