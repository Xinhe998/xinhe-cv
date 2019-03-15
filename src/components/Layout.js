import React from "react"
import PropTypes from 'prop-types';
import Sidebar from './Sidebar'
import { Helmet } from "react-helmet";

import i18n from './I18n'
import { withNamespaces } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

import '../style/layout.scss'
const Layout = ({ children, data, t }) => (
    <I18nextProvider i18n={i18n}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Xinhe Hsu</title>
        </Helmet>
        <div>
            <Sidebar />
            <div className="layout-content">
                {children}

            </div>
        </div>
    </I18nextProvider>
)
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withNamespaces('translation')(Layout);