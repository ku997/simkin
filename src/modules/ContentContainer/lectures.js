import { Introduction } from "../../content/lectures/Introduction";
import { Lecture1 } from "../../content/lectures/Lecture1";
import { Lecture12 } from "../../content/lectures/Lecture12";
import { Lecture2_0 } from "../../content/lectures/Lecture2_0";
import { Lecture2_1 } from "../../content/lectures/Lecture2_1";
import { Lecture3_0 } from "../../content/lectures/Lecture3_0";
import { Lecture3_1 } from "../../content/lectures/Lecture3_1";
import { Lecture3_2 } from "../../content/lectures/Lecture3_2";
import { Lecture3_3 } from "../../content/lectures/Lecture3_3";
import { Lecture4_1 } from "../../content/lectures/Lecture4_1";
import { Lecture4_2 } from "../../content/lectures/Lecture4_2";
import { Lecture4_3 } from "../../content/lectures/Lecture4_3";
import { Lecture4_4 } from "../../content/lectures/Lecture4_4";
import { Lecture5_1 } from "../../content/lectures/Lecture5_1";
import { Lecture5_2 } from "../../content/lectures/Lecture5_2";
import { Lecture5_3 } from "../../content/lectures/Lecture5_3";
import { Lecture6_1 } from "../../content/lectures/Lecture6_1";
import { Lecture6_2 } from "../../content/lectures/Lecture6_2";
import { Lecture6_3 } from "../../content/lectures/Lecture6_3";
import { Lecture6_4 } from "../../content/lectures/Lecture6_4";
import { Lecture7_1 } from "../../content/lectures/Lecture7_1";
import { Lecture7_2 } from "../../content/lectures/Lecture7_2";
import { Lecture7_3 } from "../../content/lectures/Lecture7_3";
import { Lecture7_4 } from "../../content/lectures/Lecture7_4";
import { Epilogue } from "../../content/lectures/Epilogue";
import { LABWORKS_CONTENT, LECTURE_CONTENT } from "../../constants";
import { Test1 } from "../../content/tests/Test1";

export const content = {
  [LECTURE_CONTENT]: {
    '0': <Introduction />,
    '1': <Lecture1 />,
    '1.1': <Lecture1 />,
    '1.2': <Lecture2_0 />,
    '1.2.1': <Lecture2_1 />,
    '1.3': <Lecture3_0 />,
    '1.3.1': <Lecture3_1 />,
    '1.3.2': <Lecture3_2 />,
    '1.3.3': <Lecture3_3 />,
    '1.4.1': <Lecture4_1 />,
    '1.4.2': <Lecture4_2 />,
    '1.4.3': <Lecture4_3 />,
    '1.4.4': <Lecture4_4 />,
    '2': <Lecture5_1 />,
    '2.1': <Lecture5_1 />,
    '2.2': <Lecture5_2 />,
    '2.3': <Lecture5_3 />,
    '3': <Lecture6_1 />,
    '3.1': <Lecture6_1 />,
    '3.2': <Lecture6_2 />,
    '3.3': <Lecture6_3 />,
    '3.4': <Lecture6_4 />,
    '4': <Lecture7_1 />,
    '4.1': <Lecture7_1 />,
    '4.2': <Lecture7_2 />,
    '4.3': <Lecture7_3 />,
    '4.3.1': <Lecture7_4 />,
    '4.3.2': <Lecture12 />,
    'end': <Epilogue />,
  },
  [LABWORKS_CONTENT]: {
    '1': <Test1 />,
  }
}