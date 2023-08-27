import {LayoutGradient} from '../components/layout/index'
import {AdminLogin, AdminDashboard, AdminNotification, AdminProduct, AdminReport, AdminUser} from '../pages/admin'
import {ClientSignup, ClientLogin, ClientForgotPassword,ClientDashboard, ClientHistory, ClientProfile, ClientPackage, ClientCheckOut } from '../pages/client'
import {PublicHome, PublicGetTry, PublicPackage} from '../pages/public'


const adminPath = '/admin'
const clientPath = '/private'
const publicPath = '/'

const adminRoutes = [
    {path: `${adminPath}/login`, component: AdminLogin},
    {path: `${adminPath}/dashboard`, component: AdminDashboard},
    {path: `${adminPath}/notification`, component: AdminNotification},
    {path: `${adminPath}/product`, component: AdminProduct},
    {path: `${adminPath}/report`, component: AdminReport},
    {path: `${adminPath}/user`, component: AdminUser},
]

const clientRoutes = [
    {path: `${clientPath}/signup`, component: ClientSignup},
    {path: `${clientPath}/login`, component: ClientLogin},
    {path: `${clientPath}/forgotPassword`, component: ClientForgotPassword},
    {path: `${clientPath}/dashboard`, component: ClientDashboard},
    {path: `${clientPath}/history`, component: ClientHistory},
    {path: `${clientPath}/profile`, component: ClientProfile},
    {path: `${clientPath}/package`, component: ClientPackage},
    {path: `${clientPath}/checkout`, component: ClientCheckOut},



]

const publicRoutes = [
    {path:`${publicPath}`, component: PublicHome},
    {path:`${publicPath}/try`, component: PublicGetTry, layout: LayoutGradient},
    {path:`${publicPath}/package`, component: PublicPackage},

]

export {
    adminRoutes,
    clientRoutes,
    publicRoutes
}