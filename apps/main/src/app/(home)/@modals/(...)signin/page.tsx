import InterceptorModal from "@/components/IntercenptorModal";
import { SigninFormClient } from "@repo/auth";

export default async function SigninModalPage() {
  return (
    <InterceptorModal title="Signin">
      <SigninFormClient />
    </InterceptorModal>
  );
}