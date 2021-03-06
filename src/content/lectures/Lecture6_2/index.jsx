import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../../modules/Image";

export function Lecture6_2(props) {
  return (
    <div className="lecture6_2">
      <h2>3.2. Типы архитектур</h2>

      <p>
        Рассматривая архитектуру крупных организаций, принято использовать
        понятие «корпоративная архитектура». Ее можно представить в виде
        совокупности нескольких типов архитектур:
      </p>

      <ul>
        <li>бизнес-архитектура (Business architecture);</li>
        <li>ИТ-архитектура (Information Technology architecture);</li>
        <li>архитектура данных (Data architecture);</li>
        <li>программная архитектура (Software architecture);</li>
        <li>техническая архитектура (Hardware architecture)</li>
      </ul>

      <p>Модель корпоративной архитектуры представлена на рис. 8.</p>
      {
        <Image
          src="assets/img/lab8/1.png"
          annotation="Рис. 8 Модель корпоративной архитектуры"
        />
      }
      <p>
        <b>Техническая архитектура</b> является первым уровнем архитектуры
        информационной системы. Она описывает все аппаратные средства,
        использующиеся при выполнении заявленного набора функций, а также
        включает средства обеспечения сетевого взаимодействия и надежности. В
        технической архитектуре указываются периферийные устройства, сетевые
        коммутаторы и маршрутизаторы, жесткие диски, оперативная память,
        процессоры, соединительные кабели, источники бесперебойного питания и
        т.п.
      </p>

      <p>
        <b>Программная архитектура</b> представляет собой совокупность
        компьютерных программ, предназначенных для решения конкретных задач.
        Данный тип архитектуры необходим для описания приложений, входящих в
        состав информационной системы. На данном уровне описывают программные
        интерфейсы, компоненты и поведение.
      </p>

      <p>
        <b>Архитектура данных</b> объединяет в себе как физические хранилища
        данных, так и средства управления данными. Кроме того, в нее входят
        логические хранилища данных, а при ориентированности рассматриваемой
        компании на работу со знаниями может быть выделен отдельный уровень –{" "}
        <b>архитектура знаний</b> (Knowledge architecture). На этом уровне
        описываются логические и физические модели данных, определяются правила
        целостности, составляются ограничения для данных.
      </p>

      <p>
        Следует особенно выделить уровень <b>ИТ-архитектуры,</b> поскольку он
        является связующим. На нем формируется базовый набор сервисов, которые
        используются как на уровне программной архитектуры, так и на уровне
        архитектуры данных. Если какая-либо особенность функционирования для
        этих двух уровней не была предусмотрена, то сильно возрастает
        вероятность сбоев в работе, а следовательно, потерь для бизнеса. В
        некоторых случаях невозможно разделить ИТ-архитектуру и архитектуру
        отдельного приложения. Такое возможно только при высокой степени
        интеграции приложений.
      </p>

      <p>
        Основной функцией ИТ-архитектуры является обеспечение функционирования
        важных бизнес-приложений для достижения обозначенных бизнес-целей. Если
        некоторая функция требуется сразу в нескольких приложениях, то ее
        следует перенести на уровень ИТ-архитектуры, тем самым повысив
        интеграцию системы и снизив сложность архитектуры приложений.
      </p>

      <p>
        Последним в иерархии является уровень <b>бизнес-архитектуры</b> или{" "}
        <b>архитектуры бизнес-процессов.</b> На этом уровне определяются
        стратегии ведения бизнеса, способы управления, принципы организации и
        ключевые процессы, представляющие для бизнеса огромную важность.
      </p>
    </div>
  );
}

Lecture6_2.propTypes = {};
