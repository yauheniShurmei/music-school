import classes from "./CardBlocks.module.css";

const CardBlocks = (props) => {
  return (
    <section className={`${classes.CardBlocks} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default CardBlocks;
