import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CustomLayout } from '../CustomLayout'
import { useParams } from 'react-router-dom';
import { content } from './lectures';
import { Empty } from 'antd';
export function ContentContainer({ contentType, ...props }) {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    return (
        <CustomLayout>
            {content[contentType][id] || <Empty />}
        </CustomLayout>
    )
}

ContentContainer.propTypes = {

}