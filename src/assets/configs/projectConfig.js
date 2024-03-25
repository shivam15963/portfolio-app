import {BiGitRepoForked, BiLink} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";

import crypto_analyser from "../images/crypto-analyser.png"
import weatherapi from "../images/weatherapi.png"
import coincon from "../images/coincon.png"
import agrishot from "../images/agrishot.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-3",
        title: "Crypto Analyser",
        links: [
            {
                name: "repo",
                url: "https://github.com/shivam15963/crypto-analyser",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/shivam15963/crypto-analyser/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/shivam15963/crypto-analyser/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "demo",
                url: "https://cryptoanalyser.netlify.app/",
                icon: <BiLink/>,
            }
        ],
        image: crypto_analyser,
        description: "Helps to search for information about various cryptocurrencies in real-time",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Coin Convertor",
        links: [
            {
                name: "repo",
                url: "https://github.com/shivam15963/coincon",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/shivam15963/coincon/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/shivam15963/coincon/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "demo",
                url: "https://coincon.netlify.app/",
                icon: <BiLink/>,
            }
        ],
        image: coincon,
        description: "Helps to convert coins from one currency to another",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Weather APP",
        links: [
            {
                name: "repo",
                url: "https://github.com/shivam15963/weather_data_using_weatherapi",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/shivam15963/weather_data_using_weatherapi/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/shivam15963/weather_data_using_weatherapi/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: weatherapi,
        description: "FastAPI App that provides weather Data using weatherapi",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "Agrishot",
        links: [
            {
                name: "repo",
                url: "https://github.com/shivam15963/agrishot",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/shivam15963/agrishot/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/shivam15963/agrishot/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: agrishot,
        description: "Template for various needs, cab booking, online shopping.",
        target: "_blank"
    }
]

export default projectConfig