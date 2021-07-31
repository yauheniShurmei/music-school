import classes from "./AboutSchool.module.css";
import CardBlocks from "../CardBlocks/CardBlocks";

const AboutSchool = () => {
  return (
    <CardBlocks className={classes.AboutSchool}>
      <span>
        {/* 17 Lekcji na kturych poznasz wszystke sposoby gry nagitarze i wszystke
        podstawy muzyczne które mogą Cie spotkać na szlaku muzycznym. Ale to
        twój własny wybór, które lekcji zostawić a kture ominąnć to zalerzy od
        tego czego chcesz się nauczyć. Dzięki wieloletniemu doswiadczeniu w
        nauczaniu, wyróżniamy kierunki czego morzna sie uczyc: 1) Klasyczna
        gitarowa (akademicka) muzyka. To kierunek bardzo powarznej muzyki,
        napisanej specjalno dla gitary klasycznej w rużne epoki. Tego się uczą
        ludzi w akademii muzycznej. 2) Spiewanie piosenek grając na gitarze.
        Jeden z ulubionych kierunków wybieranych przez ucznów. 3) Granie
        melodji, solówek, kawałków z pop, rock, jazz muzyki. Każda lekcja trwa
        45 minut */}
        Oto siedemnaście lekcji, podczas których zapoznasz się z podstawami gry
        na gitarze. Zostały ułożone tak, by wprowadzić Cię we wszystkie
        zagadnienia związane z jej naturalnym przyswojeniem. Każda z nich
        stanowi zamkniętą jednostkę lekcyjną, dzięki czemu to Ty wybierasz,
        czego w pierwszej kolejności chcesz się nauczyć. Dzięki naszemu
        wieloletniemu doświadczeniu, stworzyliśmy trzy cykle mogące pomóc
        wprowadzić Cię w początki muzykowania. 1) Gitara klasyczna. To
        propozycja dla tych, którzy chcą się zmierzyć z kompozycją o charakterze
        akademickim. Jest nią muzyka poważna, występująca w każdej minionej
        epoce. 2) Melodia. To propozycja dla tych, mających elastyczne podejście
        do kompozycji muzycznych. Nauczą się zarówno grania melodii z
        wyodrębnieniem solówek występujących w każdym gatunku muzycznym, takim
        jak pop, rock, czy jazz. 3) Śpiew. To propozycja dla tych, którzy grę na
        gitarze jednocześnie wzbogacają śpiewem. To najchętniej wybierany
        kierunek przez naszych uczniów.
      </span>
    </CardBlocks>
  );
};

export default AboutSchool;
