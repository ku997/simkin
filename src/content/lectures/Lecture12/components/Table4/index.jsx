import React from 'react'
import { Table } from 'antd'
import { Image } from '../../../../../modules/Image'


export function Table4(props) {
    const columns = [
        {
            title: 'Наименование',
            dataIndex: '1',
        },
        {
            title: 'Обозначение',
            dataIndex: '2',
        },
        {
            title: 'Диаграмма',
            dataIndex: '3',
        },
    ]

    const data = [
        {
            1: 'Стереотип (stereotype)',
            2: '« »',
            3: 'Обозначение, уточняющее семантику элемента нотации (например: зависимость со стереотипом «include» рассматривается, как отношение включения, а класс со стереотипом «boundary» – граничный класс)',
        },
        {
            1: 'Сторожевое условие (guard condition)',
            2: '[ ]',
            3: 'Логическое условие (например: [A > B] или [идентификация выполнена])',
        },
        {
            1: 'Ограничение (constraint)',
            2: '{ }',
            3: 'Правило, ограничивающее семантику элемента модели (например, {время выполнения менее 10 мс})',
        },
        {
            1: 'Помеченное значение (tagged value)',
            2: '{ }',
            3: 'Новое или уточняющее свойство элемента нотации (например: {version = 3.2})',
        },
    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} bordered pagination={false} />
        </div>
    )
}