import React, { useEffect, useState } from 'react'
import { CustomLayout } from '../CustomLayout'
import { useParams, useNavigate } from 'react-router-dom';
import { content } from './lectures';
import { Button, Empty } from 'antd';
import  "./styles.scss";
import { LECTURE_CONTENT } from '../../constants';

export function ContentContainer({ contentType, ...props }) {
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const component = content[contentType][id];
    const contentKeysArray = Object.keys(content[contentType]);
    return (
        <CustomLayout>
            {
                component ?
                    <>
                        {component}
                        {/* {contentType === LECTURE_CONTENT && <div className="buttons">
                            <Button disabled={id === contentKeysArray[0]} onClick={() => {
                                navigate(`/${contentType}/${contentKeysArray[contentKeysArray.findIndex(e=>e===id)-1]}`)
                            }}>
                                Предыдущая глава
                            </Button>
                            <Button disabled={id === contentKeysArray[contentKeysArray.length-1]} onClick={() => {
                                let r = contentKeysArray.find(e=>e===id)
                                debugger
                                navigate(`/${contentType}/${contentKeysArray[contentKeysArray.findIndex(e=>e===id)+1]}`)
                            }}>
                                Следующая глава
                            </Button>
                        </div>} */}
                    </>
                    :
                    <Empty />}
        </CustomLayout>
    )
}