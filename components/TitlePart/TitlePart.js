import classes from "./TitlePart.module.css";

const TitlePart = () => {
  return (
    <section>
      <div className={classes.header}>
        <div className={classes.header_info}>
          <h1>MUSIC SCHOOL</h1>
          <h2>Get full access to materials and homework</h2>
        </div>
      </div>

      <div className={classes.main_content}></div>
    </section>
  );
};

export default TitlePart;
