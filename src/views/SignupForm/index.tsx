import FormButton from "../../components/base/FormButton";
import FormInput from "../../components/base/FormInput";

interface Signup {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SignupForm = ({ handleSubmit }: Signup) => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <p className="p-4 text-orange-500 font-semibold text-2xl">To-Do app</p>
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <FormInput
          className="w-72"
          name="email"
          placeholder="Enter the email..."
        />
        <FormInput
          className="w-72"
          name="password"
          placeholder="Enter the password..."
        />
        <FormButton variant="submit" className="w-72">
          Sign Up
        </FormButton>
      </form>
    </div>
  );
};

export default SignupForm;
