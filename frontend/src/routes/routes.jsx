import SiteRoot from '../pages/site/SiteRoot'
import Home from '../pages/site/Home/Home'
import Detail from '../pages/site/Detail/Detail'
import Basket from "../pages/site/Basket/Basket"
import AdminRoot from '../pages/admin/AdminRoot'
import Products from '../pages/admin/Products/Products'
import Add from "../pages/admin/Add/Add"
import WishList from '../pages/site/WishList/WishList'
const ROUTES=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>,
    }, {
        path:"detail/:id",
        element:<Detail/>,
    }, {
        path:"basket",
        element:<Basket/>,
    }, {
        path:"wishlist",
        element:<WishList/>,
    },
]
},{
    path:"/admin",
    element:<AdminRoot/>,
    children:[{
        path:"",
        element:<Products/>,
    }, {
        path:"add",
        element:<Add/>,
    },
]
}
]
export default ROUTES