const CardList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card card-compact bg-base-100 lg:w-1/2 w-full shadow-xl">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardList;
