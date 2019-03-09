import React from "react"
import Sidebar from './Sidebar'


import '../style/layout.scss'

const Layout = ({ children }) => (
    <div>
        <Sidebar />
        <div className="layout-content">
            {children}
        </div>
    </div>
)


export default (Layout)