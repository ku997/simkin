import { ReadOutlined } from '@ant-design/icons';

export const menu = [
  {
    item: "Содержание",
    icon: <ReadOutlined />,
    route: 'chapter/',
    submenu: [
      {
        item: "Введение",
        chapter: '0',
      },
      {
        item: "1. Основные понятия техногии проектирования информационных систем",
        chapter: '1',
      },
      {
        item: "1.1. Основные понятия и определения",
        chapter: '1.1',
        className: 'subItem'
      },
      {
        item: "1.2. Процессы и модели жизненного цикла информационных систем",
        chapter: '1.2',
        className: 'subItem'
      },
      {
        item: '1.3. Основные методологии современного проектирования ин-формационных систем',
        chapter: '1.3',
        className: 'subItem'
      },
      {
        item: '2. Организация проектирования информационных систем',
        chapter: '2',
      },
      {
        item: '2.1. Каноническое проектирование информационных систем',
        chapter: '2.1',
        className: 'subItem'
      },
      {
        item: '2.2. Стадии и этапы процесса канонического проектирования ИС',
        chapter: '2.2',
        className: 'subItem'
      },
      {
        item: '2.3. Типовое проектирование ИС, типовое проектное решение (ТПР)',
        chapter: '2.3',
        className: 'subItem'
      },
      {
        item: '3. Архитектура информационных систем',
        chapter: '3',
      },
      {
        item: '3.1. Понятие архитектуры информационных систем',
        chapter: '3.1',
        className: 'subItem'
      },
      {
        item: '3.2. Типы архитектур',
        chapter: '3.2',
        className: 'subItem'
      },
      {
        item: '3.3. Архитектурный подход к проектированию ИС',
        chapter: '3.3',
        className: 'subItem'
      },
      {
        item: '3.4. Платформенные архитектуры информационных систем',
        chapter: '3.4',
        className: 'subItem'
      },
      {
        item: '4. Семантические модели информационных систем',
        chapter: '4',
      },
      {
        item: '4.1. Методологическая основа реализации модели «сущность-связь»',
        chapter: '4.1',
        className: 'subItem'
      },
      {
        item: '4.2. Основы унифицированного языка моделирования UML',
        chapter: '4.2',
        className: 'subItem'
      },
    ],
  }
];
