import { AppLayout } from "@app/AppLayout";
import { ClassesHistory } from "@entities/classesHistory";

function Progress() {
  return (
    <AppLayout title="Progress">
      <ClassesHistory />
    </AppLayout>
  );
}

export default Progress;
