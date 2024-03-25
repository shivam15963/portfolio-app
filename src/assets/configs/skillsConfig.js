import {
    SiPython,
    SiReact,
    SiNodedotjs,
    SiPostman,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiMulesoft,
    SiMicrosoftsqlserver,
    SiAwslambda,
    SiAmazonec2,
    SiAmazondynamodb,
    SiKibana,
    SiWordpress,
    SiAdobephotoshop,
    SiSelenium
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import {MdDataObject} from "react-icons/md";
import {GrMysql} from "react-icons/gr";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <MdDataObject size={50}/>,
            text: "DSA"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React JS"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiNodedotjs size={50}/>,
            text: "Node JS"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiSelenium size={50}/>,
            text: "Selenium"
        }
    ],
    complementarySkills: [
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiMongodb size={50}/>,
            text: "Mongo DB"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiPostman size={50}/>,
            text: "Postman"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiMulesoft size={50}/>,
            text: "Mulesoft"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiMicrosoftsqlserver size={50}/>,
            text: "Sql Server"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiWordpress size={50}/>,
            text: "Wordpress"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <FaGithub size={50}/>,
            text: "Github"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiAdobephotoshop size={50}/>,
            text: "Adobe photoshop"
        }
    ],
    awsSkills: [
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiAwslambda size={50}/>,
            text: "AWS Lambda"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiAmazonec2 size={50}/>,
            text: "EC2 Servers"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiKibana size={50}/>,
            text: "Kibana"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiAmazondynamodb size={50}/>,
            text: "Dynamo DB"
        }
    ]
}

export default skillsConfig
