import classes from "./Button.module.css";

const Button = (props) => {
  return <div className={classes.Button}>{props.children}</div>;
};

export default Button;
