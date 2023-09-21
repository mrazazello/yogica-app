import { AppLayout } from "@app/AppLayout";
import { ClassDetail } from "@entities/classDetail";
import { IClassDetail } from "@entities/classDetail/types/class";

const exercises = [
  {
    id: "1",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "2"
  },
  {
    id: "2",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "2"
  },
  {
    id: "3",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "3"
  },
  {
    id: "4",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "5"
  },
  {
    id: "5",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "2"
  }
];

const classDetail: IClassDetail = {
  id: "1",
  duration: "5",
  level: "zero", // ENUM!!!
  videoPreview: "/temp/videoScreen.jpg",
  exercises
};

const Class = () => {
  return (
    <AppLayout title="Class # 111" noPadding={true}>
      <ClassDetail classDetail={classDetail} />
    </AppLayout>
  );
};

export default Class;
