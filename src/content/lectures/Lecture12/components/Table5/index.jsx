import React from 'react'
import { Table } from 'antd'


export function Table5(props) {
    const columns = [
        {
            title: 'Диаграмма',
            rowSpan: 2,
            children: [
                {
                    key: '1.1',
                    dataIndex: '1.1',
                    rowSpan: 0,
                    render: (text, r, index) => {

                        const obj = {
                            children: text,
                            props: {},
                        };
                        if (index < 3) {
                            obj.props.colSpan = 3
                        }
                        if (index === 3) {
                            obj.props.rowSpan = 4
                        }
                        if (index > 3) {
                            obj.props.rowSpan = 0
                        }
                        if (index === 7) {
                            obj.props.rowSpan = 2
                        }
                        if (index > 7) {
                            obj.props.rowSpan = 0
                        }
                        return obj;

                    },
                },
                {
                    key: '1.2',
                    dataIndex: '1.2',
                    rowSpan: 0,
                    render: (text, r, index) => {

                        const obj = {
                            children: text,
                            props: {},
                        };
                        if (index < 3) {
                            obj.props.colSpan = 0
                        }
                        if (index === 3 || index === 4 || index === 7 || index === 8) {
                            obj.props.colSpan = 2
                        }
                        if (index === 5) {
                            obj.props.rowSpan = 2
                        }
                        if (index === 6) {
                            obj.props.rowSpan = 0
                        }
                        return obj;

                    },
                },
                {
                    key: '1.3',
                    dataIndex: '1.3',
                    rowSpan: 0,
                    render: (text, r, index) => {

                        const obj = {
                            children: text,
                            props: {},
                        };
                        if (index < 3) {
                            obj.props.colSpan = 0
                        }
                        if (index === 3 || index === 4 || index > 6) {
                            obj.props.colSpan = 0
                        }

                        return obj;

                    },
                },
            ],
        },
        {
            title: 'Назначение',
            dataIndex: '2',
        },
        {
            title: 'Тип диаграммы (модели ИС)',
            dataIndex: '3',
            colspan: 3,
            children: [
                {
                    title: 'По учету специфики средств итоговой реализации моделируемой сущности',
                    key: '3.1',
                    dataIndex: '3.1',
                    render: (text, r, index) => {

                        const obj = {
                            children: text,
                            props: {},
                        };
                        if (index === 3) {
                            obj.props.rowSpan = 4
                        }
                        if ((index > 3 && index < 7) || (index > 7)) {
                            obj.props.rowSpan = 0
                        }
                        if (index === 7) {
                            obj.props.rowSpan = 2
                        }
                        return obj;

                    },
                },
                {
                    title: 'По учету фактора времени',
                    key: '3.2',
                    dataIndex: '3.2',
                    render: (text, r, index) => {

                        const obj = {
                            children: text,
                            props: {},
                        };
                        if (index === 3) {
                            obj.props.rowSpan = 4
                        }
                        if ((index > 3 && index < 7) || (index > 7)) {
                            obj.props.rowSpan = 0
                        }
                        if (index === 7) {
                            obj.props.rowSpan = 2
                        }
                        return obj;

                    },
                },
                {
                    title: 'По семантике (сущности) содержания',
                    key: '3.3',
                    dataIndex: '3.3',
                    render: (text, r, index) => {

                        const obj = {
                            children: text,
                            props: {},
                        };
                        if (index === 3) {
                            obj.props.rowSpan = 4
                        }
                        if ((index > 3 && index < 7) || (index > 7)) {
                            obj.props.rowSpan = 0
                        }
                        if (index === 7) {
                            obj.props.rowSpan = 2
                        }

                        return obj;

                    },
                },
            ]
        },
    ]

    const data = [
        {
            1.1: 'Вариантов использования (use case)',
            2: 'Отображает функции системы, взаимодействие между актерами и функциями',
            3.1: 'Логическая',
            3.2: 'Статическая',
            3.3: 'Функциональная',
        },
        {
            1.1: 'Классов (class)',
            2: 'Отображает набор классов, интерфейсов и отношений между ними',
            3.1: 'Логическая или физическая',
            3.2: 'Статическая',
            3.3: 'Функционально-информационная',
        },
        {
            1.1: 'Пакетов (package)',
            2: 'Отображает набор пакетов и отношений между ними',
            3.1: 'Логическая или физическая',
            3.2: 'Статическая',
            3.3: 'Компо-нентная',
        },
        {
            1.1: 'Поведения (behavior)',
            1.2: 'Автоматов (state machine)',
            2: 'Отображает состояния сущности и переходы между ними в процессе ее жизненного цикла',
            3.1: 'Логическая',
            3.2: 'Динамическая',
            3.3: 'Поведенческая',
        },
        {
            1.2: 'Деятельности (activity)',
            2: 'Отображает бизнес-процессы в системе (описание алгоритмов поведения)',
        },
        {
            1.2: 'Взаимодействия (interaction)',
            1.3: 'Последовательности (sequence)',
            2: 'Отображает последовательность передачи сообщений между объектами и актерами',
        },
        {
            1.3: 'Коммуникации (communication)',
            2: 'Аналогична диаграмме последовательности, но основной акцент делается на структуру взаимодействия между объектами',
        },
        {
            1.1: 'Реализации (implementation)',
            1.2: 'Компонентов (component)',
            2: 'Отображает компоненты системы (программы, библиотеки, таблицы и т.д.) и связи между ними',
            3.1: 'Физическая',
            3.2: 'Статическая',
            3.3: 'Компонентная',
        },
        {
            1.2: 'Развертывания (deployment)',
            2: 'Отображает размещение компонентов по узлам сети, а также ее конфигурацию',
        },
    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} bordered pagination={false} />
        </div>
    )
}