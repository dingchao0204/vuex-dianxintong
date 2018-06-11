import Vue from 'vue'
import Vuex from 'vuex'
import { instance as http } from '../untils/http'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        menu:[],
        group:[],
        tree:[]
    },
    mutations:{//通过commit来触发mutation
        fetchMenu_M(state,data){
            state.menu = data.data
        },
        fetchGroup_M(state,payload){
            state.group = payload
        },
        fetchTree_M(state,payload){
            state.tree = payload
        }  
    },
    actions:{//通过dispatch来触发
        fetchMenu_A({commit}){
            http.get('/static/data.json')
            .then(res=>{
                //this.menu = res.data
                commit('fetchMenu_M',res)
            })
        },
        fetchGroup_A({commit,state},cb){
            if(state.group.length > 0){
                cb()
            }
            http.get('/static/group.json')
            .then(res=>{
                setTimeout(()=>{
                    commit('fetchGroup_M',res.data.orgs)
                    cb()
                },2000)
                
            })
        },
        fetchTree_A({commit}){
            http.get('/static/tree.json')
            .then(res=>{
                console.log(res)
                commit('fetchTree_M',res.data)
            })
        },
    },
    getters:{
        filterGroup(state){
            return (filter)=>{
                if(filter){
                    let res = state.group.filter((item)=>{
                        return item.ORGNAME.indexOf(filter)>-1 || item.FORGNAME.indexOf(filter)>-1
                    })
                    return res
                }else{
                    return state.group
                }
                
            }
        }
    },
    modules:{}
})

export default store