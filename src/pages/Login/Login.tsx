import { AppLayout } from "app/AppLayout";
import { LoginForm } from "features/AuthByLogin";
import { ContentWrapper } from "shared/ui/ContentWrapper/ContentWrapper";

function MainPage() {
  return (
    <AppLayout>
      <ContentWrapper valign="center">
        <LoginForm />
      </ContentWrapper>
    </AppLayout>
  );
}

export default MainPage;
