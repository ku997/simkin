import React from 'react'
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function NotFoundPage(props) {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="Такой страницы не существует!"
            extra={<Button type="primary" onClick={() => navigate('/')}>На главную</Button>}
        />
    )
}

NotFoundPage.propTypes = {

}

export default NotFoundPage

