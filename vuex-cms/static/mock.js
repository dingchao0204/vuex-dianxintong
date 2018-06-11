let fs = require('fs')
let Mock = require('mockjs');
let Random = Mock.Random


let result = Mock.mock({
  "userlist|100":[
    {
      name:() => Random.cname(),
      "ID|10000-50000": 10000,
      'phone': /^1[385][1-9]\d{8}/,
      email: () => Random.email(),
      'org|1': ["工程维护部本部",
          "黄永璋组",
          "企业营销",
          "专网事业部",
          "资产管理部",
          "电信通行政部",
          "人事行政部",
          "财务部",
          "电信通帐务部",
          "法务部"],
      'forg|1': ["电信通后台2部",
          "教育业务部",
          "北京电信通电信工",
          "北京电信通电信工",
          "电信通后台1部",
          "北京电信通电信工",
          "电信通后台1部",
          "电信通后台1部",
          "北京电信通电信工",
          "电信通后台1部"],
      createTime: () => Random.date('yyyy-MM-dd'),
      group: () => Random.csentence(5)
    }
  ]
})
fs.writeFile('table.json', JSON.stringify(result.userlist),()=>{
  console.log('success')
})

