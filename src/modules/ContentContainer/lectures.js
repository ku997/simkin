import { LECTURE_CONTENT } from "../../constants";
import { Lecture1 } from "../../content/lectures/Lecture1";
import { Lecture2 } from "../../content/lectures/Lecture2";

export const content = {
  [LECTURE_CONTENT]: {
    1: <Lecture1 />,
    1.1: <Lecture1 />,
    1.2: <Lecture2 />,
  },
};
