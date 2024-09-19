import FormInput from "../../components/base/FormInput";
import FormButton from "../../components/base/FormButton";
import List from "../../components/custom/List";

interface AddItem {
  onSubmitHandaler: (e: React.FormEvent<HTMLFormElement>) => void;
  onClick: (item?: string) => void;
  items: string[];
}

const AddItems = ({ onSubmitHandaler, items, onClick }: AddItem) => {
  return (
    <>
      <div className="w-full flex mt-20 justify-center">
        <form onSubmit={onSubmitHandaler} className="gap-5 flex">
          <FormInput name="addbox" placeholder="Enter the task..." />
          <FormButton type="submit" variant="submit">
            Add
          </FormButton>
        </form>
      </div>
      <div className="w-full flex flex-col mt-20 justify-center items-center gap-5">
        {items.map((item, index) => (
          <List key={index} item={item} onClick={onClick} />
        ))}
      </div>
    </>
  );
};

export default AddItems;
