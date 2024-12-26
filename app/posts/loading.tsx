import Skeleton from "../components/skeleton";

const Loading = () => {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-xl font-bold mb-4">Loading Posts....</h1>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default Loading;
