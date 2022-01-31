import React from "react";
import PropTypes from "prop-types";
import { Image } from '../../../modules/Image';

export function Lecture3_3(props) {
  return (
    <div className="lecture3_3">
      <h2>1.3.3. Спиральная модель жизненного цикла информационной системы</h2>

      <p>
        Спиральная модель предложена Барри Боэм в 1988 году и определяет, в
        основном стартовые этапы жизненного цикла информационной системы. При
        этом обосновывается и проверяется возможность реализации
        спроектированных технических решений.
      </p>

      <p>
        На каждом витке создается прототип проектируемой информационной системы,
        который на следующих витках спирали ЖЦ ИС совершенствуется, дополняется
        и доводится до полного внедрения. При этом необязательно дожидаться
        окончания каждого этапа, данная модель позволяет переходить на следующие
        витки спирали и решать проблемы или недоделки на следующем уровне, что
        делает работу над проектом более эффективной, гибкой и завершить в более
        сжатые сроки.
      </p>

      <p>
        Новый виток спирали соответствует поэтапной модели создания фрагмента
        информационной системы. При использовании спиральной модели ЖЦ:
      </p>

      <p>– происходит ориентация на модернизацию информационной системы;</p>

      <p>
        – осуществляется аккумулирование всех решений в процессе проектирования
        и создания моделей и прототипов информационной системы;
      </p>

      <p>
        – проводится анализ издержек и всех рисков в процессе проектирования ИС.
      </p>

      <p>
        Спиральный процесс состоит из следующей повторяющейся
        последовательности:
      </p>

      <ol>
        <li>Определение требований.</li>
        <li>Анализ.</li>
        <li>Проектирование.</li>
        <li>Реализация и тестирование.</li>
        <li>Интеграция.</li>
        <li>Внедрение.</li>
      </ol>

      <p>
        Этот многократный цикл, завершающийся созданием новой версии
        информационной системы, представлен на рис. 4.
      </p>

      <p>
        Причиной применения спиральной модели ЖЦ ИС может быть необходимость
        минимизации рисков и возможность представления заказчику прототипа или
        эскизной версии проекта для конкретизации пожеланий и учета их в
        следующих циклах. Еще одной причиной может быть случай, когда
        разрабатываемая информационная система достаточно сложна и существует
        реальная необходимость создания промежуточных версий продукта, не
        откладывая эту работу на финишные этапы, как это предписывает водопадная
        модель.
      </p>

      <p>
        Основная задача спиральной модели жизненного цикла информационной
        системы заключается в том, чтобы на каждой итерации создавать очередную
        версию системы, используя разработанный прототип предыдущих этапов.
        Такая модель позволяет более гибко работать с заказчиком, постоянно
        учитывать его замечания и предложения, совершенствовать проектируемую
        систему в процессе каждого нового витка спирали.
      </p>

      {<Image src='assets/img/lab1.2/4.png' annotation='Рисунок 4 – Спиральная модель ЖЦ ИС' />}
    </div>
  );
}

Lecture3_3.propTypes = {};