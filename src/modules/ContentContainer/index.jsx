import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CustomLayout } from '../CustomLayout'
import { useParams, useLocation } from 'react-router-dom';
import { content } from './lectures';
import { Empty } from 'antd';
export function ContentContainer({ contentType, ...props }) {
    const { id } = useParams();
    const { hash } = useLocation();

    useEffect(() => {
        const el = hash && document.getElementById(hash.substr(1))
        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
        } else {
            window.scrollTo(0, 0)
        }
    }, [hash])

    return (
        <CustomLayout>
            {content[contentType][id] || <Empty />}
        </CustomLayout>
    )
}

ContentContainer.propTypes = {

}