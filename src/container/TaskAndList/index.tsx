import AddItems from "../../views/AddItems";
import { useEffect, useState } from "react";

const TaskAndList = () => {
  // Retrieve items from localStorage on component mount
  const [items, setItems] = useState<string[]>(() => {
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
      // Ensure that data is treated as a string
      setItems([data.toString(), ...items]);
      // Clear the input field by accessing the ref directly
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
    console.log(item);
    setItems((pev) => pev.filter((i) => i != item));
  };

  return (
    <AddItems
      items={items}
      onClick={handleDelete}
      onSubmitHandaler={onSubmitHandaler}
    />
  );
};

export default TaskAndList;
