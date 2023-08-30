import { AppLayout } from "app/AppLayout";
import { RegistrationForm } from "features/Registrate";
import { ContentWrapper } from "shared/ui/ContentWrapper/ContentWrapper";

function Registration() {
  return (
    <AppLayout>
      <ContentWrapper valign="center">
        <RegistrationForm />
      </ContentWrapper>
    </AppLayout>
  );
}

export default Registration;
