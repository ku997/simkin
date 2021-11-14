import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import {
    Layout,
    Switch
} from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setSidebarState } from '../../actions/sidebar';
import { setTheme } from '../../actions/theme';
import { THEME_DARK, THEME_LIGHT } from '../../constants';

const mapStateToProps = (state) => {
    return {
        isCollapsed: state.sidebar.isCollapsed,
        theme: state.theme,
    };
}
const mapDispathToProps = dispatch => ({ dispatch });

export const Header = connect(mapStateToProps, mapDispathToProps)(function Header({ dispatch, theme, isCollapsed, ...props }) {
    return (
        <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => dispatch(setSidebarState(!isCollapsed)),
            })}
            <Switch
                checked={theme === THEME_DARK}
                onChange={(checked) => { dispatch(setTheme(checked ? THEME_DARK : THEME_LIGHT)) }}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
        </Layout.Header>
    )
})

Header.propTypes = {
    theme: PropTypes.bool,
    isCollapsed: PropTypes.bool,
}