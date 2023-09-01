import { AppLayout } from "app/AppLayout";
import { H123 } from "shared/ui/H123/H123";
import { TextLine } from "shared/ui/Text/TextLine";
import { VSpace } from "shared/ui/VSpace/VSpace";
import { VideoPreview } from "shared/ui/VideoPreview/VideoPreview";

function Favorites() {
  return (
    <AppLayout title="Favorites">
      <div className="w-full">
        <VideoPreview url="/temp/videoScreen.jpg" />
        <H123 title="Class #111" type="h2" />
        <TextLine text="25 min duration, Zero Level" />
      </div>
      <VSpace />
      <div className="w-full">
        <VideoPreview url="/temp/videoScreen.jpg" />
        <H123 title="Class #123" type="h2" />
        <TextLine text="25 min duration, Zero Level" />
      </div>
      <div className="w-full">
        <VideoPreview url="/temp/videoScreen.jpg" />
        <H123 title="Class #123" type="h2" />
        <TextLine text="25 min duration, Zero Level" />
      </div>
    </AppLayout>
  );
}

export default Favorites;
