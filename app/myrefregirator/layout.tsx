import { title } from "@/components/primitives";
export default function MyRefreigratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className={title()}>마이 리틀 냉장고</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
