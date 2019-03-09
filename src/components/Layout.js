import React from "react"
import Sidebar from './Sidebar'
import PageTransition from 'gatsby-plugin-page-transitions';


import '../style/layout.scss'

const Layout = ({ children }) => (
    <div>
        <Sidebar />
        <div className="layout-content">
            {/* <PageTransition
                defaultStyle={{
                    transition: 'opacity 500ms ease-in',
                    opacity: 0,
                    width: '100%',
                }}
                transitionStyles={{
                    entering: { opacity: 1 },
                    entered: { opacity: 1 },
                    exiting: { opacity: 0 },
                }}
                transitionTime={500}
            > */}
                {children}
            {/* </PageTransition> */}
        </div>
    </div>
)


export default (Layout)