import InfoCircle from "./InfoCircle";
import classes from "./CirclesBlock.module.css";

const CirclesBlock = () => {
  return (
    <section className={classes.CirclesBlock}>
      <InfoCircle>Tylko 17 lekcij żeby poznać wszystko</InfoCircle>
      <InfoCircle>Dostęp do setek jakościowych materiałów</InfoCircle>
      <InfoCircle>
        Wsparcie profesjonalnego nauczyciela i muzyka z wieloletnim
        doświadczeniem
      </InfoCircle>
    </section>
  );
};

export default CirclesBlock;
