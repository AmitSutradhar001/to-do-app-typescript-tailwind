import FormInput from "../../base/FormInput";
import FormButton from "../../base/FormButton";

interface Form {
  onSubmitHandaler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputForm = ({ onSubmitHandaler }: Form) => {
  return (
    <form onSubmit={onSubmitHandaler} className="gap-5 flex">
      <FormInput name="addbox" placeholder="Enter the task..." />
      <FormButton type="submit" variant="submit">
        Add
      </FormButton>
    </form>
  );
};

export default InputForm;
