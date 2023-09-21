import { Button } from "@shared/ui/button/Button";
import { Input } from "@shared/ui/Input/Input";
import { Select } from "@shared/ui/select/Select";
import { VSpace } from "@shared/ui/vSpace/VSpace";

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
  { name: "Hellen Schmidt" }
];

export const StartClassForm = () => {
  return (
    <>
      <Input name="duration" placeholder="Duration" required />
      <Input name="level" placeholder="Level" required />
      <Input name="level" placeholder="Pranoyama" required />
      <Input name="level" placeholder="Chanting" required />
      <Input name="level" placeholder="Shavasana" required />
      <Select placeholder="Test" name="test" data={people} />
      <VSpace />
      <Button text="Start" />
    </>
  );
};
