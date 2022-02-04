import React, { useState } from 'react';
import { Radio } from 'antd';
import { useFormContext, Controller } from "react-hook-form";
import { NodeGroup } from '../NodeGroup';
import './styles.scss'

export function TestItemRadio({ data, index, ...props }) {
    const { control } = useFormContext();
    const { question, answers } = data;
    const [value, setValue] = useState(null);
    return (
        <div className='testItemRadio'>
            <div className='testItemRadio__question'>
                <span>Вопрос {index + 1}: </span>
                {question}
            </div>
            <Controller
                value={value}
                control={control}
                name={`${index}`}
                rules={{ required: true, }}
                render={
                    ({ field: { onChange, value }, fieldState: { invalid } }) => (
                        <NodeGroup
                            Node={Radio}
                            onChange={e => {
                                console.log();
                                setValue(e.target.value)
                                onChange(e.target.value)
                            }}
                            value={value}
                            isError={invalid}
                        >
                            {answers.map((answer, index) => <Radio key={index} value={answer.text}>{answer.text}</Radio>)}
                        </NodeGroup>
                    )
                }
            />

        </div>
    );
}