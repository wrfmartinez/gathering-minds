import Nav from "../components/Nav";

const SignUp = () => {
  return (
    <>
      <Nav />
      <div className="sign-up-form h-[100dvh] flex items-center justify-center pt-24">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Enter an email:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Enter a password:</label>
            <input type="password" id="password" name="password" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
