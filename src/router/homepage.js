let route = [
    {
        path: '/',
        name: 'HelloWorld',
        component: reslove =>{
            requestAnimationFrame(['../view/homepage/index.vue'],reslove)
        },
        meta:{
            title:'首页'
        }
      }
]
export default{
    route
}