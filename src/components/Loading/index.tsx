import Spinner from "../../icons/Spinner";

export default function Loading() {
  return (
    <main className="fixed w-full h-full grid place-items-center">
      <span className="text-[80px] animate-spin">
        <Spinner />
      </span>
    </main>
  );
}
