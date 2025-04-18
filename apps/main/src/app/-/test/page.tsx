import { prefetch, trpc } from "@repo/context/server";
import ItemList from "./components/ItemList";

export default async function TestPage() {
  await prefetch(trpc.user.list.queryOptions({}))
  
  return (
    <ItemList />
  );
}
