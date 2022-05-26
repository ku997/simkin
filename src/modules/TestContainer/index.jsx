import React, { useState } from 'react';
import { TestItemRadio } from './components/TestItemRadio';
import { useForm, FormProvider } from "react-hook-form";
import { Button, Modal } from 'antd';
import { CHECKBOX_TYPE, INPUT_TYPE, RADIO_TYPE } from './constants';
import { TestItemCheckBox } from './components/TestItemCheckBox';
import { TestItemInput } from './components/TestItemInput';
import { useNavigate } from "react-router-dom";

export function TestContainer({ data, ...props }) {
    const navigate = useNavigate();
    const methods = useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [result, setResult] = useState(0);
    const onSubmit = (result) => {
        let currency = 0;
        data.map((item, index) => {
            if (item.type === RADIO_TYPE && item.answer && item.answer === result[index]) currency++
            if (item.type === CHECKBOX_TYPE && Array.isArray(item.answer) && result[index].filter(f => !item.answer.includes(f)).length < 1) currency++
            if (item.type === INPUT_TYPE && result[index].toLowerCase().replace(/\s/gi, '') === item.answer.toLowerCase().replace(/\s/gi, '')) currency++
        })
        methods.reset()
        setIsModalVisible(true)
        setResult((currency / data.length * 100).toFixed())
    };
    return (
        <>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {data.map((item, index) => {
                        if (item.type === RADIO_TYPE) return <TestItemRadio key={index} index={index} data={item} />
                        if (item.type === CHECKBOX_TYPE) return <TestItemCheckBox key={index} index={index} data={item} />
                        if (item.type === INPUT_TYPE) return <TestItemInput key={index} index={index} data={item} />
                    })}
                    <Button type="primary" htmlType='submit'>Закончить тест</Button>
                </form>
            </FormProvider>
            <Modal title="Результаты тестирования:" visible={isModalVisible} footer={false} onCancel={()=>setIsModalVisible(false)}>
            <p>Вы ответили верно на {result}% вопросов</p>
            {result && result <=75 && <>
                <p>Для прохождения теста результат должен быть более 75%</p>
                <Button type="primary" onClick={()=>navigate('/')}>Вернуться к теории</Button>
            </>}
            </Modal>
        </>


    )
}