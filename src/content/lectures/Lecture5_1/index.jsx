import React from "react";
import PropTypes from "prop-types";

export function Lecture5_1(props) {
  return (
    <div className="lecture5_1">
      <h2>2. ПРОЕКТИРОВАНИЕ ИНФОРМАЦИОННЫХ СИСТЕМ</h2>

      <h2>2.1. Каноническое проектирование информационных систем</h2>

      <p>
        Каноническое проектирование ИС направлено на отражение особенностей
        технологии индивидуального (оригинального) проектирования.
      </p>

      <p>
        Среди основных характерных особенностей канонического проектирования
        выделяют:
      </p>

      <ul>
        <li>отражение особенностей ручной технологии проектирования;</li>
        <li>ориентацию на индивидуальное (оригинальное) проектирование;</li>
        <li>проектирование на уровне исполнителей;</li>
        <li>возможность интеграции выполнения элементарных операций;</li>
        <li>
          применение, как правило, для сравнительно небольших, локальных ИС;
        </li>
        <li>
          использование инструментальных средств универсальной компьютерной
          поддержки.
        </li>
      </ul>

      <p>
        <b>Каноническое проектирование</b> направлено на минимальное
        использование типовых проектных решений. Адаптация проектных решений при
        каноническом проектировании осуществляется только путем
        перепрограммирования соответствующих программных модулей.
      </p>

      <p>
        Организация канонического проектирования ИС основана на использовании
        каскадной модели жизненного цикла и состоит из нескольких стадий и
        этапов. Принцип деления процесса проектирования на стадии и этапы
        направлен на то, чтобы проектировать систему «сверху-вниз» и постепенно
        разрабатывать – изначально укрупненные, затем детализированные –
        проектные решения.
      </p>

      <p>
        Поскольку объекты автоматизации имеют различную сложность и набор задач,
        то для создания решения для конкретной ИС стадии и этапы работ также
        могут различаться по трудоемкости: существует возможность объединять
        последовательные этапы, исключать определенные из них на любой стадии
        проекта, а также до окончания предыдущей стадии начинать выполнение
        следующей.
      </p>

      <p>
        Стадии и этапы разработки ИС, которые выполняют организации-участники,
        оформляются в договорах и технических заданиях на выполнение работ.
      </p>

      <p>
        Каноническое проектирование основано на ряде стандартов, принятых на
        территории Российской Федерации (ГОСТ 34.003, ГОСТ 34.201, ГОСТ 34.601,
        ГОСТ 34.602, ГОСТ 34.603, ГОСТ 2.105).
      </p>
    </div>
  );
}

Lecture5_1.propTypes = {};