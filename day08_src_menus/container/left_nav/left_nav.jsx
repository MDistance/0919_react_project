import React, { Component } from 'react'
import { Menu, Icon} from 'antd';
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {createSaveTitleAction} from '../../redux/actions/header'
import menus from '../../config/menu-config'
import logo from '../../static/imgs/logo.png'
import { withTranslation, getI18n } from 'react-i18next'
import './left_nav.less'
const {SubMenu,Item} = Menu;

@connect(
	(state)=>({
		title:state.headerTitle,
		menus:state.userInfo.user.role.menus,
		name:state.userInfo.user.username
	}),//映射状态
	{saveTitle:createSaveTitleAction}//映射操作状态的方法
)
@withRouter //非路由组件，想用路由组件的API，要经过withRouter的包装
@withTranslation()
class left_nav extends Component {
	getTitle = ()=>{
		//console.log('没办法了，redux中没有title了，只能根据路径靠getTitle计算');
		let title = ''
		let {pathname} = this.props.location
		if(pathname === '/admin') pathname = '/admin/home'
		if(pathname.indexOf('/product')) pathname = '/admin/product'
		let currentKey = pathname.split('/').reverse()[0]
		menus.forEach((menuObj)=>{
			if(menuObj.children instanceof Array){
				//如果前菜单有孩子
				let result = menuObj.children.find((childMenu)=>{
					return childMenu.key === currentKey
				})
				if(result) title = result.title
			}else{
				//如果当前菜单没孩子
				if(menuObj.key === currentKey) title = menuObj.title
			}
		})
		this.props.saveTitle(title)
	}

	componentDidMount(){
		console.log(this.props.menus);
		//如果redux中没有title（可能是：1.初次登录。2.刷新页面）
		if(!this.props.title){
			this.getTitle()
		}
		setTimeout(()=>{
			this.props.i18n.changeLanguage('en')
		},2000)
	}

	//接收一个菜单对象，能够判断出这个菜单对象是否可以给当前用户看，返回一个布尔值
	hasAuth = (menuObj) => {
		const {menus} = this.props //应该看到的菜单的key组成的数组
		if(this.props.name === 'admin') return true
		if(!menuObj.children){
				return menus.find((item)=> item === menuObj.key)
		}else{
				return menuObj.children.some((item2)=> menus.indexOf(item2.key) !== -1)
		}
	}


	//创建菜单
	createMenu = (menuArr)=>{
		return menuArr.map((menuObj)=>{
			if(this.hasAuth(menuObj)){
				if(!menuObj.children){
					return (
						<Item key={menuObj.key} onClick={()=>{this.props.saveTitle(menuObj.title)}}>
							<Link to={menuObj.path}>
								<Icon type={menuObj.icon}/>
								<span>{this.props.t('menus.'+menuObj.key)}</span>
							</Link>
						</Item>
					)
				}else{
					return (
						<SubMenu
							key={menuObj.key}
							title={
								<span>
									<Icon type={menuObj.icon} />
									<span>{this.props.t('menus.'+menuObj.key)}</span>
								</span>
							}
						>
							{this.createMenu(menuObj.children)}
						</SubMenu>
					)
				}
			}
		})
	}

	render() {
		const {pathname} = this.props.location
		let openKey = pathname.split('/') //数组
		let selectedKey = pathname.split('/').reverse()[0] //字符串
		//如果路径中发现了/product，那么直接选中商品管理菜单
		if(pathname.indexOf('/product') !== -1) selectedKey = 'product'
		return (
			<div className="left-nav">
				<div className="nav-top" name="lis">
					<img src={logo} alt="logo"/>
					<h1>商品管理系统</h1>
				</div>
				<div>
					<Menu
						selectedKeys={[selectedKey]} //默认选中哪个菜单
						defaultOpenKeys={openKey} //默认展开哪个菜单(该菜单有子菜单)
						mode="inline" //菜单范围内展开
						theme="dark" //主题
					>
						{this.createMenu(menus)}
					</Menu>
				</div>
			</div>
		)
	}
}

export default left_nav
