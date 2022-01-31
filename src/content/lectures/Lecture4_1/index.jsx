import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../../modules/Image";

export function Lecture4_1(props) {
  return (
    <div className="lecture4_1">
      <h2>1.4.1. Методология функционального моделирования работ SADT</h2>

      <p>
        Методология SADT (Structured Analysis and Design Technique – методология
        структурного анализа и проектирования), разработанная Дугласом Т. Россом
        в 1969 – 1973 годах базируется на структурном анализе систем и
        графическом представлении организации в виде системы функций, которые
        имеют три класса структурных моделей:
      </p>

      <ol>
        <li>Функциональная модель.</li>
        <li>Информационная модель.</li>
        <li>Динамическая модель.</li>
      </ol>

      <p>
        Процесс моделирования по методологии SADT состоит из следующих этапов:
      </p>

      <ol>
        <li>Сбор информации и анализ информации о предметной области.</li>
        <li>Документирование полученной информации.</li>
        <li>Моделирование (IDEF0).</li>
        <li>Корректура модели в процессе итеративного рецензирования.</li>
      </ol>

      <p>Функциональная модель компании</p>

      <p>
        Функциональная модель IDEF0 (рис. 5) представляет собой набор блоков,
        каждый из которых представляет собой «черный ящик» со входа-ми и
        выходами, управлением и механизмами, которые детализируются
        (декомпозируются) до необходимого уровня. Наиболее важная функция
        расположена в верхнем левом углу. А соединяются функции между собой с
        помощью стрелок и описаний функциональных блоков. При этом каждый вид
        стрелки или активности имеет собственное значение. Данная модель
        позволяет описать все основные виды процессов, как административные, так
        и организационные.
      </p>

      <p>Стрелки могут быть:</p>

      <ul>
        <li>Входящие – вводные, которые ставят определенную задачу.</li>
        <li>Исходящие – выводящие результат деятельности.</li>
        <li>
          Управляющие (сверху вниз) – механизмы управления (положения,
          инструкции и пр.).
        </li>
        <li>
          Механизмы (снизу вверх) – что используется для того, чтобы произвести
          необходимую работу.
        </li>
      </ul>

      <p>
        Входящие и исходящие стрелки точнее было бы называть вводящими и
        выводящими, так как по-английски они называются Input и Output
        соответственно. Но особенности перевода и привычные названия выглядят
        уже так, как сложилось. И все же для правильного понимания терминов
        важно помнить их значение в данном случае. Это подтверждается еще и тем,
        что данная нотация создана прежде всего для разработки ПО, и тер-мины
        переводить правильнее с этой точки зрения.
      </p>

      <p>
        Стрелки подписываются с помощью имен существительных (опыт, план,
        правила), а блоки – с помощью глаголов, т.е. в них описываются действия,
        которые производятся (создать товар, заключить договор, про-извести
        отгрузку).
      </p>
      {
        <Image
          src="assets/img/lab1.3/1.png"
          annotation="Рис. 5 Диаграмма IDFO верхнего уровня"
        />
      }

      <p>
        IDEF0 – это очень простой и одновременно наглядный язык описа-ния
        бизнес-процессов. С помощью этого стандарта возможна передача информации
        между разработчиками, консультантами и пользователями. Стандарт очень
        тщательно разрабатывался, он удобен для проектирова-ния, универсален.
        Для работы с ним существует множество инструментов, например VISIO,
        BPWIN, ERWIN, Bussines studio и т.д.
      </p>

      {
        <Image
          src="assets/img/lab1.3/2.png"
          annotation="Рис. 6 Декомпозиция первого уровня"
        />
      }
      <p>
        В диаграмме IDEF0 описываются первоначально все внешние связи
        исследуемого процесса. После этого осуществляется декомпозиция этого
        процесса и происходит описание внутренних подпроцессов с обозначением
        всех связей. При этом ранее обозначенные стрелочками внешние связи не
        должны потеряться. Они переносятся на диаграмму декомпозиции в
        соответствующие подпроцессы. Пример декомпозиции диаграммы IDEF0
        (до-черней) представлен на рис. 6. Далее каждый подпроцесс тоже можно
        декомпозировать и подробно описывать все связи до необходимого предела.
        Основным достоинством этой методологии являются простота и наглядность.
        В качестве недостатка – невозможность описать реакцию описываемого
        процесса на изменяющиеся внешние факторы. Для этих целей служат другие
        методологии.
      </p>
    </div>
  );
}

Lecture4_1.propTypes = {};