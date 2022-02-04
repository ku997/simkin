import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { useFormContext, Controller } from "react-hook-form";
import { NodeGroup } from '../NodeGroup';
import './styles.scss'

export function TestItemCheckBox({ data, index, ...props }) {
    const { control } = useFormContext();
    const { question, answers } = data;
    const [value, setValue] = useState(null);
    return (
        <div className='testItemCheckBox'>
            <div className='testItemCheckBox__question'>
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
                            Node={Checkbox}
                            onChange={e => {
                                setValue(e)
                                onChange(e)
                            }}
                            value={value}
                            isError={invalid}
                        >
                            {answers.map((answer, index) => <Checkbox key={index} value={answer.text}>{answer.text}</Checkbox>)}
                        </NodeGroup>
                    )
                }
            />

        </div>
    );
}