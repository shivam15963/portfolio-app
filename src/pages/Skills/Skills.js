import React from 'react'
import { AttentionSeeker } from "react-awesome-reveal";
import SkillsItems from "./SkillsItems";
import skillsConfig from "../../assets/configs/skillsConfig";
import "./Skills.css"


const Skills = () => {
    return (
        <section id="skills">
            <div>
                <div className="skills-div">
                    <h1 className="main-skills-h1">
                        <span className="main-skills"><strong>Main Skills & Tools</strong></span>
                    </h1>
                    <AttentionSeeker effect={"pulse"}>
                        <div className="main-skills">
                            <SkillsItems config={skillsConfig.mainSkills}/>
                        </div>
                    </AttentionSeeker>

                    <h1 className="complementary-skills-h1">
                        <span className="complementary-skills"><strong>Complementary Skills & Tools</strong></span>
                    </h1>
                    <AttentionSeeker effect={"pulse"}>
                        <div className="complementary-skills">
                            <SkillsItems config={skillsConfig.complementarySkills}/>
                        </div>
                    </AttentionSeeker>

                    <h1 className="aws-skills-h1">
                        <span className="aws-skills"><strong>AWS Skills and Tools</strong></span>
                    </h1>
                    <AttentionSeeker effect={"pulse"}>
                        <div className="aws-skills">
                            <SkillsItems config={skillsConfig.awsSkills}/>
                        </div>
                    </AttentionSeeker>
                </div>
            </div>
        </section>
    )

}
export default Skills