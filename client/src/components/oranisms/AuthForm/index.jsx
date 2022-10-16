import Button from "../../atoms/Button";

const AuthForm = (props) => {
  console.log(props);
  return (
    <form onSubmit={props.onSubmit}>
      <></>
      <Button type="submit" styleType={"primary"} text={props.buttonText} />
    </form>
  );
};

export default AuthForm;
