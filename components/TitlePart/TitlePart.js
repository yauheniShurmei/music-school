import classes from "./TitlePart.module.css";

const TitlePart = () => {
  return (
    <section>
      <div className={classes.header}>
        <div className={classes.header_info}>
          <h1>
            <span>MUSIC</span> <span>SCHOOL</span>
          </h1>
          <h2>Get full access to materials and homework</h2>
        </div>
        <div className={classes.button_section}>
          <button>LOG IN</button>
          <button>Create New Account</button>
        </div>
      </div>
    </section>
  );
};

export default TitlePart;
