import React from "react";
import PropTypes from "prop-types";

export function Lecture6_1(props) {
  return (
    <div className="lecture6_1">
      <h2>3. АРХИТЕКТУРА ИНФОРМАЦИОННЫХ СИСТЕМ</h2>

      <h2>3.1. Понятие архитектуры информационных систем</h2>

      <p>
        Уровень развития современных технологий настолько высок, что позволяет
        построить информационную систему любого масштаба, сложности и
        функциональности. Однако, учитывая требования бизнеса, основанные на
        показателях различных бизнес-оценок, возникают дополнительные сложности,
        разрешение которых сводится к обеспечению рационального подхода к
        процессу проектирования, реализации и дальнейшей эксплуатации
        информационных систем. Исходя из этого, можно однозначно считать
        выбранную архитектуру одним из основных показателей эффективности
        создаваемой информационной системы, а следовательно, и успешности
        бизнеса.
      </p>

      <p>
        Изначально термин «архитектура» применялся в проектировании и постройке
        различных сооружений. Он определял их структуру, взаимосвязи между
        составными частями, базовые принципы их организации и дальнейшего
        развития. С течением времени понимание термина «архитектура»
        применительно к техническим системам несколько изменилось. В техническом
        аспекте можно рассматривать архитектуру как высоко абстрактную модель, в
        которой отсутствуют подробности реализации.
      </p>

      <p>
        Определить понятие «архитектура информационной системы» можно множеством
        способов. Это связано как с отсутствием общепринятого определения самой
        информационной системы, так и с многообразием трактовок самого термина
        «архитектура». В результате архитектуру информационной системы можно
        описать как «концепцию, определяющую модель, структуру, выполняемые
        функции и взаимосвязь компонентов информационной системы».
      </p>

      <p>
        Процедура выбора архитектуры для проектируемой информационной системы в
        рыночных условиях сводится к определению стоимости владения ею.
        Стоимость владения информационной системой складывается из плановых
        затрат и стоимости рисков. Плановые затраты включают в себя стоимость
        технического обслуживания, модернизации, зарплату обслуживающего
        персонала и т.д.
      </p>

      <p>
        Совокупная стоимость рисков определяется из стоимости всех типов рисков,
        их вероятностей и матрицей соответствия между ними. Сама же матрица
        соответствия определяется выбранной архитектурой информационной системы.
      </p>
    </div>
  );
}

Lecture6_1.propTypes = {};