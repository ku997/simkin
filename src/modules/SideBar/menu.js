import { ReadOutlined, ExperimentOutlined } from '@ant-design/icons';
import { LABWORKS_CONTENT, LECTURE_CONTENT } from '../../constants';

export const menu = [
  {
    item: "Содержание",
    icon: <ReadOutlined />,
    route: `${LECTURE_CONTENT}/`,
    submenu: [
      {
        item: "ВВЕДЕНИЕ",
        chapter: '0',
      },
      {
        item: "1.	ОСНОВНЫЕ ПОНЯТИЯ ТЕХНОЛОГИИ ПРОЕКТИРОВАНИЯ ИНФОРМАЦИОННЫХ СИСТЕМ",
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
        item: '1.2.1. Модели жизненного цикла информационной системы',
        chapter: '1.2.1',
        className: 'subItem'
      },
      {
        item: '1.3.	Управление процессами жизненного цикла ИС',
        chapter: '1.3',
        className: 'subItem'
      },
      {
        item: '1.3.1.	Каскадная (классическая, водопадная) модель жизненного цикла информационной системы',
        chapter: '1.3.1',
        className: 'subItem'
      },
      {
        item: '1.3.2. Итерационная модель жизненного цикла информационной системы',
        chapter: '1.3.2',
        className: 'subItem'
      },
      {
        item: '1.3.3. Спиральная модель жизненного цикла информационной системы',
        chapter: '1.3.3',
        className: 'subItem'
      },
      {
        item: '1.4.1. Методология функционального моделирования работ SADT',
        chapter: '1.4.1',
        className: 'subItem'
      },
      {
        item: '1.4.2. Методология RAD – быстрой разработки приложений',
        chapter: '1.4.2',
        className: 'subItem'
      },
      {
        item: '1.4.3. Методология RUP',
        chapter: '1.4.3',
        className: 'subItem'
      },
      {
        item: '1.4.4. Гибкая методология разработки (Agile)',
        chapter: '1.4.4',
        className: 'subItem'
      },
      {
        item: '2.	ПРОЕКТИРОВАНИЕ ИНФОРМАЦИОННЫХ СИСТЕМ',
        chapter: '2',

      },
      {
        item: '2.1. Каноническое проектирование информационных систем',
        chapter: '2.1',
        className: 'subItem'
      },
      {
        item: '2.2. Стадии и этапы процесса канонического проектирования информационных систем',
        chapter: '2.2',
        className: 'subItem'
      },
      {
        item: '2.3. Типовое проектирование информационных систем',
        chapter: '2.3',
        className: 'subItem'
      },
      {
        item: '3. АРХИТЕКТУРА ИНФОРМАЦИОННЫХ СИСТЕМ',
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
        item: '3.3. Архитектурный подход к проектированию информационных систем',
        chapter: '3.3',
        className: 'subItem'
      },
      {
        item: '4. СЕМАНТИЧЕСКИЕ МОДЕЛИ ИНФОРМАЦИОННЫХ СИСТЕМ',
        chapter: '4',
      },
      {
        item: '4.1. Методологическая основа реализации модели «Сущность–связь»',
        chapter: '4.1',
        className: 'subItem'
      },
      {
        item: '4.2. Пример построения концептуальной схемы',
        chapter: '4.2',
        className: 'subItem'
      },
      {
        item: '4.3. Основы унифицированного языка моделирования UML',
        chapter: '4.3',
        className: 'subItem'
      },
      {
        item: '4.3.1. Семантика и синтаксис UML',
        chapter: '4.3.1',
        className: 'subItem'
      },
      {
        item: '4.3.2. Нотация UML',
        chapter: '4.3.2',
        className: 'subItem'
      },
      {
        item: 'ЗАКЛЮЧЕНИЕ',
        chapter: 'end',
      },
    ],
  },
  {
    item: "Тестирование",
    icon: <ExperimentOutlined />,
    route: `${LABWORKS_CONTENT}/`,
    submenu: [
      {
        item: "Tест к главе 1 и главе 2",
        chapter: '1',
      },
      {
        item: "Tест к главе 3 и главе 4",
        chapter: '2',
      },
    ]
  }
];
