import React, { useEffect } from 'react'
import 'antd/dist/antd.min.css';
import './styles.scss'
import { Layout,BackTop } from 'antd'
import { SideBar } from '../SideBar';
import { connect } from 'react-redux';
import { Header } from '../Header';
import { THEME_LIGHT } from '../../constants';
const mapStateToProps = ({ theme }) => ({ theme })

export const CustomLayout = connect(mapStateToProps)(function CustomLayout({ children, dispatch, isCollapsed, theme, isShowSideBar=true, ...props }) {
    const { Content } = Layout;
    useEffect(() => {
        if (theme === THEME_LIGHT) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
    }, [theme])
    return (
        <Layout className='customLayout light_theme'>
           {isShowSideBar && <SideBar />}
            <Layout className="content-layout">
                <Header />
                <Content className='customLayout__content'>{children}</Content>
                <BackTop />
            </Layout>
        </Layout>
    )
})