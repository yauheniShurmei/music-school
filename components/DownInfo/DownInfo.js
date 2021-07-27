import classes from "./DownInfo.module.css";

const DownInfo = () => {
  return (
    <section className={classes.main_block}>
      <div className={classes.main_content}>
        <span>Contact</span>
        <a href="mailto:eshurmy@gmail.com">email: eshurmy@gmail.com</a>
        <a href="tel:+48 732-188-593">tel: +48 732-188-593</a>
      </div>
      <div>A</div>
      <div>A</div>
    </section>
  );
};

export default DownInfo;
