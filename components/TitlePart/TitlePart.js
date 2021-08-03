import React, { useLayoutEffect, useState } from "react";
import { useEffect, useRef } from "react";
import classes from "./TitlePart.module.css";

const TitlePart = () => {
  const [position, setPosition] = useState(-50);
  let additionStyle = { backgroundPosition: `0% ${position}px` };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const pagePositionY = window.scrollY;
    if (pagePositionY < 1200) {
      setPosition(position - pagePositionY / 2);
    }
  };

  return (
    <section className={classes.header} style={additionStyle}>
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
    </section>
  );
};

export default TitlePart;
