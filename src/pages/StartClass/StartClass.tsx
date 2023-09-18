import { AppLayout } from "@app/AppLayout";
import { StartClassForm } from "@features/StartClass";

function StartClass() {
  return (
    <AppLayout title="Start Class" valign="center">
      <StartClassForm />
    </AppLayout>
  );
}

export default StartClass;
