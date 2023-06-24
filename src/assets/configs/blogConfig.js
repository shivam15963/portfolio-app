import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {BiLink} from "react-icons/bi";

const blogConfig = [
    {
        id: "blog-8",
        title: "How to stack elements in CSS ?",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/how-to-stack-elements-in-css/",
                icon: <BiLink/>
            }
        ],
        description: "In order to create attractive and unique web pages, it is eventually required to add one element on top of the other, completely or just a section of it. ",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "How to use Sass Variables with CSS3 Media Queries ?",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/how-to-use-sass-variables-with-css3-media-queries/",
                icon: <BiLink/>
            }
        ],
        description: "SASS Variables are very simple to understand and use. SASS Variables assign a value to a name that begins with $ sign, and then just refer to that name instead of the value.",
        target: "_blank"
    },
    {
        id: "blog-6",
        title: "Throwable Class in Java with Examples",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/throwable-class-in-java-with-examples/",
                icon: <BiLink/>
            }
        ],
        description: "The Throwable class is the superclass of every error and exception in the Java language. Only objects that are one of the subclasses this class are thrown by any “Java Virtual Machine” or may be thrown by the Java throw statement",
        target: "_blank"
    },
    {
        id: "blog-5",
        title: "Full Screen Overlay Navigation Bar",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/how-to-create-full-screen-overlay-navigation-bar-using-html-css-and-javascript/",
                icon: <BiLink/>
            }
        ],
        description: "Learn how to create a full-screen navbar for your website using HTML, CSS and JavaScript.",
        target: "_blank"
    },
    {
        id: "blog-4",
        title: "Gradient Video Progress Bar",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/how-to-create-a-gradient-video-progress-bar/",
                icon: <BiLink/>
            }
        ],
        description: "Dynamic Progress Bars in videos are quite visually attractive in themselves. Here, we are creating a progress bar that changes its color gradient using simple HTML, CSS, and some JavaScript.",
        target: "_blank"
    },
    {
        id: "blog-3",
        title: "Sliding background effect",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/how-to-create-a-sliding-background-effect-using-css/",
                icon: <BiLink/>
            }
        ],
        description: "The sliding background effect is not the same as slideshow or carousel. The sliding background takes an image and slides it across the x-axis infinitely in a loop to create the effect of a never-ending and continuously moving background.",
        target: "_blank"
    },
    {
        id: "blog-2",
        title: "Change the Style of <a> Tag Title Attribute",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/how-to-change-the-style-of-a-tag-title-attribute/",
                icon: <BiLink/>
            }
        ],
        description: "The style of <a> (anchor) tag title attribute is pre-defined for the browser and it may differ from one browser to the other. ",
        target: "_blank"
    },
    {
        id: "blog-1",
        title: "Reflex Game using Javascript",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/create-a-reflex-game-using-javascript/",
                icon: <BiLink/>
            },
            {
                name: "repo",
                url: "https://github.com/shivam15963/reflex-game",
                icon: <AiFillGithub/>
            }
        ],
        description: "A reflex game is a simple fun game that measures your responding speed. It is quite simple to make and understand.",
        target: "_blank"
    },
    {
        id: "blog-0",
        title: "AWS Lambda",
        links: [
            {
                name: "article",
                url: "https://www.geeksforgeeks.org/how-to-configure-aws-lambda/",
                icon: <BiLink/>
            }
        ],
        description: "Learn how to configure AWS Lambda. AWS Lambda is a responsive cloud service that examines the steps followed within any application and responds to them by compiling the codes that have been defined by the users, also known as functions.",
        target: "_blank"
    }
]

export default blogConfig