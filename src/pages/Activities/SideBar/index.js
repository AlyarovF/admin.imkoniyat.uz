import React from 'react'
import { SideBarItems } from './SideBarItems'
import { Link, Outlet } from 'react-router-dom'
import './index.css'
import { useTranslation } from 'react-i18next'

export default function SideBar() {
    const { t } = useTranslation()
    return (
        <div className='sideBar'>
            <ul>
                {SideBarItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                <span>
                                    {t(item.key)}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Outlet />
        </div>
    )
}
