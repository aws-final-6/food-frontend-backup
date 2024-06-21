import FloatingButton from "@/components/button/FloatingButton";
import { title } from "@/components/primitives";
export default function MyRefreigratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <p className={title()}>
          서비스 준비 중입니다! 2024년 6월 24일부터 제공될 예정입니다
        </p>
      </div>
      <div className="w-full grid sm:grid-cols-2 gap-3 grid-cols-1">
        {children}
      </div>
      <FloatingButton />
    </>
  );
}
