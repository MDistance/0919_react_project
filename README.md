### day01任务:
		1.创建脚手架
		2.引入antd，且按需引入样式、自定义主题
		3.引入路由
		4.编写login静态页面(涉及到编写less文件)
		5.声明式验证用户名
		6.自定义验证密码
### day02任务:
		redux的使用，请移步到redux仓库学习
### day03任务:
		1.使用axios请求拦截器处理post请求json编码参数问题
		2.使用axios响应拦截器统一处理错误
		3.使用NProgress实现请求进度条效果
		4.使用redux保存已经登录的用户信息
		5.Login组件、Admin组件与redux交互
		6.完成登录功能，加Login与Admin的权限控制

### day04任务
		1.装饰器语法：
				第一步：安装：@babel/plugin-proposal-decorators
				第二步：更改：config-overrides.js文件，添加一个addDecoratorsLegacy
				第三步：更改编译器设置，首选项-->设置---->搜索“decorators”,将中间选项的钩，勾选。
		2.自定义一个高阶组件：check组件，用于检查组件的权限（登录与非登录）
		3.admin页面整体布局，使用antd的Layout组件
		4.头部header组件静态
		5.使用screenfull库全屏切换
		6.使用dayjs处理时间
		7.使用jsonp库请求百度天气数据

### day05任务
		1.左侧导航菜单--静态结构分析
		2.左侧导航菜单--动态生成（知识点：递归遍历）
		3.左侧菜单默认选中、展开(靠路径去决定菜单展开与选中)
		4.头部展示左侧点击标题名字--redux中保存标题
		5.处理刷新页面标题丢失的问题--获取路径和菜单配置文件对比，计算菜单中文名字
		6.处理登录后不默认选中“首页”的问题---使用selectedKeys代替defaultSelectedKeys
		7.商品分类---静态
		8.商品分类---初始化数据（使用了异步action获取数据，也是难点）

### day06任务
		1.商品分类--新增商品分类
		2.商品分类--修改商品分类（注意模态框的复用）
		3.前台(假)分页、后台(真)分页的概念（重要！！）
		4.商品管理--初始化商品列表（注意antd的Table组件columns配置中render方法的使用）
		5.商品管理--搜索商品（注意复用发送请求的方法）
		6.商品管理--分页器的使用
		7.商品管理--商品下架、上架
		8.搭建商品新增、修改、详情的路由（注意路由的严格匹配）
		9.antd上传组件的使用，注意重要配置：action(上传地址)、method(上传方式)、name(参数名字)

### day07任务
		1.添加商品---使用了Upload组件、富文本组件
		2.商品修改---复用了add_update组件
			（1）.如何识别新增还是修改？
			（2）.如何回显照片墙组件的图片 和 富文本组件的内容
		3.商品详情页面(简单)----建议30分钟搞定
		4.初始化角色列表(简单)
		5.新增角色
		6.给角色授权，使用了antd的Tree组件
		7.初始化用户列表(简单)
		8.新增用户（注意要生成角色选择框）
		
		
		

		
		