export default async function HomePage({
  children,
  modals
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  
  return (
    <div>
      <h1>home layout</h1>
      {children}
      {modals}
    </div>
  );
}
