import InfoCircle from "./InfoCircle";
import classes from "./CirclesBlock.module.css";
import CardBlocks from "../CardBlocks/CardBlocks";

const CirclesBlock = () => {
  return (
    <CardBlocks className={classes.CirclesBlock}>
      <InfoCircle>Tylko 17 lekcij żeby poznać wszystko</InfoCircle>
      <InfoCircle>Dostęp do setek jakościowych materiałów</InfoCircle>
      <InfoCircle>
        Wsparcie profesjonalnego nauczyciela i muzyka z wieloletnim
        doświadczeniem
      </InfoCircle>
    </CardBlocks>
  );
};

export default CirclesBlock;
