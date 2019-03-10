import React from "react"
import PropTypes from 'prop-types';
import Sidebar from './Sidebar'

import '../style/layout.scss'

const Layout = ({ children, }) => (
    <div>
        <Sidebar />
        <div className="layout-content">
            {children}
        </div>
    </div>
)
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default (Layout);