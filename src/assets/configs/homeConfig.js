import React from 'react'
import {MdContentCopy} from "react-icons/md";
import {DiCodeigniter, } from "react-icons/di";
import {FaFileCode} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Shivam Mehla</strong>
        </h1>,
    titles: [
        "Software Developer",
        "Full Stack Developer",
        "Python Developer",
        "Implementation Specialist",
        "Solutions Engineer",
        "Indian"
    ],
    about: {
        start: "I've been working for over three years on various kinds of projects. " +
            "I'm excited by learning new things, contributing to the software development community," +
            " and spreading the word of coding!",
        exit: "I'm fluent at React, Python, databases, AWS tools, and much more, " +
            "with a deep interest in full stack development."
    },
    workTimeline: [
        {
            id: "work-2",
            title: "Associate Engineer - M2",
            company: "Symphony Talent",
            description: "Worked on various tools and technologies to deliever the best products for the clients.",
            date: "May 2021-Present",
            icon: <DiCodeigniter/>,
            tags: ["python", "react js", "mysql", "mulesoft", "node js", "mongo db", "rest api", "aws"]
        },
        {
            id: "work-1",
            title: "Problem Setter & Reviewer",
            company: "Coding Ninjas",
            description: "Created coding problems for coding enthusists on various data structures and algorthms with various language solutions",
            date: "Jan 2021-Oct 2021",
            icon: <FaFileCode/>,
            tags: ["c", "cpp", "java", "python", "data structures", "algorithms"]
        },
        {
            id: "work-0",
            title: "Technical Content Writer",
            company: "GeeksForGeeks",
            description: "Wrote technical articles on various domains including AWS, Coding problems and frontend technologies",
            date: "May 2020-Dec 2020",
            icon: <MdContentCopy/>,
            tags: ["data structures", "algorithms", "aws", "sass"]
        }
    ]
}


export default homeConfig