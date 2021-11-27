import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Image } from '../../../modules/Image'
import { Table } from 'antd'

export function Lecture11(props) {

    const columns = [
        {
            title: 'Внешний вид',
            dataIndex: '1',
            render: (text, r, index) => {
                if (typeof text === 'function') {
                    return text()
                }
                return text
            },
        },
        {
            title: 'Тип и обязательность связи',
            dataIndex: '2',
        },
        {
            title: 'Мощность связи справа',
            dataIndex: '3',
        },
    ]

    const data = [
        {
            1: () => <Image src='assets/img/lab11/3.png' isModal={false} />,
            2: 'Обязательная, идентифицирующая',
            3: '1',
        },
        {
            1: () => <Image src='assets/img/lab11/4.png' isModal={false} />,
            2: 'Обязательная, идентифицирующая',
            3: '0 ... ∞',
        },
        {
            1: () => <Image src='assets/img/lab11/5.png' isModal={false} />,
            2: 'Обязательная, идентифицирующая',
            3: '0 или 1',
        },
        {
            1: () => <Image src='assets/img/lab11/6.png' isModal={false} />,
            2: 'Обязательная, идентифицирующая',
            3: '1 ... ∞',
        },
        {
            1: () => <Image src='assets/img/lab11/7.png' isModal={false} />,
            2: 'Обязательная, идентифицирующая',
            3: '<число>',
        },
        {
            1: () => <Image src='assets/img/lab11/8.png' isModal={false} />,
            2: 'Обязательная, неидентифицирующая',
            3: '0 ... ∞',
        },
        {
            1: () => <Image src='assets/img/lab11/9.png' isModal={false} />,
            2: 'Необязательная, неидентифицирующая',
            3: '0 ... ∞',
        },
    ]
    return (
        <div className='lecture11'>

            <h2>4. Семантические модели информационных систем</h2>

            <h2>4.1. Методологическая основа реализации модели «сущность-связь»</h2>

            <p>С появлением на рынке сложных программных продуктов, предназначенных для комплексной автоматизации управления предприятием, в практику большинства аналитиков вошло понятие «моделирование бизнес-процессов». Разработка ИС всегда подразумевают проведение глубокого предпроектного обследования деятельности предприятия или организации.</p>

            <p>Комплексные обследования предприятий всегда являются сложными и существенно отличающимися от случая к случаю задачами, для решения которых существуют различные стандарты и подходы, описанные в раз-деле 2.</p>

            <p>В рамках методологии стандарта IDEF, помимо рассмотренной ранее методологии функционального моделирования IDEF0, входят также</p>

            <ul>
                <li>IDEF1 – методология моделирования информационных потоков внутри системы, позволяющая отображать и анализировать их структуру и взаимосвязи;</li>
                <li>IDEF1X (IDEF1 Extended) – методология построения реляционных структур. IDEF1X относится к типу методологий «Сущность-взаимосвязь» (ER – Entity-Relationship) и, как правило, используется для моделирования реляционных БД, имеющих отношение к рассматриваемой системе.</li>
            </ul>

            <p>В рамках данного учебного пособия напомним только методологию IDEF1x, как имеющую программную реализацию в виде CASE-средств, и используемую при моделировании реляционных БД.</p>

            <p>IDEF1X является методом для разработки реляционных баз данных и использует условный синтаксис, специально разработанный для удобного построения концептуальной схемы. Концептуальной схемой называется универсальное представление структуры данных в рамках коммерческого предприятия, независимое от конечной реализации базы данных и аппаратной платформы.</p>

            <p>Использование метода IDEF1X наиболее целесообразно для построения логической структуры базы данных после того, как все информационные ресурсы исследованы и решение о внедрении реляционной базы данных, как части корпоративной информационной системы, принято. Однако не стоит забывать, что средства моделирования IDEF1X специально разработаны для построения реляционных информационных систем, и если существует необходимость проектирования другой системы, скажем объектно-ориентированной, то лучше избрать другие методы моделирования.</p>

            <p>Ниже рассматривается последовательность шагов при концептуальном проектировании.</p>

            <p><i><b>1. Выделение сущностей.</b></i></p>

            <p>Первый шаг в построении концептуальной схемы данных состоит в определении основных объектов (сущностей), которые могут интересовать пользователя и, следовательно, должны храниться в БД. При наличии функциональной модели IDEF0 прообразами таких объектов являются входы, управления и выходы. Еще лучше для этих целей использовать DFD. Прообразами объектов в этом случае будут накопители данных. Как было отмечено выше, накопитель данных является совокупностью таблиц (набором объектов) или непосредственно таблицей (объектом). Для более детального определения набора основных объектов необходимо также проанализировать потоки данных и весь методический материал, требуемый для решения задачи. Например, для задачи определения допускаемых скоростей основными объектами (наборами объектов) являются: нормативно-справочная информация, информация об участках дороги, задания на расчет, ведомости допускаемых скоростей и т.д. В ходе анализа и проектирования информационной модели наборы объектов должны быть детализированы. Например, составной объект «информация об участках дороги» с учетом специфики решаемой задачи требует разбиения на отдельные составляющие: участки, пути, раздельные пункты, километраж, план, верхнее строение пути и т.д.</p>

            <p>Возможные трудности в определении объектов связаны с использованием постановщиками задачи:</p>

            <ul>
                <li>примеров и аналогий при описании объектов (например, вместо обобщающего понятия «работник» они могут упоминать его функции или занимаемую должность: «руководитель», «ответственный», «контролер», «заместитель»);</li>
                <li>синонимов (например, «допускаемая скорость» и «установленная скорость», «разработка» и «проект», «барьерное место» и «ограничение скорости»);</li>
                <li>омонимов (например, «программа» может обозначать компьютерную программу, план предстоящей работы или программу телепередач).</li>
            </ul>

            <p>Далеко не всегда очевидно то, чем является определенный объект – сущностью, связью или атрибутом. Например, как следует классифицировать «семейный брак»? На практике это понятие можно вполне обоснован-но отнести к любой из упомянутых категорий. Анализ является субъективным процессом, поэтому различные разработчики могут создавать разные, но вполне допустимые интерпретации одного и того же факта. Выбор варианта в значительной степени зависит от здравого смысла и опыта проектировщика.</p>

            <p><i><b>Каждая сущность должна обладать некоторыми свойствами:</b></i></p>

            <ul>
                <li>должна иметь уникальное имя, и к одному и тому же имени должна всегда применяться одна и та же интерпретация;</li>
                <li>обладать одним или несколькими атрибутами, которые либо принадлежат сущности, либо наследуются через связь;</li>
                <li>обладать одним или несколькими атрибутами (первичным ключом), которые однозначно идентифицируют каждый экземпляр сущности, т. е. делают уникальной каждую строку таблицы;</li>
                <li>может обладать любым количеством связей с другими сущностями.</li>
            </ul>

            <p>В графической нотации IDEF1X для отображения сущности используются обозначения, изображенные на следующем рисунке.</p>

            {<Image src='assets/img/lab11/1.png' annotation='Рис. 10 Сущности' />}

            <p>Сущность в методологии IDEF1X является независимой (сильной, родительской, доминантной, владельцем), если сущность не зависит от существования другой сущности (другими словами, каждый экземпляр сущности может быть однозначно идентифицирован без определения его связей с другими сущностями, или уникальность экземпляра определяется только собственными атрибутами). Сущность называется зависимой (слабой, дочерней, подчиненной), если ее существование зависит от существования других сущностей. Терминология «родительская» – «дочерняя» и «владелец» – «подчиненный» также может использоваться в отношении двух зависимых сущностей, если экземпляры одной из них (дочерней, подчиненной) могут быть однозначно определены с использованием экземпляров другой (родительской, владельца), несмотря на то, что вторая сущность в свою очередь зависит от третьей сущности.</p>

            <p><i><b>2. Определение атрибутов.</b></i></p>

            <p>Как правило, атрибуты указываются только для сущностей. Если у связи имеются атрибуты, то это указывает на тот факт, что связь является сущностью. Самый простой способ определения атрибутов – после идентификации сущности или связи, задать себе вопрос «Какую информацию требуется хранить о …?». Существенно помочь в определении атрибутов могут различные бумажные и электронные формы и документы, используемые в организации при решении задачи. Это могут быть формы, содержащие как исходную информацию (например, «Ведомость возвышений наружного рельса в кривых»), так и результаты обработки данных (например, «Форма № 1»).</p>

            <p>Выявленные атрибуты могут быть следующих типов:</p>

            <ul>
                <li>простой (атомарный, неделимый) – состоит из одного компонента с независимым существованием (например, «должность работника», «зарплата», «норма непогашенного ускорения», «радиус кривой» и т.д.);</li>
                <li>составной (псевдоатомарный) – состоит из нескольких компонентов (например, «ФИО», «адрес», и т. д.). Степень атомарности атрибутов, закладываемая в модель, определяется разработчиком. Если от системы не требуется выборки всех клиентов с фамилией Иванов или проживающих на улице Комсомольской, то составные атрибуты можно не разбивать на атомарные;</li>
                <li>однозначный – содержит только одно значение для одного экземпляра сущности (например, у кривой в плане может быть только одно значение радиуса, угла поворота, возвышения наружного рельса и т.д.);</li>
                <li>многозначный – содержит несколько значений (например, у одного отделения компании может быть несколько контактных телефонов);</li>
                <li>производный (вычисляемый) – значение атрибута может быть определено по значениям других атрибутов (например, «возраст» может быть определен по «дате рождения» и текущей дате, установленной на компьютере);</li>
                <li>ключевой – служит для уникальной идентификации экземпляра сущности (входит в состав первичного ключа), быстрого поиска экземпляров сущности или задания связи между экземплярами родительской и до-черней сущностей;</li>
                <li>неключевой (описательный);</li>
                <li>обязательный – при вводе нового экземпляра в сущность или редактировании обязательно указывается допустимое значение атрибута, т.е. после указанных действий оно не может быть неопределенным (NOT NULL). Атрибуты, входящие в первичный ключ сущности, являются обязательными.</li>
            </ul>

            <p>После определения атрибутов задаются их домены (области допустимых значений), например:</p>

            <ul>
                <li>наименование участка – набор из букв русского алфавита длиной не более 60 символов;</li>
                <li>поворот кривой – допустимые значения «Л» (влево) и «П» (вправо);</li>
                <li>радиус кривой – положительное число не более 4 цифр.</li>
            </ul>

            <p>Задание доменов определяет набор допустимых значений для атрибута (нескольких атрибутов), а также тип, размер и формат атрибута (атрибутов).</p>

            <p><i><b>3. Определение ключей.</b></i></p>

            <p>На основании выделенного множества атрибутов для сущности определяется набор ключей. <i><b>Ключ</b></i> – один или несколько атрибутов сущности, служащих для однозначной идентификации ее экземпляров, их быстрого поиска или задания связи между экземплярами родительской и дочерней сущностей. Ключи, используемые для однозначной идентификации экземпляров, подразделяются на следующие типы:</p>

            <ul>
                <li><i><b>суперключ (superkey)</b></i> – атрибут или множество атрибутов, которое единственным образом идентифицирует экземпляр сущности. Суперключ может содержать «лишние» атрибуты, которые необязательны для уникальной идентификации экземпляра. При правильном проектировании структуры БД суперключом в каждой сущности (таблице) будет являться полный набор ее атрибутов;</li>
                <li><i><b>потенциальный ключ (potential key)</b></i> – суперключ, который не со-держит подмножества, также являющегося суперключом данной сущности, т. е. суперключ, содержащий минимально необходимый набор атрибутов, единственным образом идентифицирующих экземпляр сущности. Сущность может иметь несколько потенциальных ключей. Если ключ состоит из нескольких атрибутов, то он называется составным ключом. Среди всего множества потенциальных ключей для однозначной идентификации эк-земпляров выбирают один, так называемый первичный ключ, используемый в дальнейшем для установления связей с другими сущностями;</li>
                <li><i><b>первичный ключ (primary key)</b></i> – потенциальный ключ, который выбран для уникальной идентификации экземпляров внутри сущности;</li>
                <li><i><b>альтернативные ключи (alternative key)</b></i> – потенциальные ключи, которые не выбраны в качестве первичного ключа.</li>
            </ul>

            <p>Рассмотрим пример. Пусть имеется таблица, содержащая сведения о студенте, со следующими столбцами:</p>

            <ul>
                <li>фамилия;</li>
                <li>имя;</li>
                <li>отчество;</li>
                <li>дата рождения;</li>
                <li>место рождения;</li>
                <li>номер группы;</li>
                <li>ИНН;</li>
                <li>номер пенсионного страхового свидетельства (НПСС);</li>
                <li>номер паспорта;</li>
                <li>дата выдачи паспорта;</li>
                <li>организация, выдавшая паспорт.</li>
            </ul>

            <p>Для каждого экземпляра (записи) в качестве суперключа может быть выбран весь набор атрибутов. Потенциальными ключами (уникальными идентификаторами) могут быть:</p>

            <ul>
                <li>ИНН;</li>
                <li>номер пенсионного страхового свидетельства;</li>
                <li>номер паспорта.</li>
            </ul>

            <p>В качестве уникального идентификатора можно было бы выбрать совокупность атрибутов «Фамилия»+«Имя»+«Отчество», если вероятность учебы в вузе двух полных тезок была бы равна нулю.</p>

            <p>Если в сущности нет ни одной комбинации атрибутов, подходящей на роль потенциального ключа, то в сущность добавляют отдельный атрибут – <i><b>суррогатный ключ (искусственный ключ, surrogate key)</b></i>. Как пра-вило, тип такого атрибута выбирают символьный или числовой. В некоторых СУБД имеются встроенные средства генерации и поддержания значений суррогатных ключей (например, MS Access). Также стоит отметить, что некоторые разработчики вместо поиска потенциальных ключей и вы-бора из них первичного в каждую сущность добавляют искусственный атрибут, который в дальнейшем и используют в качестве первичного ключа.</p>

            <p>Если потенциальных ключей несколько, то для выбора первичного ключа рекомендуется придерживаться следующих правил:</p>

            <ul>
                <li>количество атрибутов, входящих в ключ, должно быть минимальным (желательно, чтобы ключ был атомарным, т.е. состоял из одного атрибута);</li>
                <li>размер ключа в байтах должен быть как можно короче;</li>
                <li>тип домена ключа – числовой. При выборе символьных атрибутов в ключ часто возникают проблемы с вводом ошибочных значений (путают регистр букв; добавляют лишние пробелы; используют буквы, пишущиеся на разных языках одинаково). В числовых атрибутах вероятность ошибки при вводе значения меньше;</li>
                <li>вероятность изменения значений ключа была наименьшей (напри-мер, «Номер пенсионного страхового свидетельства» более постоянный параметр, чем «ИНН» или «Номер паспорта»);</li>
                <li>с ключом проще всего работать пользователям (например, «Номер пенсионного страхового свидетельства» – это набор из 11 цифр, а «Номер паспорта» зависит от его вида: гражданина СССР, гражданина РФ или за-рубежный).</li>
            </ul>

            <p>Если некий атрибут (набор атрибутов) присутствует в нескольких сущностях, то его наличие обычно отражает наличие связи между экземплярами этих сущностей. В каждой связи одна сущность выступает как родительская, а другая – в роли дочерней. Это означает, что один экземпляр родительской сущности может быть связан с несколькими экземплярами дочерней. Для поддержки этих связей обе сущности должны содержать наборы атрибутов, по которым они связаны. В родительской сущности это первичный ключ. В дочерней сущности для моделирования связи должен присутствовать набор атрибутов, соответствующий первичному ключу родительской. Этот набор атрибутов в дочерней сущности принято называть <i><b>внешним ключом (foreign key)</b></i>.</p>

            <p>В нотации IDEF1X атрибуты изображаются в виде списка имен внутри блока сущности. Атрибуты, определяющие первичный ключ, размещаются наверху списка и отделяются от других атрибутов горизонталь-ной чертой. Предварительная идентификация атрибутов на примере двух сущностей показана на следующем рисунке.</p>

            {<Image src='assets/img/lab11/2.png' annotation='Рис. 11 Примеры сущностей' />}

            <p>У независимой сущности «Участки» в качестве первичного ключа назначен суррогатный ключ, у зависимой сущности «План» – первичный ключ составной, состоящий из пяти атрибутов.</p>

            <p><i><b>4. Определение связей</b></i></p>

            <p>Наиболее характерными типами связей между сущностями являются:</p>

            <ul>
                <li>связи типа «часть–целое», определяемые обычно глаголами «состоит из», «включает» и т.п.;</li>
                <li>классифицирующие связи (например, «тип – подтип», «множество – элемент», «общее – частное» и т. п.);</li>
                <li>производственные связи (например, «начальник–подчиненный»);</li>
                <li>функциональные связи, определяемые обычно глаголами «производит», «влияет», «зависит от», «вычисляется по» и т. п.</li>
            </ul>

            <p>Среди них выделяются только те связи, которые необходимы для удовлетворения требований к разработке БД.</p>

            <p>Связь характеризуется следующим набором параметров:</p>

            <ul>
                <li>именем – указывается в виде глагола и определяет семантику (смысловую подоплеку) связи;</li>
                <li>кратностью (кардинальность, мощность): один-к-одному (1:1), один-ко-многим (1:N) и многие-ко-многим (N:M, N = M или N &lt;> M). Кратность показывает, какое количество экземпляров одной сущности определяется экземпляром другой. Например, на одном участке (описывается строкой таблицы «Участки») может быть один, два и более путей (каждый путь описывается отдельной строкой в таблице «Пути»). В дан-ном случае связь 1:N. Другой пример: один путь проходит через несколько раздельных пунктов и через один раздельный пункт может проходить несколько путей – cвязь N:M;</li>
                <li>типом: идентифицирующая (атрибуты одной сущности, называемые внешним ключом, входят в состав дочерней и служат для идентификации ее экземпляров, т.е. входят в ее первичный ключ) и не идентифицирующая (внешний ключ имеется в дочерней сущности, но не входит в состав первичного ключа);</li>
                <li>обязательностью: обязательная (при вводе нового экземпляра в дочернюю сущность заполнение атрибутов внешнего ключа обязательно и введенные значения должны совпадать со значениями атрибутов первичного ключа какого-либо экземпляра родительской сущности) и необязательная (заполнение атрибутов внешнего ключа в экземпляре дочерней сущности необязательно или введенные значения не совпадают со значениями атрибутов первичного ключа ни одного экземпляра родительской сущности);</li>
                <li>степенью участия – количеством сущностей, участвующих в связи. В основном между сущностями существуют бинарные связи, т.е. ассоциации, связывающие две сущности (степень участия равна 2). Например, «Участок» состоит из «Путей».</li>
            </ul>

            <p>В то же время по степени участия возможны следующие типы связей:</p>

            <ul>
                <li>унарная (рекурсивная) – сущность может быть связана сама с со-бой. Например, в таблице «Работники» могут быть записи и по подчиненным, и по их начальникам. Тогда возможна связь «начальник» – «подчиненный», определенная на одной таблице;</li>
                <li>тернарная – связывает три сущности. Например, «Студент» на «Сессии» получил «Оценку по дисциплине»;</li>
                <li>кватернарная и т.д.</li>
            </ul>

            <p>В методологии IDEF1X степень участия может быть только унарной или бинарной. Связи большей степени приводятся к бинарному виду.</p>

            <p>Внешний вид связи на диаграммах IDEF1X указывает на ее мощность, тип и обязательность.</p>

            <Table columns={columns} dataSource={data} bordered pagination={false} />

            <p><i>Примечания.</i></p>

            <ol>
                <li>Идентифицирующая связь отображается сплошной линией, не-идентифицирующая – пунктирной.</li>
                <li>Необязательность обозначается ромбиком.</li>
            </ol>
            <p>На следующем рисунке приведены примеры отображения связей.</p>

            <p>а) идентифицирующая</p>
            {<Image src='assets/img/lab11/10.png' />}
            <p>б) не идентифицирующая</p>
            {<Image src='assets/img/lab11/11.png' />}
            <p>в) рекурсивная</p>
            {<Image src='assets/img/lab11/12.png' annotation='Рис. 12 Примеры связей' />}

            <p>На рис. 12б связь необязательная, так как некоторые сотрудники не обязательно должны входить в какой-либо отдел (например, директор предприятия), и неидентифицирующая, так как табельный номер уникален для каждого сотрудника.</p>

            <p><i><b>5. Определение суперклассов и подклассов.</b></i></p>

            <p>В тех случаях, когда две и более сущностей по набору атрибутов не-значительно отличаются друг от друга, можно применять в модели кон-струкцию – иерархию наследования (категорий), включающую в себя су-перклассы и подклассы.</p>

            <p><i><b>Суперкласс</b></i> – сущность, включающая в себя подклассы.</p>

            <p>Иерархия наследования представляет собой особый тип объединения сущностей, которые разделяют общие характеристики. Например, в орга-низации работают служащие, занятые полный рабочий день (постоянные служащие) и совместители. Из их общих свойств можно сформировать обобщенную сущность (родового предка) «Сотрудник» (рис. 7.4), чтобы представить информацию, общую для всех типов служащих. Специфиче-ская для каждого типа информация может быть расположена в дополни-тельных сущностях (потомках) «Постоянный сотрудник» и «Совмести-тель».</p>

            {<Image src='assets/img/lab11/13.png' annotation='Рис. 13 Иерархия наследования (неполная категория)' />}

            <p>Обычно иерархию наследования создают, когда несколько сущностей имеют общие по смыслу атрибуты, либо когда сущности имеют общие по смыслу связи (например, если бы «Постоянный сотрудник» и «Совместитель» имели бы сходную по смыслу связь «работает в» с сущностью «Организация»).</p>

            <p>Для каждой категории требуется указать дискриминатор – атрибут родового предка, который показывает, как отличить одну сущность от другой. В приведенном примере дискриминатор – атрибут «Тип».</p>

            <p>Иерархии категорий делятся на два типа: неполные (рис. 13) и полные (рис. 14).</p>

            {<Image src='assets/img/lab11/13.png' annotation='Рис. 14 Иерархия наследования (полная категория)' />}

            <p>В полной категории одному экземпляру родового предка обязательно соответствует экземпляр в каком-либо потомке, т. е. в примере сотрудник обязательно является либо совместителем, либо консультантом, либо постоянным сотрудником.</p>

            <p>Если категория еще не выстроена полностью и в родовом предке могут существовать экземпляры, которые не имеют соответствующих экземпляров в потомках, то такая категория будет неполной.</p>

            <p>При построении модели возможны различные комбинации полных и неполных категорий. Например, первый уровень категории неполный, от-дельные сущности которого дополняются вторым уровнем – полной категорией.</p>

            <p><b>Пример построения концептуальной схемы</b></p>

            <p>На следующем рисунке показан фрагмент концептуальной схемы информационной модели для задачи определения допускаемых скоростей, построенная с использованием ERwin v9.2.</p>

            {<Image src='assets/img/lab11/15.jpg' annotation='Рис. 15 Фрагмент концептуальной схемы информационной модели' />}

            <p>В концептуальной схеме выделены следующие логические блоки данных:</p>

            <ul>
                <li>нормативно-справочная информация;</li>
                <li>информация об участках дороги;</li>
                <li>задание на расчет;</li>
                <li>ведомости допускаемых скоростей;</li>
                <li>проект Приказа «Н» (на рис. 15 не показан);</li>
                <li>Формы № 1, 1а и 2 (на рис. 15 не показан).</li>
            </ul>

            <p>Все сущности, входящие в блоки (кроме блока «Нормативно-справочная информация»), представлены во фрагменте только наименованиями. Сущности, входящие в блок «Нормативно-справочная информация», показаны развернуто, т.е. включая все атрибуты и первичные ключи. В этом блоке присутствуют две сущности («Нормативы для сопрягаемых кривых» и «Допускаемые скорости по уклону отвода возвышения в кривых»), которые не связаны ни с одной другой сущностью. Это не является ошибкой, так как существует мнение, что схема БД должна представлять собой связный граф (все сущности должны быть связаны между собой). Для большинства задач, где в БД накапливается различная оперативная информация, а затем на основе ее формируются различные отчеты и сводки, такое утверждение действительно имеет место. Но для инженерных, оптимизационных и некоторых других задач возможно наличие несвязанных таблиц. В рассматриваемом примере две несвязанные сущности участвуют в каждом расчете допускаемых скоростей, т. е. они влияют на результаты, отображаемые в ведомостях допускаемых скоростей. Но учитывая специфику задачи, изменение содержимого этих таблиц не должно приводить к изменению уже полученных результатов. Поэтому таблицы не связаны ни с заданиями на расчет, ни с результатами расчета.</p>
        </div>
    )
}