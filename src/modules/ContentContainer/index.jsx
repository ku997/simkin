import React, { useEffect, useState } from 'react'
import { CustomLayout } from '../CustomLayout'
import { useParams, useNavigate } from 'react-router-dom';
import { content } from './lectures';
import { Button, Empty } from 'antd';
import  "./styles.scss";
export function ContentContainer({ contentType, ...props }) {
    const { id } = useParams();
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    useEffect(() => {
        setCurrentIndex(content.findIndex(el => +el.id === +id))
    }, [id])
    const component = content.find(el => +el.id === +id).component;

    return (
        <CustomLayout>
            {
                component ?
                    <>
                        {component}
                        <div className="buttons">
                            <Button disabled={!currentIndex} onClick={() => {
                                navigate(`/chapter/${content[currentIndex - 1].id}`)
                            }}>
                                Предыдущая глава
                            </Button>
                            <Button disabled={content.length - 1 === currentIndex} onClick={() => {
                                navigate(`/chapter/${content[currentIndex + 1].id}`)
                            }}>
                                Следующая глава
                            </Button>
                        </div>
                    </>
                    :
                    <Empty />}
        </CustomLayout>
    )
}