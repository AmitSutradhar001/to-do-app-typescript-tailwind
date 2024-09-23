import InputForm from "../../components/custom/InputForm";
import List from "../../components/custom/List";
import Navbar from "../../components/shared/Navbar";

interface Item {
  item: string;
  marked: boolean;
}

interface AddItem {
  onSubmitHandaler: (e: React.FormEvent<HTMLFormElement>) => void;
  onClick: (item?: string) => void;
  isMarked: (item?: string) => void;
  items: Item[];
}

const AddItems = ({ onSubmitHandaler, items, onClick, isMarked }: AddItem) => {
  return (
    <>
      <div className="flex flex-col p-3 mt-10 rounded-lg shadow-2xl border-t-4 border-orange-300">
        <div className="w-full flex mt-20 justify-center">
          <InputForm onSubmitHandaler={onSubmitHandaler} />
        </div>
        <div className="w-full flex flex-col mt-20 justify-center items-center gap-5">
          {items.map((item, index) => (
            <List
              key={index}
              item={item}
              onClick={onClick}
              isMarked={isMarked}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AddItems;
