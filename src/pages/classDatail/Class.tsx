import { AppLayout } from "@app/AppLayout";
import { ClassDetail } from "@entities/classDetail";
import { Alert } from "@shared/ui/alert/Alert";
import { useParams } from "react-router-dom";

const Class = () => {
  const { id } = useParams();

  if (!id) {
    return <Alert title="Id is not provided!" type="error" />;
  }

  return (
    <AppLayout title={`Class # ${id}`} noPadding={true}>
      <ClassDetail id={id} />
    </AppLayout>
  );
};

export default Class;
