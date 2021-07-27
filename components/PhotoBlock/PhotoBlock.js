import classes from "./PhotoBlock.module.css";

const PhotoBlock = () => {
  return (
    <section className={classes.PhotoBlock}>
      <img src="/photos/guitar_lesson_01.jpg" />
      <img src="/photos/guitar_lesson_02.jpg" />
      <img src="/photos/guitar_lesson_03.jpg" />
      <img src="/photos/guitar_lesson_04.jpg" />
      <img src="/photos/guitar_lesson_05.jpg" />
      <img src="/photos/guitar_lesson_06.jpg" />
    </section>
  );
};

export default PhotoBlock;
