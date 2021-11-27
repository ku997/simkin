import React from 'react'
import { Table } from 'antd'
import { Image } from '../../../../../modules/Image'


export function Table6(props) {
    const columns = [
        {
            title: 'Модель',
            dataIndex: '1',
        },
        {
            title: 'Диаграмма',
            children: [
                {
                    key: '2',
                    dataIndex: '2',
                    title: 'Вариантов использования',
                },
                {
                    key: '2',
                    dataIndex: '2',
                    title: 'Автоматов',
                },
                {
                    key: '3',
                    dataIndex: '3',
                    title: 'Классов',
                },
                {
                    key: '4',
                    dataIndex: '4',
                    title: 'Пакетов',
                },
                {
                    key: '5',
                    dataIndex: '5',
                    title: 'Последовательности',
                },
                {
                    key: '6',
                    dataIndex: '6',
                    title: 'Коммуникации',
                },
                {
                    key: '7',
                    dataIndex: '7',
                    title: 'Деятельности',
                },
                {
                    key: '8',
                    dataIndex: '8',
                    title: 'Компонентов',
                },
                {
                    key: '9',
                    dataIndex: '9',
                    title: 'Развертывания',
                },
            ]
        },

    ]

    const data = [
        {
            1: 'Вариантов использования',
            2: '+',
            3: '+',
            4: '+',
            5: '+',
            6: '+',
            7: '+',
            8: '',
            9: '',
            10: '',
        },
        {
            1: 'Анализа',
            2: '+',
            3: '+',
            4: '+',
            5: '+',
            6: '+',
            7: '+',
        },
        {
            1: 'Проектирования',
            3: '+',
            4: '+',
            5: '+',
            6: '+',
            7: '+',
            8: '+',
        },
        {
            1: 'Реализации',
            4: '+',
            5: '+',
            9: '+',
            10: '+',
        },
    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} bordered pagination={false} />
        </div>
    )
}