import React from 'react'
import styles from './sidebar.module.css'
import{
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from 'react-icons/md'
import MenuLinks from './MenuLinks/MenuLinks'
import Image from 'next/image'

const menuItems = [{
    title:"pages",
    list:[
        {
            title:"Dashboard",
            path:"/dashboard",
            icon:<MdDashboard/>
        },{
            title:"Users",
            path:"/dashboard/users",
            icon:<MdSupervisedUserCircle/>
        },{
            title:"Products",
            path:"/dashboard/products",
            icon:<MdShoppingBag/>
        },{
            title:"Transactions",
            path:"/dashboard/transactons",
            icon:<MdAttachMoney/>
        }
    ]
},{
    title:"Analytics",
    list:[
        {
            title:"Revenue",
            path:"/dashboard/revenue",
            icon:<MdWork/>
        },{
            title:"Reports",
            path:"/dashboard/reports",
            icon:<MdAnalytics/>
        },{
            title:"Teams",
            path:"/dashboard/teams",
            icon:<MdPeople/>
        }
    ]
},{
    title:"user",
    list:[
        {
            title:"Setting",
            path:"/dashboard/setting",
            icon:<MdOutlineSettings/>
        },{
            title:"Help",
            path:"/dashboard/help",
            icon:<MdHelpCenter/>
        },{
            title:"Logout",
            path:"/",
            icon:<MdLogout/>
        }
    ]
}]

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.user}><Image className={styles.userImage} src='/noavatar.png' alt='' width="50" height="50"/></div>
        <div className={styles.userDetails}>
            <span className={styles.uname}>Dev</span>
            <span className={styles.utitle}>Admin</span>
        </div>
        <ul className={styles.list}>
            {menuItems.map((name)=>(
                <li key={name.title}>
                    <span className={styles.val}>{name.title}</span>
                    {name.list.map((val)=>(
                        <MenuLinks item={val} key={val.title}/>
                    ))}</li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar