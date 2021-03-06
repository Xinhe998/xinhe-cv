import React from 'react';
import HomeLayout from '../components/HomeLayout'
import '../style/404.scss'
import background from '../Assets/group-50.svg'
import next from '../Assets/next.svg'
import { navigate } from "gatsby"
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <HomeLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found - Xinhe Hsu</title>
                <meta name="description" content="A Web Developer, always keeping up with new trends in tech." />
                    <meta name="keywords" content="工程師,前端,網頁,React,JavaScript,CSS,GatsbyJS,作品集,履歷,軟體開發" />
            </Helmet>
            <div id="notfound_container">
                <h1>404</h1>
                <img className="background" src={background} />
                <h2>Looks Like you‘re Lost</h2>
                <p>We can’t seem to find the page you’re looking for</p>
                <button onClick={() => navigate("/")}>Back To Home<img src={next} draggable="false" /></button>
            </div>
        </HomeLayout>
    )
}
export default NotFound;