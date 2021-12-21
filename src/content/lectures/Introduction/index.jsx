import React from 'react'
import PropTypes from 'prop-types'

export function Introduction(props) {
    return (
        <div className='introduction'>
            <h2>ВВЕДЕНИЕ</h2>

            <p>Создание ИС – это логически сложная, трудоемкая и длительная ра-бота, требующая высокой квалификации участвующих в ней специалистов. Но нередко создание таких систем выполняется на интуитивном уровне с применением неформализованных методов, основанных на искусстве, практическом опыте, экспертных оценках и дорогостоящих эксперимен-тальных проверках качества функционирования системы. Эксплуатацион-ные расходы, возникающие после сдачи таких систем, могут существенно превышать расходы на их создание. Исследования показывают, что на об-наружение ошибок, допущенных на стадии проектирования, расходуется примерно в 2 раза больше времени, чем на исправление ошибок, допу-щенных на последующих фазах. При этом исправление ошибки на стадии проектирования стоит в 2 раза, на стадии тестирования – в 10 раз, а на стадии эксплуатации системы – в 100 раз дороже, чем на стадии анализа. Кроме того, ошибки анализа и проектирования обнаруживаются часто са-мими пользователями, что вызывает их недовольство и осложняет сопро-вождение ИС.</p>

            <p>Широко распространены современные информационные технологии ведения электронной коммерции, работа с заказчиками и поставщиками. И в этом направлении проектирование и развитие информационных систем невозможно без знания основных методологий и программных средств, позволяющих в кратчайшие сроки и без ошибок управлять этими процес-сами.</p>

            <p>Сегодня на рынке представлено множество решений информационных систем со своими особенностями и подходами к решению вопросов, с ко-торыми она должна справляться. Однако часто происходит, что ни одна из предложенных систем не способна полностью подстроиться под нужды предприятия. При этом выбор методологии проектирования является да-леко не простой задачей. В пособии приведены особенности популярных методов проектирования информационных систем.</p>
        </div>
    )
}

Introduction.propTypes = {

}