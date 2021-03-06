import React from 'react'
import './styles.scss'

export function Lecture5(props) {
    return (
        <div className='lecture5'>
            <h2>2.2 Стадии и этапы процесса канонического проектирования ИС</h2>

            <p>Стадии и этапы создания ИС, выполняемые организациями-участниками, фиксируются в договорах и технических заданиях на выполнение работ.</p>

            <p>Предпроектная стадия направлена на предпроектное обследование и разработку технического задания на ИС. Характерными результатами этого этапа являются:</p>

            <p>определение целей и задач системы, формирование общих требований к ее созданию, разработка программы проведения обследования, в ходе которого должны быть изучены структура и бизнес-процессы организации, модель управления, задачи, подлежащие автоматизации, техникоэкономические характеристики, ориентировочных состав технических средств.</p>

            <p>Перечень 8 этапов работ (стадий), в соответствии с ГОСТ 34.601 и дополнительными пояснениями, представлен ниже:</p>

            <p><b>Стадия 1.</b> Формирование требований к ИС.</p>

            <ul>
                <li>обследование объекта и обоснование необходимости создания ИС;</li>
                <li>формирование требований пользователя к ИС;</li>
                <li>оформление отчета о выполненной работе и заявки на разработку ИС (ТТХ).</li>
            </ul>

            <p><b>Стадия 2.</b> Разработка концепции ИС.</p>

            <ul>
                <li>изучение объекта;</li>
                <li>проведение необходимых научно-исследовательских работ;</li>
                <li>разработка вариантов концепции ИС, удовлетворяющих требованиям пользователей;</li>
                <li>оформление отчета о проделанной работе.</li>
            </ul>

            <p><b>Стадия 3.</b> Техническое задание.</p>

            <p>разработка и утверждение технического задания на создание ИС.</p>

            <p>Важным документом, фиксирующим результаты определения стратегии внедрения ИС, является технико-экономическое обоснование проекта. В этом документе должно быть четко определены результаты выполнения проекта для заказчика, а также указаны графики выполнения работ и график финансирования на разных этапах выполнения проекта. Дополнительно в таком документе отражаются сроки, время окупаемости проекта, ожидаемые выгода и экономический эффект проекта.</p>

            <p>По результатам обследования формируется техническое задание на информационную систему. В соответствии с ГОСТ 34.602-89, техническое задание (ТЗ) – основной документ, определяющий требования и порядок создания (развития или модернизации) автоматизированной системы, в соответствии с которым проводится разработка ИС и ее приемка при вводе в действие.</p>

            <p>Разработка технического задания предусматривает описание следующих разделов:</p>

            <ul>
                <li>общие сведения;</li>
                <li>назначение и цели создания (развития) системы;</li>
                <li>характеристика объектов автоматизации;</li>
                <li>требования к системе;</li>
                <li>состав и содержание работ по созданию системы;</li>
                <li>порядок контроля и приемки системы;</li>
                <li>требования к составу и содержанию работ по подготовке объекта автоматизации к вводу системы в действие;</li>
                <li>требования к документированию;</li>
                <li>источники разработки.</li>
            </ul>

            <p>Проектная стадия главным образом ориентирована на разработку технического и рабочего проектов. Процесс разработки технического задания включает обследование объекта автоматизации (организации или подразделения) и его систем управления. Для решения задач информационного обеспечения необходимо проанализировать информационные потоки, формы документации, системы кодирования, а также все связанное со структурой баз данных и СУБД, что определяет состав исходных технологических требований.</p>

            <p><b>Стадия 4.</b> Эскизный проект.</p>

            <ul>
                <li>разработка предварительных проектных решений по системе и ее частям;</li>
                <li>разработка эскизной документации на ИС и ее части.</li>
            </ul>

            <p><b>Стадия 5.</b> Технический проект.</p>

            <ul>
                <li>разработка проектных решений по системе и ее частям;</li>
                <li>разработка документации на ИС и ее части;</li>
                <li>разработка и оформление документации на поставку комплектующих изделий;</li>
                <li>разработка заданий на проектирование в смежных частях проекта.</li>
            </ul>

            <p><b>Стадия 6.</b> Рабочая документация.</p>

            <ul>
                <li>разработка рабочей документации на ИС и ее части;</li>
                <li>разработка и адаптация программ.</li>
            </ul>

            <p><b>Стадия 7.</b> Ввод в действие.</p>

            <ul>
                <li>подготовка объекта автоматизации;</li>
                <li>подготовка персонала;</li>
                <li>комплектация ИС поставляемыми изделиями (программными и техническими средствами, программно-техническими комплексами, ин-формационными изделиями);</li>
                <li>строительно-монтажные работы;</li>
                <li>пусконаладочные работы;</li>
                <li>проведение предварительных испытаний ;</li>
                <li>проведение опытной эксплуатации ;</li>
                <li>проведение приемочных испытаний.</li>
            </ul>

            <p><b>Стадия 8.</b> Сопровождение ИС.</p>

            <ul>
                <li>выполнение работ в соответствии с гарантийными обязательствами;</li>
                <li>послегарантийное обслуживание.</li>
            </ul>
        </div>
    )
}
