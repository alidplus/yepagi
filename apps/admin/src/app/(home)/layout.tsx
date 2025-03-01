import { PropsWithChildren } from "react";

export default async function HomePage({ children }: PropsWithChildren) {
  
  return (
    <div>
      <h1>home layout</h1>
      {children}
    </div>
  );
}
