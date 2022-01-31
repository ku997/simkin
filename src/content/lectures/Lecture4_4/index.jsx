import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../../modules/Image";

export function Lecture4_4(props) {
  return (
    <div className="lecture4_4">
      <h2>1.4.4. Гибкая методология разработки (Agile)</h2>

      <p>
        Agile-модель – это современная тенденция в методологии разработки
        программного обеспечения, используемая для ускорения доставки
        операционных продуктов/систем в запланированные сроки с использованием
        набора значений, которые включают в себя адаптивность, прозрачность,
        простоту и единство в эффективном и легком взвешенном виде. Гибкая
        модель – это широко применяемая модель, которая часто использует подход
        к упрощению процесса, деля его на короткие и легкие взвешенные фазы,
        такие как требования, спецификации, архитектура, проектирование,
        внедрение, тестирование, развертывание и обслуживание, что приводит к
        со-зданию эффективных программных систем. Существует множество
        специальных гибких методов разработки. Большинство поощряют развитие,
        командный дух, ассоциацию и соответствие процессам на протяжении всего
        жизненного цикла проекта.
      </p>

      <p>
        Гибкие методы разбивают задачи на небольшие приращения с минимальным
        планированием и не связаны напрямую с планированием на большие
        расстояния. Итерации – это очень короткие временные рамки, которые также
        называются временными ячейками, которые обычно варьируются от одной до
        четырех недель. Каждая итерация включает в себя кросс-функциональную
        группу, которая работает во всех задачах, таких как планирование
        проектов, анализ требований, системный и архитектурный дизайн,
        кодирование, тестирование уровня подразделения и, наконец, приемочные
        испытания. В конце каждой итерации рабочий продукт проверяется
        заинтересованными сторонами. Это позволяет свести к минимуму общий риск
        и позволяет проекту быстро адаптироваться к изменениям. Для выпуска
        продукта может потребоваться много итераций.
      </p>
      {<Image src="assets/img/lab1.3/4.png" />}
      <p>
        <b>ИСТОРИЯ AGILE</b>
      </p>

      <p>
        Эволюционное управление проектами и адаптивная разработка программного
        обеспечения появились в начале 1970 годов. В 1970 году док-тор Уинстон
        Ройс представил документ под названием «Управление развитием крупных
        программных систем», в котором критиковалась последовательная
        разработка. Он утверждал, что программное обеспечение не должно
        разрабатываться как автомобиль на сборочной линии, в котором каждая
        деталь добавляется в последовательные фазы. В таких последовательных
        этапах каждая фаза проекта должна быть завершена до того, как начнется
        следующий этап. Доктор Ройс рекомендовал использовать фазовый подход, в
        котором разработчики сначала собирают все требования проекта, а затем
        завершают всю свою архитектуру и дизайн, затем записывают весь код и
        т.д.
      </p>

      <p>
        В 1990 годах был разработан ряд гибких методов разработки программного
        обеспечения в ответ на преобладающие тяжеловесные методы. К ним
        относятся: с 1991 года – RAD (быстрая разработка приложений); с 1994
        года – метод разработки динамических систем (DSDM); с 1995 года – Scrum;
        С 1996 года, Crystal Clear и экстремальное программирование (XP); а с
        1997 года – Feature driven development (FDD). Хотя они возникли до
        публикации Манифеста Agile Software Development, они все вместе
        называются гибкими методами разработки программного обеспечения.
      </p>

      <p>
        В феврале 2001 года семнадцать разработчиков ПО встретились на курорте
        Snowbird в штате Юта, чтобы обсудить легкие методы разработки. Вместе
        они опубликовали Манифест о гибкой разработке программного обеспечения
        Agile.
      </p>

      <p>
        <b>МАНИФЕСТ AGILE</b>
      </p>

      <p>
        Манифест Agile состоит из 4 основополагающих идеи и 12 принципов. Каждая
        методология Agile применяет эти идеи по-разному, но все они полагаются
        на них, чтобы управлять проектами максимально эффективно.
      </p>

      <p>
        <b>4 ИДЕИ AGILE</b>
      </p>

      <ol>
        <li>Люди и взаимодействие важнее процессов и инструментов.</li>
        <li>Рабочее программное обеспечение важнее документации.</li>
        <li>
          Сотрудничество с клиентами важнее согласования условий контракта.
        </li>
        <li>
          Готовность внести изменения в приоритете, нежели придерживаться
          первоначального плана.
        </li>
      </ol>

      <p>
        <b>12 ПРИНЦИПОВ AGILE</b>
      </p>

      <ol>
        <li>
          Удовлетворенность клиентов за счет ранней и непрерывной поставки
          программного обеспечения. Клиенты более счастливы, когда они получают
          рабочее программное обеспечение через регулярные промежутки времени.
        </li>
        <li>
          Вносить изменения требований к продукту на протяжении всего процесса
          разработки.
        </li>
        <li>
          Частая поставка рабочего программного обеспечения (каждый месяц, две
          недели, неделю и т.д.).
        </li>
        <li>
          Сотрудничество между заинтересованными сторонами (заказчиком и
          разработчиками) на протяжении всего проекта.
        </li>
        <li>
          Поддержка, доверие и мотивация вовлеченных людей. Мотивированные
          команды с большей вероятностью выполняют свою лучшую работу, чем
          сотрудники, недовольные условиями труда.
        </li>
        <li>
          Взаимодействие лицом к лицу. Коммуникация более успешна, когда команды
          разработчиков имеют возможность общаться напрямую.
        </li>
        <li>
          Рабочее программное обеспечение является основной мерой прогресса.
          Предоставление функционального программного обеспечения клиенту
          является конечным фактором, который измеряет прогресс.
        </li>
        <li>
          Поддержка постоянного темпа работы. Команды устанавливают повторяемую
          и поддерживаемую скорость работы, с которой они могут доставлять
          функционирующее программное обеспечение.
        </li>
        <li>
          Внимание к техническим деталям и дизайну. Правильные навыки и хороший
          дизайн позволяют команде поддерживать темп, постоянно совершенствовать
          продукт и работать над изменениями.
        </li>
        <li>Простота.</li>
        <li>
          Самоорганизующиеся команды поощряют отличную архитектуру, требования и
          проекты. Квалифицированные и мотивированные члены команды, которые
          обладают полномочиями принимать решения, регулярно общаются с другими
          членами команды и обмениваются идеями, которые обеспечат создание
          качественного продукта.
        </li>
        <li>
          Постоянная адаптация к изменяющимся условиям, что поможет сделать
          продукт более конкурентоспособным на рынке.
        </li>
      </ol>

      <p>
        <b>ОСНОВА МЕТОДА AGILE</b>
      </p>

      <p>
        Основой метода гибкого управления проектами является ряд ключевых
        элементов:
      </p>

      <ol>
        <li>
          Визуальный контроль. Участники проекта в ходе работы над проектом
          используют карточки различных цветов и видов, которые сигнализируют,
          какой элемент конечного продукта уже разработан, спланирован, завершен
          и т.д. Таким образом, команда имеет наглядное представление о
          существующем положении дел. Визуальный контроль обеспечивает
          одинаковое видение проекта каждым из участников.
        </li>
        <li>
          Все участники проекта работают рядом, включая клиента. Такой подход не
          только ускоряет многие процессы, связанные с информированием
          участников рабочей группы, но и создает благоприятную атмосферу для
          сотрудничества и эффективной работы.
        </li>
        <li>
          Адаптируемое управление. Руководитель проекта – не человек, который
          раздает указания, а лидер, определяющий основные правила работы и
          сотрудничества.
        </li>
        <li>
          Совместная работа. Команда, руководитель проекта и клиент работают
          сообща, что исключает возможность потери информации и не-понимания
          целей. Также прозрачность всех процессов позволяет моментально
          исключать появившиеся проблемы и находить удачные решения и улучшения.
        </li>
        <li>
          Работа, основанная на разделении общего объема проекта на составные
          части. Такая система работы значительно снижает сложность проекта и
          позволяет командам сфокусироваться на каждой части в отдельности.
        </li>
        <li>
          Работа над ошибками. В ходе работы одного цикла команда осваивает
          новые навыки и анализирует произошедшие ошибки, что исключает их
          появление в следующем цикле.
        </li>
        <li>
          Спринты и ежедневные встречи. Спринты – отрезки времени, за которые
          команды выполняют ряд задач, – позволяют четко видеть результаты
          работы. Разделив время работы над проектом на спринты, получаем,
          например 10 спринтов, каждый по две недели. А ежедневные встречи не
          более чем на 15 минут помогут каждому члену команды ответить для себя
          на три вопроса: что я делал вчера, что я буду делать сегодня, что мне
          мешает выполнять работу?
        </li>
      </ol>

      <p>
        Таким образом, внедрение гибкого метода Agile возможно при следующих
        условиях:
      </p>

      <ul>
        <li>значение проекта четко обозначено;</li>
        <li>клиент активно участвует на протяжении всего проекта;</li>
        <li>возможно пошаговое выполнение общего объема проекта;</li>
        <li>результат работы важнее, чем документация;</li>
        <li>рабочая группа составляет не более 7 – 9 человек.</li>
      </ul>

      <p>
        <b>СИСТЕМЫ УПРАВЛЕНИЯ ПРОЕКТАМИ, ОСНОВАННЫЕ НА AGILE</b>
      </p>

      <p>
        Существует множество методов, основанных на идеи Agile, самые популярные
        из них – Scrum и Kanban.
      </p>

      <p>
        <b>SCRUM</b>
      </p>

      <p>
        Scrum – это методология управления проектами, в основе которой делается
        акцент на качественном контроле процесса работы. Хиротака Такэути и
        Икудзиро Нонака – первые, кто описал подход Scrum, объясни-ли его как
        “подход регби”, в котором scrum – это борьба за мяч. Сам метод
        представляет собой процесс разработки, разделенный на небольшие итерации
        — спринты, по завершении которых пользователи получают улучшенный
        вариант ПО. Спринт жестко фиксирован по времени, а его длительность
        составляет от 2 до 4 недель. Работа в рамках одного спринта состоит из
        нескольких этапов:
      </p>

      <ol>
        <li>Планирование объемов работы для одного спринта.</li>
        <li>
          Ежедневные совещания на 15 минут для коррекции работы команды и
          подведения промежуточных итогов.
        </li>
        <li>Демонстрация результатов работы.</li>
        <li>
          Ретроспектива спринта, в которой рассмотрены удачные и неудачные
          события в рамках прошедшего спринта.
        </li>
      </ol>

      <p>
        Scrum чаще всего используется для управления сложным программным
        обеспечением и разработкой продукта, используя итеративные и
        инкрементные методы.
      </p>

      <p>
        Scrum значительно увеличивает производительность и сокращает время до
        преимуществ по сравнению с классическими процессами «waterfall».
        Процессы Scrum позволяют организациям плавно адаптироваться к быстро
        меняющимся требованиям и создавать продукт, отвечающий изменяющимся
        бизнес-целям. Scrum позволяет:
      </p>

      <ul>
        <li>Повысить качество результатов.</li>
        <li>Лучше справиться с изменениями.</li>
        <li>
          Обеспечить более точные оценки, тратя меньше времени на их создание.
        </li>
        <li>Лучше контролировать сценарий проекта и этапы работы.</li>
      </ul>

      {<Image src="assets/img/lab1.3/5.png" />}

      <p>
        <b>Kanban</b>
      </p>

      <p>
        Kanban – это процесс, призванный помочь командам работать вместе более
        эффективно. В переводе с японского kanban обозначает “рекламный щит,
        вывеска”, а сам метод взят и адаптирован с производственной системы
        Toyota. Суть Канбан заключается в том, чтобы сделать процесс разработки
        максимально прозрачным и распределять нагрузку равномерно между членами
        команды. Канбан способствует непрерывному сотрудничеству и поощряет
        активное, постоянное обучение и совершенствование.
      </p>

      <p>Kanban основан на трех принципах:</p>

      <ol>
        <li>
          Визуализация задач: видимость всей информации о проекте поможет
          увидеть недочеты, ошибки и накладки.
        </li>
        <li>
          Контроль и ограничение WIP (work in progress – работа, выполняемая
          одновременно): это помогает сбалансировать подход, основанный на
          потоках, чтобы команды не начинали и не совершали слишком много работы
          сразу.
        </li>
        <li>
          Контроль времени на выполнение задачи и оптимизация работы для
          экономии времени.
        </li>
      </ol>

      <p>
        <b>ДОСТОИНСТВА И НЕДОСТАТКИ AGILE</b>
      </p>

      <p>
        Любая методология имеет преимущества и недостатки. Рассмотрим плюсы и
        минусы Agile.
      </p>

      <p>
        <b>Преимущества</b>
      </p>

      <ol>
        <li>Больше гибкости по сравнению с методологией Waterfall.</li>
      </ol>

      <p>
        Традиционная методология водопада четко диктует этапы работы. С
        методологией Agile, расписание и стоимость являются основными
        определяющими факторами, и это область, которая изменяется для
        удовлетворения требований заказчиков и потребителей продукта.
      </p>

      <ol start="2">
        <li>Меньше дефектов в конечном продукте.</li>
      </ol>

      <p>
        Это результат проверки качества, проводимой на каждом этапе работы.
        Непрерывный процесс «разработки, сборки и тестирования» также сокращает
        количество дефектов по мере продолжения итерационных циклов.
      </p>

      <p>
        <b>Недостатки</b>
      </p>

      <ol>
        <li>
          Постоянное получение обратной связи приводит к постоянному переносу
          даты завершения проекта.
        </li>
      </ol>

      <p>
        Благодаря мгновенной обратной связи, которую предоставляет Agile,
        возникает опасность долгой работы. Конечные пользователи, которые видят,
        что эти требования могут быть выполнены «легко» (они видят только
        результат, а не усилия), будут запрашивать дополнительные функции. Если
        менеджер проекта и разработчики не могут управлять ожиданиями, конечные
        пользователи будут продолжать запрашивать больше, пока вся команда не
        будет загружена дополнительной работой.
      </p>

      <ol start="2">
        <li>Документация</li>
      </ol>

      <p>
        Из-за гибкого характера Agile документации должна следовать за быстро
        меняющимися условиями проекта. Запрос на изменение или функцию можно
        было бы подробно обсудить и согласовать с конечными пользователями,
        разработчиками и тестировщиками, но, если команда не была
        проинформирована, критический документ, такой как руководство
        пользователя, документ с архитектурой или функциональным требованием,
        станет устаревшим.
      </p>

      <ol start="3">
        <li>Частые встречи</li>
      </ol>

      <p>
        Хотя Agile рекомендует, чтобы такие встречи проводились ежедневно, чтобы
        держать всех в курсе прогресса друг друга, устойчивость такой практики
        сказывается на прогрессе итераций. Разработчики сосредоточены на том,
        что они делают. Вытягивание их для встречи, которая может отвлечь их от
        выполнения фактической работы, – это не то, что они примут с радостью.
      </p>

      <p>
        <b>ВНЕДРЕНИЕ AGILE</b>
      </p>

      <ol>
        <li>
          <b>Выбор методики.</b> Существуют различные гибкие методологии,
          которые разработаны под определенные условия. Первым этапом работы с
          Agile необходимо определить цели задачи работы, сроки, количество
          сотрудников и многое другое и подобрать такую гибкую методику
          управления проектом, которая будет отвечать всем требованиям.
        </li>
        <li>
          <b>Обучение персонала.</b> Обучение необходимо для того, чтобы
          сотрудники понимали базовые принципы Agile и знали, как с ними
          работать. Именно на этом этапе определяются подводные камни, которые
          могут снизить эффективность Agile. Готов ли коллектив к изменениям?
          Подходят ли проекты компании для гибких методик? На эти и многие
          другие вопросы обычно помогают ответить бизнес-тренеры,
          специализирующиеся на Agile. Помимо прочего будет также составлен
          список тренингов и план, по которому будет вестись внедрение Agile в
          компании.
        </li>
        <li>
          <b>Демонстрация Agile.</b> Своеобразный тест-драйв Agile, который
          проводится под контролем специалиста и показывает все этапы работы,
          объясняет функции ролей, взаимодействие внутри команды и между
          командами и т.д.
        </li>
        <li>
          <b>Создание команды.</b> В создание команды помимо подбора сотрудников
          также входит определение обязанностей, распределение задач, создание
          графика встреч и т.д. Каждая из методик рассчитана на определенное
          количество человек в команде.
        </li>
        <li>
          <b>Выбор инструментов,</b> необходимых для распределения задач,
          ведения отчетности, аналитики и прочее.
        </li>
        <li>
          <b>Первый проект с Agile.</b> В первом проекте будут ошибки,
          несостыковки, отказ от одних инструментов и выбор других. Любая
          методика требует своеобразной адаптации под особенности компании, в
          которую она внедряется.
        </li>
      </ol>
    </div>
  );
}

Lecture4_4.propTypes = {};
