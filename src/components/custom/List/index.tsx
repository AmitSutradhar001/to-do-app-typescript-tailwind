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
    <div className="w-96 px-2 py-1 overflow-hidden flex justify-between items-center border-[1px] border-blue-500 rounded-lg bg-teal-50">
      <div className="flex gap-2 justify-start items-center">
        <input
          type="checkbox"
          checked={item?.marked}
          className="peer cursor-pointer"
          onClick={() => isMarked?.(item?.item)}
        />
        <p
          className={`overflow-x-auto text-gray-500 w-64 px-2 py-1 font-semibold ${
            item?.marked ? "line-through" : ""
          }`}
        >
          {item?.item}
        </p>
      </div>

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
