const Skeleton = () => {
  return (
    <div className="flex w-full lg:w-1/2 flex-col gap-4">
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default Skeleton;