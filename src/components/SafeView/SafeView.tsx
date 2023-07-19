import Header from "../Header/Header";

type TSafeViewProps = {
  children: React.ReactNode;
};

export default function SafeView({ children }: TSafeViewProps) {
  return (
    <div className="h-full w-[min(100%-2rem,768px)] mx-auto overflow-y-auto">
      <Header />
    </div>
  );
}
