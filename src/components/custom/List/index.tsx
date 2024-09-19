interface List {
  onClick?: (item?: string) => void;
  item?: string;
}

const List = ({ onClick, item }: List) => {
  return (
    <div className="w-96 overflow-hidden flex justify-between items-center border-2 rounded-lg bg-teal-100">
      <p className="overflow-hidden px-2 py-1 font-semibold">{item}</p>
      <p
        onClick={() => onClick?.(item)}
        className="cursor-pointer text-red-500"
      >
        delete
      </p>
    </div>
  );
};

export default List;
