import React from "react";
import PropTypes from "prop-types";
import { Image } from '../../../modules/Image';

export function Lecture3_1(props) {
  return (
    <div className="lecture3_1">
      <h2>
        1.3.1. Каскадная (классическая, водопадная) модель жизненного цикла
        информационной системы
      </h2>

      <p>
        Модель была предложена в 1970 году Уинстоном Ройсом. Переход на
        следующий этап осуществляется после полного окончания работ по
        предыдущему этапу, при этом оформляется полный комплект рабочей
        документации. Все этапы выполняются в строгой последовательности с
        утвержденными сроками и четкими затратами. Это основные достоинства
        каскадной модели ЖЦ ИС, которая применялась в условиях полной
        определенности решаемых задач и совершенно неприемлема когда и
        разработчики, и заказчики не имеют четкого видения всех особенностей
        проектируемой ИС. Кроме того, невозможно идти дальше, пока не сдан
        предыдущий этап, а после сдачи нельзя возвращаться к нему для устранения
        обнаруженных недочетов, что серьезно затрудняет работы по
        совершенствованию и доработке создаваемой ИС. Эта модель нравится и
        заказчикам, и разработчикам по причине жесткой дисциплины финансирования
        этапов только после их предъявления. Но полностью отсутствует гибкость в
        работе над созданием ИС. Каскадная модель представлена на рис. 2.
      </p>

      <p>
        На практике все же приходится возвращаться к предыдущим этапам и в этом
        случае в последнее время наиболее востребованной стала итерационная
        модель ЖЦ ИС.
      </p>
      {<Image src='assets/img/lab1.2/2.png' annotation='Рисунок 2 – Каскадная (водопадная, классическая) модель ЖЦ ИС' />}
    </div>
  );
}

Lecture3_1.propTypes = {};
