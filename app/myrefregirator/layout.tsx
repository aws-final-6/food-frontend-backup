import FloatingButton from "@/components/button/FloatingButton";
export default function MyRefreigratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full grid sm:grid-cols-2 gap-3 grid-cols-1">
        {children}
      </div>
      <FloatingButton />
    </>
  );
}
