import AddItems from "../../views/AddItems";
import { useEffect, useState } from "react";

interface Item {
  item: string;
  marked: boolean;
}

const TaskAndList = () => {
  // Retrieve items from localStorage on component mount
  const [items, setItems] = useState<Item[]>(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const onSubmitHandaler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = formData.get("addbox");
    if (data) {
      // Add the new item with a "marked" property set to false
      const newItem: Item = {
        item: data.toString(),
        marked: false,
      };
      setItems([newItem, ...items]);
      const inputElement = e.currentTarget.querySelector(
        'input[name="addbox"]'
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = "";
      }
    } else {
      // Handle the case where data is null (e.g., show an error message)
      console.error("No data found from form input");
    }
  };
  const handleDelete = (item?: string) => {
    setItems((pev) => pev.filter((i) => i.item != item));
  };
  const isMarked = (itemToMark?: string) => {
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.item === itemToMark ? { ...i, marked: !i.marked } : i
      )
    );
  };

  return (
    <AddItems
      items={items}
      onClick={handleDelete}
      onSubmitHandaler={onSubmitHandaler}
      isMarked={isMarked}
    />
  );
};

export default TaskAndList;
