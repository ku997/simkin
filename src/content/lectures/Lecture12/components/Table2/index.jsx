import React from 'react'
import { Table } from 'antd'
import { Image } from '../../../../../modules/Image'


export function Table2(props) {
    const columns = [
        {
            title: 'Наименование',
            dataIndex: '1',
        },
        {
            title: 'Обозначение',
            dataIndex: '2',
            render: (text, r, index) => {
                if (typeof text === 'function') {
                    return text()
                }
                return text
            },
        },
        {
            title: 'Диаграмма',
            dataIndex: '3',
        },
    ]

    const data = [
        {
            1: 'Скрытое составное состояние',
            2: () => <Image src='assets/img/lab12/16.jpg' isModal={false} />,
            3: 'Диаграмма автоматов',
        },
        {
            1: 'Скрытый фрагмент взаимодействия',
            2: () => <Image src='assets/img/lab12/17.jpg' isModal={false} />,
            3: 'Диаграмма последовательности',
        },
        {
            1: 'Деятельность',
            2: () => <Image src='assets/img/lab12/18.jpg' isModal={false} />,
            3: 'Диаграмма деятельности',
        },
    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} bordered pagination={false} />
        </div>
    )
}