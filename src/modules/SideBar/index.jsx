import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import 'antd/dist/antd.css';
import './styles.scss'
import { Menu, Layout } from 'antd'
import { Html5Outlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { menu } from './menu';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { setActiveItem, setSidebarState } from '../../actions/sidebar';

const mapStateToProps = (state) => {
    return {
        isCollapsed: state.sidebar.isCollapsed,
        activeItem: state.sidebar.activeItem,
        theme: state.theme,
    };
}
const mapDispathToProps = dispatch => ({ dispatch });

export const SideBar = connect(mapStateToProps, mapDispathToProps)(function SideBar({ dispatch, isCollapsed, theme, activeItem, ...props }) {
    const { Sider } = Layout;
    const { Item, SubMenu } = Menu;
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [openKeys, setOpenKeys] = useState(['chapter/']);
    useEffect(() => {
        setOpenKeys(isCollapsed ? void (0) : ['chapter/'])
    }, [isCollapsed])
    useEffect(() => {
        dispatch(setActiveItem(pathname))
    }, [pathname])
    return (
        <Sider className={`sideBar ${isCollapsed && 'sideBar--collapsed'}`} trigger={null} width={350} collapsible collapsed={isCollapsed}>
            <div className={`logo ${isCollapsed && 'logo--collapsed'} ant-layout-header`}>
                {<Html5Outlined />}{!isCollapsed && 'информсистемы'}
            </div>
            <Menu className="sideBar__menu" defaultOpenKeys={openKeys} openKeys={openKeys} selectedKeys={[activeItem || '1']} forceSubMenuRender={true} mode="inline" defaultSelectedKeys={['submenu0_0']}>
                {menu.map(({ item, submenu, icon, route }, index) => {
                    return (
                        <SubMenu
                            icon={icon}
                            key={route}
                            title={item}
                            style={{ whiteSpace: 'normal', height: 'auto', lineHeight: 'normal' }}
                            onTitleClick={() => {
                                dispatch(setSidebarState(!isCollapsed))
                            }}
                        >
                            {submenu.map(({ item, chapter, className }, ind) => {
                                return (
                                    <Item
                                        key={"/" + route + chapter}
                                        style={{ whiteSpace: 'normal', height: 'auto', lineHeight: 'normal' }}
                                        onClick={() => {
                                            navigate("/" + route + chapter)
                                        }}
                                        className={className}
                                    >
                                        <div>{item}</div>
                                    </Item>
                                )
                            })}
                        </SubMenu>
                    )
                })}
            </Menu>
        </Sider>
    )
})

SideBar.propTypes = {
    isCollapsed: PropTypes.bool,
}
