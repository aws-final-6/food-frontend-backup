import Timer from "@/components/button/Timer";
export default function MyRecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}

      <Timer />
    </main>
  );
}
