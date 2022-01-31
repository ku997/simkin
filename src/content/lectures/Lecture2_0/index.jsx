import React from "react";
import PropTypes from "prop-types";

export function Lecture2_0(props) {
  return (
    <div className="Lecture2_0">
      <h2>1.2. Процессы и модели жизненного цикла информационных систем</h2>

      <p>
        Процессы жизненного цикла включают в себя работы, которые могут
        выполняться в жизненном цикле программных средств, они распределены по
        пяти основным, восьми вспомогательным и четырем организационным
        процессам.
      </p>

      <p>
        Основные процессы жизненного цикла реализуются под управлением основных
        сторон, вовлеченных в жизненный цикл программных средств. Под основной
        стороной понимают одну из тех организаций, которые инициируют или
        выполняют разработку, эксплуатацию или сопровождение программных
        продуктов. Основными сторонами являются заказчик, поставщик,
        разработчик, оператор и персонал сопровождения программных продуктов.
        Основными процессами являются:
      </p>

      <ol>
        <li>
          Процесс заказа. Определяет работы заказчика, то есть организации,
          которая приобретает систему, программный продукт или программную
          услугу.
        </li>
        <li>
          Процесс поставки. Определяет работы поставщика, то есть организации,
          которая поставляет систему, программный продукт или программную услугу
          заказчику.
        </li>
        <li>
          Процесс разработки. Определяет работы разработчика, то есть
          организации, которая проектирует и разрабатывает программный продукт.
        </li>
        <li>
          Процесс эксплуатации. Определяет работы оператора, то есть
          организации, которая обеспечивает эксплуатационное обслуживание
          вычислительной системы в заданных условиях в интересах пользователей.
        </li>
        <li>
          Процесс сопровождения. Определяет работы персонала сопровождения, то
          есть организации, которая предоставляет услуги по сопровождению
          программного продукта, состоящие в контролируемом изменении
          программного продукта в целях сохранения его исходного состояния и
          функциональных возможностей. Данный процесс охватывает перенос и
          снятие с эксплуатации программного продукта.
        </li>
      </ol>

      <p>
      <i><b>Вспомогательные процессы жизненного цикла</b></i> включают восемь процессов.
        Вспомогательный процесс является целенаправленной состав-ной частью
        другого процесса, обеспечивающей успешную реализацию и качество
        выполнения программного проекта. Вспомогательный процесс при
        необходимости инициируется и используется другим процессом.
        Вспомогательными процессами являются:
      </p>

      <ol>
        <li>
          Процесс документирования. Определяет работы по описанию ин-формации,
          выдаваемой в процессе жизненного цикла.
        </li>
        <li>
          Процесс управления конфигурацией. Определяет работы по управлению
          конфигурацией.
        </li>
        <li>
          Процесс обеспечения качества. Определяет работы по объектив-ному
          обеспечению того, чтобы программные продукты и процессы
          соответствовали требованиям, установленным для них, и реализовывались
          в рамках утвержденных планов. Совместные анализы, аудиторские
          проверки, верификация и аттестация могут использоваться в качестве
          методов обеспечения качества.
        </li>
        <li>
          Процесс верификации. Определяет работы (заказчика, поставщика или
          независимой стороны) по верификации программных продуктов по мере
          реализации программного проекта.
        </li>
        <li>
          Процесс аттестации. Определяет работы (заказчика, поставщика или
          независимой стороны) по аттестации программных продуктов программного
          проекта.
        </li>
        <li>
          Процесс совместного анализа. Определяет работы по оценке со-стояния и
          результатов какой-либо работы. Данный процесс может использоваться
          двумя любыми сторонами, когда одна из сторон (проверяющая) проверяет
          другую сторону (проверяемую) на совместном совещании.
        </li>
        <li>
          Процесс аудита. Определяет работы по определению соответствия
          требованиям, планам и договору. Данный процесс может использоваться
          двумя сторонами, когда одна из сторон (проверяющая) контролирует
          программные продукты или работы другой стороны (проверяемой).
        </li>
        <li>
          Процесс решения проблемы. Определяет процесс анализа и устранения
          проблем (включая несоответствия), независимо от их характера и
          источника, которые были обнаружены во время осуществления разработки,
          эксплуатации, сопровождения или других процессов.
        </li>
      </ol>

      <p>
        <i><b>Организационные процессы жизненного цикла</b></i> включают четыре процесса. Они
        применяются в какой-либо организации для создания и реализации основной
        структуры, охватывающей взаимосвязанные процессы жизненного цикла и
        соответствующий персонал, а также для постоянного совершенствования
        данной структуры и процессов. Эти процессы, как правило, являются
        типовыми, независимо от области реализации конкретных проектов и
        договоров; однако уроки, извлеченные из таких проектов и договоров,
        способствуют совершенствованию организационных вопросов.
        Организационными процессами являются:
      </p>

      <ol>
        <li>
          Процесс управления. Определяет основные работы по управлению, включая
          управление проектом, при реализации процессов жизненного цикла.
        </li>
        <li>
          Процесс создания инфраструктуры. Определяет основные работы по
          созданию основной структуры процесса жизненного цикла.
        </li>
        <li>
          Процесс усовершенствования. Определяет основные работы, которые
          организация (заказчика, поставщика, разработчика, оператора, персонала
          сопровождения или администратора другого процесса) выполняет при
          создании, оценке, контроле и усовершенствовании выбранных процессов
          жизненного цикла.
        </li>
        <li>
          Процесс обучения. Определяет работы по соответствующему обучению
          персонала.
        </li>
      </ol>

      <p>
        ГОСТ Р ИСО/МЭК 12207–2010 охватывает жизненный цикл программных средств
        от концепции замыслов через определение и объединение процессов для
        заказа и поставки программных продуктов и услуг. Кроме того, данная
        структура предназначена для контроля и модернизации данных процессов.
      </p>

      <p>
        Процессы, определенные в настоящем стандарте, образуют множество общего
        назначения. Конкретная организация, в зависимости от своих целей, может
        выбрать соответствующее подмножество процессов для выполнения своих
        конкретных задач. Поэтому настоящий стандарт следует адаптировать для
        конкретной организации, проекта или приложения.
      </p>

      <p>
        Настоящий стандарт предназначен для использования как в случае отдельно
        поставляемых программных средств, так и для программных средств,
        встраиваемых или интегрируемых в общую систему.
      </p>
    </div>
  );
}

Lecture2_0.propTypes = {};
