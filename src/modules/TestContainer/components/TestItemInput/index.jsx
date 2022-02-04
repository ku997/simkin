import React from 'react';
import { Input } from 'antd';
import { useFormContext, Controller } from "react-hook-form";
import './styles.scss'

export function TestItemInput({ data, index, ...props }) {
    const { control } = useFormContext();
    const { question } = data;
    return (
        <div className='testItemInput'>
            <div className='testItemInput__question'>
                <span>Вопрос {index + 1}: </span>
                {question}
            </div>
            <Controller
                control={control}
                name={`${index}`}
                rules={{ required: true, }}
                render={
                    ({ field: { onChange, value }, fieldState: { invalid } }) => (
                        <Input
                        className={`testItemInput__input ${invalid ? 'testItemInput__input--invalid' : ''}`}
                            allowClear
                            onChange={e => {
                                onChange(e)
                            }}
                            value={value}
                            isError={invalid}
                        >
                        </Input>
                    )
                }
            />

        </div>
    );
}