interface ListItem {
  item: string;
  marked: boolean;
}

interface List {
  onClick?: (item?: string) => void;
  isMarked?: (item?: string) => void;
  item?: ListItem;
}

const List = ({ onClick, item, isMarked }: List) => {
  return (
    <div className="w-96 overflow-hidden flex justify-between items-center border-2 rounded-lg bg-teal-100">
      <input
        type="checkbox"
        defaultChecked={item?.marked}
        className="peer mr-2 cursor-pointer"
        onClick={() => isMarked?.(item?.item)}
      />
      <p
        className={`overflow-hidden px-2 py-1 font-semibold ${
          item?.marked ? "line-through" : ""
        }`}
      >
        {item?.item}
      </p>
      <p
        onClick={() => onClick?.(item?.item)}
        className="cursor-pointer text-red-500"
      >
        delete
      </p>
    </div>
  );
};

export default List;
