import CirclesBlock from "../InfoCircle/CirclesBlock";
import PhotoBlock from "../PhotoBlock/PhotoBlock";
import classes from "./MainInfoPart.module.css";
import AboutSchool from "../AboutSchool/AboutSchool";

const MainInfoPart = (props) => {
  return (
    <div className={classes.MainInfoPart}>
      <CirclesBlock />
      <PhotoBlock />
      <AboutSchool />
    </div>
  );
};

export default MainInfoPart;
