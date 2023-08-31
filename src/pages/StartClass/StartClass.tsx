import { AppLayout } from "app/AppLayout";
import { Button } from "shared/ui/Button/Button";
import { ContentWrapper } from "shared/ui/ContentWrapper/ContentWrapper";
import { Input } from "shared/ui/Input/Input";
import { Select } from "shared/ui/Select/Select";
import { VSpace } from "shared/ui/VSpace/VSpace";

function StartClass() {
  return (
    <AppLayout title="Start Class #1">
      <ContentWrapper valign="center">
        <Input name="duration" placeholder="Duration" required />
        <Input name="level" placeholder="Level" required />
        <Input name="level" placeholder="Pranoyama" required />
        <Input name="level" placeholder="Chanting" required />
        <Input name="level" placeholder="Shavasana" required />
        <Select />
        <VSpace />
        <Button text="Start" />
      </ContentWrapper>
    </AppLayout>
  );
}

export default StartClass;
