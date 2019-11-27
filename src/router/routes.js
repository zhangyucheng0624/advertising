const Home = () => import('../pages/home');
const Login = () => import('../pages/login');
const Detail = () => import('../pages/detail');
const Material = () => import('../pages/material');
const AccountInfo = () => import('../pages/accountinfo');
const Billing = () => import('../pages/billing');
const BillingDetail = () => import('../pages/billingDetail');
export default [
  {path: '/login',component: Login,name:'账号密码登录',meta:{title:'登录'}},
  {path: '/home',component: Home,meta:{title: '车顶传媒广告业务系统'},children:[
      {path: '/home/detail',component: Detail},
      {path: '/home/material',component: Material},
      {path: '/home/accountInfo',component: AccountInfo},
      {path: '/home/billing',component: Billing,children: [
          { path: '/home/billing/billingDetail',component: BillingDetail}
        ]
      },
      {path:'/',redirect:'/home/detail'}
    ]
  },
  {path:'/',redirect:'/login'}
]
