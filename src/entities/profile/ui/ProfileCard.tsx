import { Input } from "@shared/ui/Input/Input";
import { Button } from "@shared/ui/button/Button";

export const ProfileCard = () => {
  return (
    <>
      <Input name="firstName" placeholder="First Name" required />
      <Input name="lastName" placeholder="Last Name" required />
      <Button text="Change" />
    </>
  );
};
