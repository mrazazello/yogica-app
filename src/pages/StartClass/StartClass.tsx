import { AppLayout } from "@app/AppLayout";
import { Button } from "@shared/ui/Button/Button";
import { Input } from "@shared/ui/Input/Input";
import { Select } from "@shared/ui/Select/Select";
import { VSpace } from "@shared/ui/VSpace/VSpace";

const people = [
  { name: "Wade Cooper 2" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
  { name: "Wade Cooper 2" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
  { name: "Wade Cooper 2" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

function StartClass() {
  return (
    <AppLayout title="Start Class" valign="center">
      <Input name="duration" placeholder="Duration" required />
      <Input name="level" placeholder="Level" required />
      <Input name="level" placeholder="Pranoyama" required />
      <Input name="level" placeholder="Chanting" required />
      <Input name="level" placeholder="Shavasana" required />
      <Select placeholder="Test" name="test" data={people} />
      <VSpace />
      <Button text="Start" />
    </AppLayout>
  );
}

export default StartClass;
