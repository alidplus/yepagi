import { PropsWithChildren } from "react";

export default async function HomePage({ children }: PropsWithChildren) {
  
  return (
    <div>
      <h1>other layout</h1>
      {children}
    </div>
  );
}
