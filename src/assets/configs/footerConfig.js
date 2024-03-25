import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {BsCodeSquare, BsFillPencilFill} from "react-icons/bs";
import {RiFileInfoLine} from "react-icons/ri"
import { MdEmail } from "react-icons/md";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/shivam15963",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/shivam-mehla/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "https://www.interviewbit.com/profile/slash_it",
            className: "social-icon",
            target: "_blank",
            icon: <BsCodeSquare size={50}/>
        },
        {
            id: "footer-3",
            url: "https://auth.geeksforgeeks.org/user/slash_it/articles?sortby=view",
            className: "social-icon",
            target: "_blank",
            icon: <BsFillPencilFill size={50}/>
        },
        {
            id: "footer-4",
            url: "https://drive.google.com/file/d/1Eoa9sg4tjfUAlfeIxeIWCf_wP6_2EHQQ/view?usp=sharing",
            className: "social-icon",
            target: "_blank",
            icon: <RiFileInfoLine size={50}/>
        },
        {
            id: "footer-5",
            url: "mailto:shivammehla1999@gmail.com?subject=Lets work on something together!",
            className: "social-icon",
            target: "_blank",
            icon: <MdEmail size={50}/>
        }
    ]
}

export default footerConfig
