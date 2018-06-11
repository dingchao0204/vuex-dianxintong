# 电信通项目总结
1. 这是电信通集团长城宽带项目，其内容为包含业务管理、人员管理、账务管理、资产统计等一系列为一体的后台管理系统，整个项目使用VUE官方框架以及VUEX来做数据管理，用vue-router及element-ui来实现页面的渲染

2. 基于官方vue-cli脚手架，并在此基础上对脚手架进行了自定义配置，例：
 
 * 自定义创建http用于axios请求数据
 * ...

3. 路由搭建：
(1):此为主路由及子路由搭建

{

    routes:[
        path:'/Home',
        name:'Home',
        component:Home,
        children:[
            {
                name:'tree',
                path:'tree',
                component:Tree,
                children:[
                    {
                    name:'childTree',
                    path:'/tree/:id',
                    component:ChildTree
                    }
                ]
            }
        ]
    ]

}

(2):此为防止登陆页闭环，设置路由守卫(全局路由钩子)

```
    router.beforeEach((to,from,next)=>{
  if(to.name === 'Login'){
    next()
  }else{
    let islogin = sessionStorage.getItem('islogin')
    if(islogin){
      next()
    }else{
      next('/')
    }
  }
})

```

4. 代表性功能模块

input框点击出现可检索表格
```
    <el-popover
        placement="bottom"
        width="600"
        trigger="click"
        @after-enter="toFetchGroup">
        <el-container
            direction="vertical"
            v-loading="flag"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)">
            <el-form>
                <el-row>
                    <el-col :span="12" v-model="filterItem">
                        <el-input size="small" v-model="abc"></el-input>
                                </el-col>
                                <el-col :span="12">
                                    <el-button size="small"                                               @click="filterItem=abc">
                                        查询
                                    </el-button>
                                </el-col>
                            </el-row>
                            
                        </el-form>
                        <el-table :data="filterGroup()(filterItem)" height="300" @row-click="rowClick">
                            <el-table-column width="150" type="index" label="序号"></el-table-column>
                            <el-table-column width="150" property="ORGNAME" label="组织名称"></el-table-column>
                            <el-table-column width="300" property="FORGNAME" label="上级组织"></el-table-column>
                        </el-table>
                    </el-container>
                    
                    <el-input slot="reference"                        v-model="form.group">
                        <i slot="suffix" class="el-input__icon el-icon-arrow-down"></i>
                    </el-input>
                </el-popover>
```

5. 遇到的问题
    
    (1). element原生组件与需求存在误差，通过自定义解决相关问题；
    比如上文所说的点击input框出现可检索表格、登陆页input框内容及条件判断

    (2). 点击登陆时判断及增加、修改表格数据时所有条件无法全部满足
    
    解决方法：借助validate自定义验证来解决
    ```
    this.$refs.form.validate((isValid,rules)=>{
        if(isValid){
            //isValid来判断条件全部成立
            this.countDown(type);
            //相关方法调用
        }
      })
    ```
