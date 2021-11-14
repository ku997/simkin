import React, { useEffect } from 'react'
// import 'antd/dist/antd.css';
import './styles.scss'
import '../../theme/index.scss'

// import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { SideBar } from '../SideBar';
import { connect } from 'react-redux';
import { Header } from '../Header';
import { THEME_LIGHT } from '../../constants';
const mapStateToProps = ({ theme }) => ({ theme })

export const CustomLayout = connect(mapStateToProps)(function CustomLayout({ children, dispatch, isCollapsed, theme, ...props }) {
    const { Content } = Layout;
    useEffect(() => {
        if (theme === THEME_LIGHT) {
          document.body.classList.remove('dark_theme');
          document.body.classList.add('light_theme');
        } else {
          document.body.classList.remove('light_theme');
          document.body.classList.add('dark_theme');
        }
      }, [theme])
    return (
        <Layout className='customLayout light_theme'>
            <SideBar />
            <Layout className="site-layout">
                <Header />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    )
})

// CustomLayout.propTypes = {

// }
