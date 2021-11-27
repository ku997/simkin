import { LECTURE_CONTENT } from "../../constants";
import { Lecture1 } from "../../content/lectures/Lecture1";
import { Lecture10 } from "../../content/lectures/Lecture10";
import { Lecture11 } from "../../content/lectures/Lecture11";
import { Lecture12 } from "../../content/lectures/Lecture12";
import { Lecture2 } from "../../content/lectures/Lecture2";
import { Lecture3 } from "../../content/lectures/Lecture3";
import { Lecture4 } from "../../content/lectures/Lecture4";
import { Lecture5 } from "../../content/lectures/Lecture5";
import { Lecture6 } from "../../content/lectures/Lecture6";
import { Lecture7 } from "../../content/lectures/Lecture7";
import { Lecture8 } from "../../content/lectures/Lecture8";
import { Lecture9 } from "../../content/lectures/Lecture9";

export const content = {
  [LECTURE_CONTENT]: {
    1: <Lecture1 />,
    1.1: <Lecture1 />,
    1.2: <Lecture2 />,
    1.3: <Lecture3 />,
    2: <Lecture4 />,
    2.1: <Lecture4 />,
    2.2: <Lecture5 />,
    2.3: <Lecture6 />,
    3: <Lecture7 />,
    3.1: <Lecture7 />,
    3.2: <Lecture8 />,
    3.3: <Lecture9 />,
    3.4: <Lecture10 />,
    4: <Lecture11 />,
    4.1: <Lecture11 />,
    4.2: <Lecture12 />,
  },
};
