import { AppLayout } from "@app/AppLayout";
import { ClassDetail } from "@entities/classDetail";

const Class = () => {
  return (
    <AppLayout title="Class # 111" noPadding={true}>
      <ClassDetail />
    </AppLayout>
  );
};

export default Class;
