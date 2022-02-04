import React from 'react';
import PropTypes from 'prop-types';
import { TestContainer } from '../../../modules/TestContainer';
import { CHECKBOX_TYPE, INPUT_TYPE, RADIO_TYPE } from '../../../modules/TestContainer/constants';

export function Test1({ color, ...props }) {
    const data = [
        {
            type: RADIO_TYPE,
            question: 'question',
            answers: [
                {
                    text: 'answer 1',
                },
                {
                    text: 'answer 2',
                },
                {
                    text: 'answer 3',
                },
                {
                    text: 'answer 4',
                },
            ], 
            answer: 'answer 1',
        },
        {
            type: INPUT_TYPE,
            question: 'question',
            answer: 'answer 1',
        },
        {
            type: CHECKBOX_TYPE,
            question: 'question',
            answers: [
                {
                    text: 'answer 1',
                },
                {
                    text: 'answer 2',
                },
                {
                    text: 'answer 3',
                },
                {
                    text: 'answer 4',
                },
            ],
            answer: ['answer 1'],
        }
    ]
    return <TestContainer data={data} />
}

Test1.propTypes = {};
