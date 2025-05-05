import InterceptorModal from "@/components/IntercenptorModal";
import { SignupFormClient } from "@repo/auth";

export default async function SignupModalPage() {
  
  return (
    <InterceptorModal title="Signup">
      <SignupFormClient />
    </InterceptorModal>
  );
}