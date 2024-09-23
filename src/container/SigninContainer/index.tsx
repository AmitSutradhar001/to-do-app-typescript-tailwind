import SigninForm from "../../views/SigninForm";

const SigninContainer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <SigninForm handleSubmit={handleSubmit} />
    </>
  );
};

export default SigninContainer;
