import React from "react"
import Layout from "../components/Layout"
import Lightbox from "react-images"
import { Helmet } from "react-helmet"
import { withI18next } from "gatsby-plugin-i18next"
import { withNamespaces } from "react-i18next"
import { Trans } from "react-i18next"
import i18next from "i18next"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import quick_fact1 from "../Assets/quick_fact1.jpg"
import quick_fact2 from "../Assets/quick_fact2.jpg"
import quick_fact3 from "../Assets/quick_fact3.jpg"
import quick_fact4 from "../Assets/quick_fact4.jpg"
import quick_fact5 from "../Assets/quick_fact5.jpg"
import quick_fact6 from "../Assets/quick_fact6.jpg"

import structuredData from "../configs/structuredData"
import "../style/about.scss"

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxIsOpen: false,
      lightbox_current_img: 0,
    }
  }
  openLightbox = img_index => {
    window.gtag("event", "Photo", {
      event_category: "view photo",
      event_label: img_index,
    })
    this.setState({
      lightboxIsOpen: true,
      lightbox_current_img: img_index,
    })
  }
  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
    })
  }
  lightboxGotoPrevious = () => {
    this.setState({
      lightbox_current_img: this.state.lightbox_current_img - 1,
    })
  }
  lightboxGotoNext = () => {
    this.setState({
      lightbox_current_img: this.state.lightbox_current_img + 1,
    })
  }
  render() {
    const { t, data } = this.props
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About - Xinhe Hsu</title>
          <meta
            name="description"
            content="A Web Developer, always keeping up with new trends in tech."
          />
          <meta
            name="keywords"
            content="工程師,前端,網頁,React,JavaScript,CSS,GatsbyJS,作品集,履歷,軟體開發"
          />
        </Helmet>
        <div id="about-page">
          <div className="intro">
            <div className="avatar-box">
              {/* <img className="avatar" src={avatar} /> */}
              <Img
                fluid={data.avatar.childImageSharp.fluid}
                className="avatar"
              />
            </div>
            <div className="circle" />
            <p className="name">
              Xinhe Hsu
              <br />
              {t("chinese_name")}
            </p>
          </div>
          <div className="main-content">
            <p>
              {t("self_intro1")} <br />
              <br />
              {t("self_intro2")} <br />
              <br />
              {t("self_intro3")} <br />
              <br />
              {t("self_intro4")}
            </p>
            <h1>{t("specialties")}</h1>
            <p>JavaScript</p>
            <div>
              <label className="pink">Vanilla js</label>
              <label className="pink">React</label>
              <label className="pink">Redux</label>
              <label className="pink">Redux-Saga</label>
              <label className="pink">Redux-Thunk</label>
              <label className="pink">jQuery</label>
            </div>
            <p>CSS</p>
            <div>
              <label className="blue">SASS/SCSS</label>
              <label className="blue">Atomic CSS</label>
            </div>
            <p>{t("web_back_end")}</p>
            <div>
              <label className="pink">Node.js</label>
              <label className="pink">Express.js</label>
              <label className="pink">WebSocket</label>
              <label className="pink">ASP.NET MVC</label>
            </div>
            <p>{t("database")}</p>
            <div>
              <label className="blue">Microsoft SQL Server</label>
              <label className="blue">MySQL</label>
            </div>
            <p>{t("build_tool")}</p>
            <div>
              <label className="pink">Webpack</label>
              <label className="pink">Babel</label>
            </div>
            <p>{t("testing")}</p>
            <div>
              <label className="blue">Selenium</label>
              <label className="blue">Jest</label>
              <label className="blue">Enzyme</label>
            </div>
            <h1>{t("experience")}</h1>
            <ul className="timeline-container">
              <li className="timeline-milestone">
                <div className="timeline-date">
                  <p>2019/07 - 2019/08</p>
                </div>
                <div className="timeline-content">
                  Intern <b>@ {t("verizon")}</b>
                  <ul>
                    <p>
                      <Trans i18nKey="verizon_overview">
                        As a Front-End Engineer intern, I was responsible for
                        <a href="https://tw.youcard.yahoo.com" target="_blank">
                          {" "}
                          {t("yahoo_youcard")}{" "}
                        </a>{" "}
                        project growth, and delivering a final presentation to
                        colleagues.
                      </Trans>
                    </p>
                    <li>{t("verizon_dutie1")} </li>
                    <li>{t("verizon_dutie2")} </li>
                    <li>{t("verizon_dutie3")} </li>
                    <li>{t("verizon_dutie4")} </li>
                    <li>{t("verizon_dutie5")} </li>
                    <li>{t("verizon_dutie6")} </li>
                  </ul>
                  <div className="image-hover img-zoom-in">
                    <Img
                      fluid={data.yahoo_pic.childImageSharp.fluid}
                      style={{ width: "200px", height: "150px" }}
                      imgStyle={{ opacity: "0.8" }}
                    />
                  </div>
                </div>
              </li>
              <li className="timeline-milestone">
                <div className="timeline-date">
                  <p>2018/01 - 2018/07</p>
                </div>
                <div className="timeline-content">
                  Intern <b>@ {t("advantech")}</b>
                  <ul>
                    <p>
                      <Trans i18nKey="advantech_overview">
                        Within the 6-months internship, I mainly collaborated
                        with the manager, and was responsible for
                        <a
                          href="https://wise-paas.advantech.com/en-us/marketplace"
                          target="_blank"
                        >
                          {" "}
                          {t("marketplace")}{" "}
                        </a>{" "}
                        project development and testing.
                      </Trans>
                    </p>
                    <li>{t("advantech_dutie1")}</li>
                    <li>{t("advantech_dutie2")} </li>
                    <li>{t("advantech_dutie3")} </li>
                    <li>{t("advantech_dutie4")} </li>
                    <li>{t("advantech_dutie5")} </li>
                    <li>{t("advantech_dutie6")} </li>
                  </ul>
                  <div className="image-hover img-zoom-in">
                    <a
                      href="https://medium.com/@xinhe998/advantech-internship-f4ba6a13acf6"
                      target="_blank"
                      onClick={() => {
                        window.gtag("event", "Advantech Medium Article", {
                          event_category: "photo click",
                          event_label: "Medium",
                        })
                      }}
                    >
                      <Img
                        fluid={data.advantech_pic.childImageSharp.fluid}
                        style={{ width: "200px", height: "150px" }}
                        imgStyle={{ opacity: "0.8" }}
                      />
                    </a>
                  </div>
                  <div className="bubble_wrapper">
                    <div
                      className={
                        i18next.language === "tw"
                          ? "bubble for_tw"
                          : "bubble for_en"
                      }
                    >
                      {t("medium_article")} :<br />
                      {t("what_i_learn_in_adv")}
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline-milestone">
                <div className="timeline-date">
                  <p>2017/07 - 2018/01</p>
                </div>
                <div className="timeline-content">
                  Intern <b>@ {t("trunk_studio")}</b>
                  <ul>
                    <li>
                      <Trans i18nKey="trunk_dutie1">
                        Participation of ‘
                        <a href="https://viptjob.com" target="_blank">
                          VIPT JOB
                        </a>
                        ’ official website(job bank platform for migrant workers
                        and enterprise) development with Vue.js and EJS, also
                        helped to implement i18n.
                      </Trans>
                       
                    </li>
                    <li>
                      <Trans i18nKey="trunk_dutie2">
                        Participation of ‘
                        <a
                          href="https://itunes.apple.com/tw/app/healthcare%E5%81%A5%E5%BA%B7%E4%BF%9D%E5%81%A5%E5%AE%A4/id1239683214?mt=8"
                          target="_blank"
                        >
                          Kbro HealthCare
                        </a>
                        ’ mobile app development with React Native.
                      </Trans>
                    </li>

                    <li>{t("trunk_dutie3")} </li>
                    <li>{t("trunk_dutie4")}</li>
                  </ul>
                </div>
              </li>
              <li className="timeline-milestone">
                <div className="timeline-date">
                  <p>2017/01 - 2017/03</p>
                </div>
                <div className="timeline-content">
                  Intern <b>@ {t("taiwan_cloud")}</b>
                  <ul>
                    <li>{t("taiwan_cloud_dutie1")}</li>
                    <li>{t("taiwan_cloud_dutie2")}</li>
                  </ul>
                </div>
              </li>
            </ul>
            <h1>{t("awards")}</h1>
            <ul className="awards-list">
              <li>
                <b>{t("third_prize")},</b>{" "}
                {t("project_information_distribution_science")}, 2019
              </li>
              <li>
                <b>{t("first_prize")},</b> {t("innoserve")}:{" "}
                {t("titansoft_agile")}, 2019
              </li>
              <li>
                <b>{t("student_elite_award")},</b> {t("nutc")}, 2018
              </li>
              <li>
                <b>{t("first_prize")},</b>{" "}
                {t("project_information_distribution_science")}, 2017
              </li>
              <li>
                <b>{t("third_prize")},</b> {t("innoserve")}:{" "}
                {t("titansoft_agile")}, 2017
              </li>
              <li>
                <b>{t("honorable_mention")},</b> {t("innoserve")}:{" "}
                {t("campus_4g")}, 2017
              </li>
              <li>
                <b>{t("honorable_mention")},</b>{" "}
                {t("web_app_creative_competition")}, 2017
              </li>
              <li>
                <b>{t("honorable_mention")},</b> {t("feng_chia")}, 2017
              </li>
              <li>
                <b>{t("first_prize")},</b> {t("innoserve")}: {t("egd_category")}
                , 2016
              </li>
            </ul>
            <h1>{t("quick_fact")}</h1>
            <p>
              {t("quick_fact1")}
              <br />
              {t("quick_fact2")}
            </p>
            <div className="quick_fact_img_group">
              <Lightbox
                images={[
                  { src: quick_fact3 },
                  { src: quick_fact4 },
                  { src: quick_fact5 },
                  { src: quick_fact1 },
                  { src: quick_fact2 },
                  { src: quick_fact6 },
                ]}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={() => this.lightboxGotoPrevious()}
                onClickNext={() => this.lightboxGotoNext()}
                onClose={() => this.closeLightbox()}
                currentImage={this.state.lightbox_current_img}
                backdropClosesModal={true}
                enableKeyboardInput={true}
                showImageCount={false}
              />
              <div style={{ display: "flex" }}>
                <div onClick={() => this.openLightbox(0)}>
                  <Img
                    fluid={data.quick_fact3.childImageSharp.fluid}
                    className="vertical"
                    style={{ width: "100px" }}
                    imgStyle={{ width: "100px", height: "auto" }}
                  />
                </div>
                <div onClick={() => this.openLightbox(1)}>
                  <Img
                    fluid={data.quick_fact4.childImageSharp.fluid}
                    className="vertical"
                    style={{ width: "100px" }}
                    imgStyle={{ width: "100px", height: "auto" }}
                  />
                </div>
                <div onClick={() => this.openLightbox(2)}>
                  <Img
                    fluid={data.quick_fact5.childImageSharp.fluid}
                    className="vertical"
                    style={{ width: "100px" }}
                    imgStyle={{ width: "100px", height: "auto" }}
                  />
                </div>
              </div>
              <br />
              <img
                src={quick_fact1}
                className="horizontal"
                onClick={() => this.openLightbox(3)}
              />
              <img
                src={quick_fact2}
                className="horizontal"
                onClick={() => this.openLightbox(4)}
              />
              <img
                src={quick_fact6}
                className="horizontal"
                onClick={() => this.openLightbox(5)}
              />
            </div>
            <h1 className="sp-block">
              <strong>．．．</strong>
            </h1>
            <div className="email-me">
              <p>{t("sent_me_email")}</p>
              <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(structuredData.about)}`,
          }}
        />
      </Layout>
    )
  }
}

export default withI18next()(withNamespaces("translation")(About))
export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    advantech_pic: file(relativePath: { eq: "advantech_pic.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yahoo_pic: file(relativePath: { eq: "yahoo_pic.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quick_fact1: file(relativePath: { eq: "quick_fact1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quick_fact2: file(relativePath: { eq: "quick_fact2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quick_fact3: file(relativePath: { eq: "quick_fact3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quick_fact4: file(relativePath: { eq: "quick_fact4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quick_fact5: file(relativePath: { eq: "quick_fact5.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quick_fact6: file(relativePath: { eq: "quick_fact6.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
