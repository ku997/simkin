import React from "react";
import PropTypes from "prop-types";
import { Image } from '../../../modules/Image';

function Lecture3_2(props) {
  return (
    <div className="lecture3_2">
      <h2>1.3.2. Итерационная модель жизненного цикла информационной системы</h2>

      <p>
        <b>Поэтапная модель с промежуточным контролем</b> – итерационная модель
        разработки информационной системы. Каждый этап имеет обратные связи в
        процессе корректировки и создает условия для корректировки ранее
        созданных этапов. При этом трудоемкость работ и временные затраты
        существенно сокращаются по сравнению с водопадной моделью жизненного
        цикла. Итерационная модель ЖЦ информационной системы представлена на
        рис. 3.
      </p>

      <p>
        Создание информационной системы – это организованный процесс построения
        и последовательного преобразования согласованных моделей на всех этапах
        жизненного цикла. При этом все разработанные модели находятся в
        репозитории проекта и доступны всем разработчикам, что позволяет
        эффективно вести одновременную работу над проектированием и созданием
        информационной системы.
      </p>

      <p>
        тапам и в этом случае в последнее время наиболее востребованной стала
        итерационная модель ЖЦ ИС.
      </p>
      {<Image src='assets/img/lab1.2/3.png' annotation='Рисунок 3 – Итерационная модель ЖЦ ИС' />}
    </div>
  );
}

Lecture3_2.propTypes = {};

export default Lecture3_2;
