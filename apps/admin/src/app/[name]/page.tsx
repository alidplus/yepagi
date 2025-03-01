import { PropsWithChildren } from "react";
import TenantClient from "./Client";

type TenantParams = {
  name: string
}

export default async function TenantPage({ children, params }: PropsWithChildren<RouteParams<TenantParams>>) {
  const { name } = await params
  
  return (
    <div>
      <h1>{name.toUpperCase()} layout</h1>
      <TenantClient />
    </div>
  );
}