import React from 'react'
import PropTypes from 'prop-types'
// import 'antd/dist/antd.css';
import './styles.scss'
import { Menu,  Layout } from 'antd'
import { Html5Outlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { menu } from './menu';
import { useNavigate } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        isCollapsed: state.sidebar.isCollapsed,
        theme: state.theme,
    };
}

export const SideBar = connect(mapStateToProps)(function SideBar({ isCollapsed, theme, ...props }) {
    const { Sider } = Layout;
    const { Item, SubMenu } = Menu;
    const navigate = useNavigate();
    return (
        <Sider trigger={null} width={350} collapsible collapsed={isCollapsed}>
            <div className={`logo ${isCollapsed && 'logo--collapsed'}`}>
                {<Html5Outlined />}{!isCollapsed && 'simaga_1.0'}
            </div>
            <Menu defaultOpenKeys={['0']} forceSubMenuRender={true}  mode="inline" defaultSelectedKeys={['submenu0_0']}>
                {menu.map(({ item, submenu, icon }, index) => {
                    return (
                        <SubMenu
                            icon={icon}
                            key={index}
                            title={item}
                            style={{ whiteSpace: 'normal', height: 'auto', lineHeight: 'normal' }}
                            onTitleClick={() => {
                                navigate('/#')
                            }}
                        >
                            {submenu.map(({ item }, ind) => {
                                return (
                                    <Item
                                        key={`submenu${index}_${ind}`}
                                        style={{ whiteSpace: 'normal', height: 'auto', lineHeight: 'normal' }}
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
