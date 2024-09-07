import React from 'react'

const ExperienceCard = ({ experience }) => {
    return (
        <div className='Card'>
            <div className='top'>
                <img className='image' style={{background:"white"}} src={experience.img} />
                <div className='body'>
                    <h6>{experience.company}  </h6>
                    <div className="company"><span >{experience.role}</span>
                        <span className='date' style={{}}>{experience.date}</span></div>
                        <div>
                <span>Projects: </span>
                {experience.platforms.map((item, i) => <a className='projecturl' target='_blank' href={item.projectUrl} key={i}>{item.projectName}</a>)}
            </div>
                </div>
            </div>
            <div className='description'>
                    <ul>
                        {experience.desc.map((val, i) => <li  className='des' key={i}>{val}</li>)}
                    </ul> 
            </div>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <div className='Document' src={experience.doc} />
                </a>
            }
        </div>
    )
}

export default ExperienceCard