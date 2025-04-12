import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { SKILLS } from '../../utils/data'
import SkillsinfoCard from './SkillsinfoCard/SkillsinfoCard'

const Skills = () => {
  const[selectedSkill, setSelectedSkill] =useState(SKILLS[0])
  const handleSelectSkills=(data)=>{
    setSelectedSkill(data)
  }
  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) =>(
            <SkillCard 
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.title === item.title}
            onClick={()=>{
              handleSelectSkills(item)
            }}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillsinfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
          />
        </div>

      </div>
    </section>
  )
}

export default Skills
