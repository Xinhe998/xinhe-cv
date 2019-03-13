(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a.n(n),l=a(7),i=a.n(l),o=a(0),c=a.n(o),s=a(166),m=a(152),u=(a(176),a(178),a(184)),d=a.n(u),g=a(253),p=a.n(g),E=a(254),h=a.n(E),A=function(e){function t(t){var a;return(a=e.call(this,t)||this).listenScrollEvent=function(){var e=document.getElementById("work-detail-container"),t=document.getElementById("be-header-when-scroll"),a=document.querySelector(".project-desc-container").offsetTop,n=document.querySelector(".project-desc-container").offsetHeight;window.pageYOffset>a+n?(e.classList.add("notransition"),t.classList.add("sticky")):t.classList.remove("sticky")},a.handleScroll=a.listenScrollEvent.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.listenScrollEvent,!0)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.listenScrollEvent,!0),document.getElementById("work-detail-container").classList.remove("notransition")},a.render=function(){return c.a.createElement(s.a,null,c.a.createElement("div",{id:"work-detail-container",onScroll:this.listenScrollEvent.bind(this)},c.a.createElement("img",{src:d.a,className:"project-img"}),c.a.createElement("div",{className:"project-desc-container"},c.a.createElement("div",{id:"be-header-when-scroll"},c.a.createElement(m.Link,{to:"/works"},c.a.createElement("div",{className:"close-btn"})),c.a.createElement("p",{className:"project-title"},"Meracle")),c.a.createElement("p",{className:"project-desc"},"A platform that trains and tracks memory for young-learners. "),c.a.createElement("div",{className:"project-detail"},c.a.createElement("div",null,c.a.createElement("p",{className:"project-role-title"},"Role:"),c.a.createElement("label",{className:"role"},"Front-End Develop")),c.a.createElement("div",null,c.a.createElement("p",{className:"project-program-title"},"Programming Languages："),c.a.createElement("label",{className:"programming_language"},"React.js"),c.a.createElement("label",{className:"programming_language"},"Redux"),c.a.createElement("label",{className:"programming_language"},"SCSS"),c.a.createElement("label",{className:"programming_language"},"JavaScript"),c.a.createElement("label",{className:"programming_language"},"Webpack")))),c.a.createElement("div",{className:"project-detail_content"},c.a.createElement("h1",null,"Project Overview"),c.a.createElement("p",null,"The Junior College Team Project"),c.a.createElement("p",null,"4 months (08/2017 - 12/2017)"),c.a.createElement("h1",null,"Project Brief"),c.a.createElement("p",null,"Meracle is ",c.a.createElement("b",null,"a platform that trains and tracks memory for young-learners. "),"It captures brain wave by Neurosky MindWave Mobile Headset, quantizes the working memory with algorithm, and provides a lot of charts & data for parents. Meracle aims to improve the working memory for young-learners.",c.a.createElement("br",null),"Our team, four people, completed this project with an app by cross-platform mobile framework React Native, a web system by React.js, and RESTful API by ASP.NET API. I was involved in all stages of the process, but I especially contributed the most to web front-end development."),c.a.createElement("h1",null,"At a Glance"),c.a.createElement("div",{className:"image-group"},c.a.createElement("img",{src:p.a,className:"web-screenshot"}),c.a.createElement("img",{src:h.a,className:"web-screenshot"})),c.a.createElement("h1",null,"Motivation & Solution"),c.a.createElement("p",null,"現今市面上充斥著許多記憶力訓練方法， 但卻沒有一套系統，完善的分析、追縱與量化記憶力，因此我們開發出一套針對學童的腦波記憶力評估訓練系統。 基於香港記憶學院提供的記憶力測驗作為指標，結合N-back記憶理論，設計出一套完整實驗流程， 驗證本系統在提升孩童記憶力上確實有成效。"),c.a.createElement("h1",null,"Outcome"),c.a.createElement("p",null,c.a.createElement("b",null,"Awards")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"First Prize,")," Undergraduate Project of College of Information and Distribution Science, 2017"),c.a.createElement("li",null,c.a.createElement("b",null,"Third Prize,")," International ICT Innovative Services Awards: Titansoft Pte Ltd Agile development category, 2017"),c.a.createElement("li",null,c.a.createElement("b",null,"Honorable Mention,")," International ICT Innovative Services Awards: Campus 4G mobile application category, 2017"),c.a.createElement("li",null,c.a.createElement("b",null,"Honorable Mention,")," Web&App Creative competition in National Taipei University of Education, 2017"))),c.a.createElement("h1",{className:"sp-block"},c.a.createElement("strong",null,"．．．")),c.a.createElement("div",{className:"email-me"},c.a.createElement("p",null,"If you're interested in learning more, send me an email and I would love to chat!"),c.a.createElement("a",{href:"mailto:xinhe998@gmail.com"},"xinhe998@gmail.com")),c.a.createElement("div",{className:"navigate-project-btn-container"},c.a.createElement(m.Link,{to:"works/ghowa"}," ← PREV PROJECT"),c.a.createElement(m.Link,{to:"works/here"},"NEXT PROJECT → "))),c.a.createElement("p",{className:"copyright"},"© Xinhe Hsu 2019."))},t}(c.a.Component);t.default=A},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return d}),a.d(t,"useStaticQuery",function(){return g});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(32),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"parsePath",function(){return o.parsePath}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(153),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=r.a.createContext({}),d=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},g=function(e){r.a.useContext;var t=r.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},155:function(e,t,a){"use strict";var n=a(174),r=a(171),l=a.n(r),i=a(172),o=a.n(i),c=a(154);n.a.use(l.a).use(o.a).use(c.b).init({fallbackLng:"en",interpolation:{escapeValue:!1},ns:["translation"],defaultNS:"translation",resources:{en:{translation:{skill:"Skill",experience:"Experience"}},tw:{translation:{skill:"技能",experience:"經歷"}}},debug:!0,react:{wait:!0}}),t.a=n.a},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},159:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABSJJREFUaAXFmkuMFFUUhmlgMIAPxgCREUlUBqMbhFFBRXAiGh8JGzFREeJrgRgWJkZjXKgLN7rEmLhx6VshUVhg4iwUcUAXAwEfI8xEcNwYUBwio0j7/U11TdWt29WnqqurT/Kn7j2P/5xTXVX3dnVXprRBqtXq5dBeDS4GFwUp/uL4JzhaqVR+DXSFHSqtMlG0OFaAu8AdYDm4EKTJOMbvwBdgNxikuSrH8oUGFoJXwXHQqhyDQFz6JMsRks0Hb4IJULSIU9zz29YN5FPB0+AkaLcoxxbQ8qUfOyEQ9oABULYMkHBBrJi8E4j6wBjolCh3X976a3EQ9INTneogklc19OdqhsDV4HSErNND1bK6UTPem4mAJQR8A7obBXZIf4K8K1lzht38U10FTWgx2w58TWjR0urczsVL3KeATy5FuSOoMWZPNIL1DXBdzGty8glnYw5TPecfAV9NmloaqfjPwf2gmxyXcNwLfKLatvkMoY5O14JzoJE8EToHAxxvBnucgL+Z/wgGwKfgs2B8gOMfICq7mSz18L4YdXLGqnGtG1ObY5gOvncC3OkNvmCcKuBxsBH0gmk+P+mwyXcJkP/DKX73YU8T1To9EY9SxM1kUSKwTQoKWdGsGOyP1dPX7hEUOj5XV6YcZ6TYijZZcj0f1D6lfrNrC36NoZLFBp+iXPR9ppmoZtUeNrKxWURgv9HoV4Rb4gHQgPR87Xw0XcB9kqBKyDAaPRZLEXLp64Jlj6fau/QUWQUskm+v00LbFPWQpTB8btM9ssqQ62sWqQGDX9Eu70N4xEB6qxqxXIsfGMgKd+HknYP0QwPxUjXSa3DUBrJTYtkG9aqRHkOFowafdrlYcveoEd8u1y3qjKsocW7J3a1GLCvozBILd1PNchWe+Qw1MuExuKq5rqLEuSX3hBoZNxRl2S4YaHK5WHKPq5ExA32ZWxO3nJtchWc+pkZGPQZXdY+rKGPOiq13Cncbco2qkSGD4zJI9XK6bNHO9gpD0iE1Mmhw1Jl5yeBXmEvwaVhzDmrTOBucARbRC4dShGJesBSEj2qfXSuKwa4MQeva3Qm1bAJnjTXtCushYIMxSG5KoN8yLAtVmMMygHMO2AbS3uRgjsmGkBv1LPB7zFytHmL+JHgd+L7gSPcsuDIkyjmA41rwGsj6k4Vqjp9QFK+AqPzGZJlq46hG34kaI2OdPTX9FtgKLmvWDz6LgfJ9BI6CvPJyIhdM3cD9VCbQPSpnjtOAXqaliex6wqUKPuLal0ZksKlW/4YXg86oK7on+lUZx0XghOsQmTd8W+52Rsy6SFye4VaXM5zDpp/X3NefSqK3elpz1MxKoMvOFf2GUfMJCVMG+M4E/7okxvmX+MVyJS4DHK4i/7fA/djW89XzY9WGj96mbAK6h8RxGOzAnnjdj76hwPMLRsvKHeU4yaSPXCNRpXdMgnuB+xwfQtflDciphO8HkEVUk2XvNVkRAU8B93n+HroLJr1aG8GVpRHVsjlXRgL1btVt5iC6B8D5bUHAzLzZvx0SNRBjbeQ/fJ9JEGRRQLAZ+G5K6UaA1hAtZHuy8MqXmJ9AMzmNw4NZub3+EK0BvicV6lD2eoNTlEQOh9H+wc+or0+hyG6CcC54F7iXGqqaWL4OxBITdSSIdQ/K8Tao/7MoFlfIBPLbwX7gyv6sCSAYcUmYax27JStXbn+S3Ql2gvr9szMrGbGDQPIP2A7WZOUozJ/kC4CeYvrpOJMQsxCsB/MyBXqc/weJg6IFF2iIdQAAAABJRU5ErkJggg=="},160:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAsRJREFUaAXtmc9LFVEUx9+LMpVXYqK0iqBNhIEuRMidtNCdbYSohbuyTRuF/oQgAlfqX+BGWqjbcBVi/sCNJLTQhURkERiGhOXzcyJhmHdn7nn+eO/O6xz4MjPnnDtzvt8zM3fefbmcmSlgCpgCpoApYAqYAhVSIF/udYrFYiNj7oArYBd8zOfze2xrzyDbDj6DqB1w0FdzbCF1F3yJMo3s77E/VDOkIdMItiMEXbtbOOV2D9ouKKu7TV6bJ/cm8W5PTtXDWsLygtLkdladkacADQk5xQ/wx3OuIvFNT042wjybl8EOSLOvBAuhM1J1mHn2F0QGgHQ6ySYI/EwKZtJPBx+CTXAIxGQrnX0JVOJVm/hJvrSE2H3QDt6DBe4AeX7NTIEAFCj7lq5UzbwTerlWB6gHO2ADLPL4+KZH0pJNTVheTJymJ/lUuQ/EnsULYtwM/msp454wRsbmyO1nMwq6gGuK28e/BubAa8YdsD0fo5hZkGaLBC/Fr44v/usqfo5uHAXwCsgvL61tkHgrfj3fcShTyTiFjoCLvoIjcfm+n4d0iciRnJLdEAi/oKrHJZXpHDdIm4S0+tEMgbB8wakLdujwAF+rw+90hUDYWVgZzmZyh7X5IRI+pPjvQN7IWnuqva1DISyfpstgEBSYblrYNoFHYBv47DoJAq+FQvgdld6D6DT421mZY8EUfpl6vnmZZIiwdHcUcr9dpIQ4/llXLOa7Gjt2HobQ4XVIya+uNHubFvwXUy0ghkB4SUFGvqN9VudLkHgIhD8pCpW3ts9UXFRJviudMq75m0aWmM7EQiBc0dWSEAifSee0JzHCWqWymmcdzmrntHVbh7VKZTXPOpzVzmnrtg5rlcpq3n/X4XIWvsfo6puUzsoyjGvV4jn+hpRxKymx49AuO0PHBwnb1QS/uU0BU8AUMAVMAVPAFKiOAkevXYyeXLUqhwAAAABJRU5ErkJggg=="},161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA1JJREFUaAXtmMtrFEEQxnc1iBKJIJqLQlZRQRRvQXLwcRDxARoQIgQPgs+LKJi/wHPEgBdNQMSTeBHx4iUiqOAhp6Ag+NgcAhJQEFGMUbP+Smay1b3ds5vZ3jDRaSi6+quqrvq6pnd2t1DIR34CLTmBot61Uqk8Zb1eYxnWJ4vF4q64vrZYiWYhUbKwRbFcsiiqbKDInEgDh7SgLnlHFvS4G0iWd6SBQ1pQl/+yI1d5kyYOWjA2jzZU8N2StCH2u/PYr+rKV5Qy4hu/MByoetdq2Pt8wQ58tHaHKoL/kCNGQ+Wqt6XhVdaeDv0z2FYrbG6JbSny3hHngo7PBSoFxyJy0xVgYU0Rkb3eIKtVbkPFdkGc6owp7MuMwGgBXqoTG5sNImku+yZyXnYVEWG3mD8l2MV0m7sx4/FJU1MhVRAFtHuKKFDgN2w3fHZwueQjCfZUprRE/iajxx2erNfBpz22x5B9S+xKjz0V3BQRMp5zZaXQKfA7LhvYMCTkB12fx54KbpZIN0Xt8WS+Bj5r2YTgfWQ/0mXZmlo2S0SSD7gqoCuvwR9aNrnkP8FOW3jTyxBEDtOVbZ5KBhUu3RnBt5P5iMKDqCGIyPPu68ozbC+iSkfpxjv0k4jzHRL5pZpCEJHE/Zz0Ok8FcVeGI3vwx0r2DUVETvhiVKg9yeV+jjyA7F7mzUjwEYqIFHaWQmveKzxOcjd6W3XJ4xMJSWSVkIk31jMkPkJSvp8d03hIPSQRqesSBfsu8gnsy0MWr/cKTUQufL9OoPQzSg+upiXyIapkwlHRAF2x/1PuwW+7wzcYlIaIfAINRRVcYR63qpGX4yELa8lHrpWjuuQky0jSKGNcW43gO3ml0oXIDyU9nsQ+gB3IV21En0EOxj56Bm9HXiH1hvHDSu8hRZUTor9gcz4e4D3IdxU7i94tmzOfV7io08hRI7G1wN6JjCNJIzWRXiufsSTjKSvrPXEAG1P4D/R9RqBngd8a5KWKtVWDiH0pxVjy7C13Q765+sYKDDuV8Te6xOxWmPzYeqTW9dQdOGz0OE3wftoQ2+ZDJI7JymwQSfOplRUiRh05EeM4MrDIO5KBJhgl5B0xjiMDi3+mI23WYU5a6ywvF1OtWT7HvLbkE/gDr8ND55ortHYAAAAASUVORK5CYII="},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=(a(73),a(74),a(7)),c=a.n(o),s=(a(168),a(169),a(155)),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){a.setState({lang:e}),s.a.changeLanguage(e)},a.state={lang:"undefined"!=typeof localStorage&&localStorage.getItem("i18nextLng")?localStorage.getItem("i18nextLng"):"en"},a}return c()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement("div",{id:"segment",className:this.props.isInSidebar?"is_in_sidebar":""},r.a.createElement("input",{id:"seg1",type:"radio",name:"radioBtn",checked:"en"===this.state.lang,onChange:function(){return e.handleChange("en")}}),r.a.createElement("label",{className:"labels",htmlFor:"seg1"},"EN"),r.a.createElement("input",{id:"seg2",type:"radio",name:"radioBtn",checked:"tw"===this.state.lang,onChange:function(){return e.handleChange("tw")}}),r.a.createElement("label",{className:"labels",htmlFor:"seg2"},"繁中"),r.a.createElement("div",{id:"bckgrnd"}))},t}(r.a.Component);m.propTypes={isInSidebar:i.a.bool};var u=m,d=a(152),g=a(159),p=a.n(g),E=a(160),h=a.n(E),A=a(161),f=a.n(A),b=function(e){function t(t){return e.call(this,t)||this}return c()(t,e),t.prototype.render=function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement(u,{isInSidebar:!0}),r.a.createElement("div",{className:"text-container"},r.a.createElement("p",null,"Hi, I’m"),r.a.createElement("p",null,r.a.createElement(d.Link,{to:"/"},"Xinhe Hsu")),r.a.createElement("p",null,"Developer")),r.a.createElement("div",{className:"button-container"},r.a.createElement(d.Link,{to:"works",className:"undefined"!=typeof window&&window.location.pathname.includes("works")?"active":""},"WORK"),r.a.createElement(d.Link,{to:"about",className:"undefined"!=typeof window&&window.location.pathname.includes("about")?"active":""},"ABOUT"),r.a.createElement(d.Link,{to:"resume"},"RESUME")),r.a.createElement("div",{className:"socialmedia-button-container"},r.a.createElement("div",{className:"icon-container"},r.a.createElement("a",{href:"https://github.com/Xinhe998"},r.a.createElement("img",{src:p.a})),r.a.createElement("a",{href:"https://linkedin.com/in/xinhe998/"},r.a.createElement("img",{src:h.a})),r.a.createElement("a",{href:"https://medium.com/@xinhe998"},r.a.createElement("img",{src:f.a})))))},t}(r.a.Component),v=a(154),w=(a(173),function(e){var t=e.children;e.data,e.t;return r.a.createElement(v.a,{i18n:s.a},r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"layout-content"},t)))});w.propTypes={children:i.a.node.isRequired};t.a=Object(v.c)("translation")(w)},184:function(e,t,a){e.exports=a.p+"static/meracle-cfef974ad3efd46e671c959fab22497e.png"},253:function(e,t,a){e.exports=a.p+"static/meracle-1-b4a9cf768700b3863a8f86d12cd348a5.png"},254:function(e,t,a){e.exports=a.p+"static/meracle-2-6a4887182d6e72edacf9a71b85043dec.png"}}]);
//# sourceMappingURL=component---src-pages-works-meracle-js-8993564a02a6e5976936.js.map