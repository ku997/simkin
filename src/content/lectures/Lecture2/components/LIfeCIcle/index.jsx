import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { throttle } from 'lodash'
export function LifeCicle(props) {
    const [active, setActive] = useState(false)
    const currentElement = useRef(null);
    const onScroll = throttle(() => {
        if (!currentElement.current) {
            setActive(false);
            return;
        }
        const top = currentElement.current.getBoundingClientRect().top;
        top + 100 >= 0 && top + 100 <= window.innerHeight && setActive(true);
    }, 100);

    useEffect(() => {
        document.addEventListener('scroll', onScroll, true);
        if (active) document.removeEventListener('scroll', onScroll, true);
        return () => document.removeEventListener('scroll', onScroll, true);
    }, [active]);
    const columns = [
        [
            {
                isActive: active,
                title: 'Процессы предприятия',
                columns: [
                    { text: 'Управление средой предприятия' },
                    { text: 'Управление инвестициями' },
                    { text: 'Управление процессами жизненного цикла' },
                    { text: 'Управление ресурсами' },
                    { text: 'Управление качеством' }
                ]
            },
            {
                isActive: active,
                title: 'Процессы соглашения',
                columns: [
                    { text: 'Приобретение' },
                    { text: 'Поставка' },
                ]
            }
        ],
        [
            {
                isActive: active,
                title: 'Процессы проекта',
                columns: [
                    { text: 'Планирование проекта' },
                    { text: 'Оценка проекта' },
                    { text: 'Контроль проекта' },
                    { text: 'Принятие решений' },
                    { text: 'Управление рисками' },
                    { text: 'Управление конфигурацией' },
                    { text: 'Управление информацией' },
                ]
            },
        ],
        [
            {
                isActive: active,
                title: 'Технические процесы',
                columns: [
                    { text: 'Определение требований проавообладателей' },
                    { text: 'Анализ требований' },
                    { text: 'Проектирование архитектуры' },
                    { text: 'Реализация' },
                    { text: 'Комплексирование' },
                    { text: 'Верификация' },
                    { text: 'Передача' },
                    { text: 'Валидация' },
                    { text: 'Функциорнирование' },
                    { text: 'Обслуживание' },
                    { text: 'Изъятие и списание' },
                ]
            },
        ],
    ]
    return (
        <div className='lifeCicle' ref={currentElement}>
            {active && <div className="lifeCicle__columns">
                {columns.map((item, index) => {
                    return (
                        <div key={index} className="lifeCicle__column">
                            {item.map((item, index) => {
                                return (
                                    <div key={index} className={`column__item ${active ? 'active' : ''}`}>
                                        <p className="column__item-title">{item.title}</p>
                                        <div className="column__item-cards">
                                            {item.columns.map((column, index) => {
                                                return (
                                                    <div key={index} className="column__item-card">
                                                        <span className="column__item-card-text">{column.text}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

LifeCicle.propTypes = {

}