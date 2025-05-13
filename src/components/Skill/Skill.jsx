import { skills } from '../../data';
import SkillCard from '../../ui/SkillCard/SkillCard';
import './Skill.css';

const Skill = () => {
    return (
        <section id='skills'>
            <div className='section__wrapper'>
                <div className='section__header'>
                    <h2 className='shine'>My Skills</h2>
                </div>
                <div className='skill__container'>
                    {skills.map((list, index) => (
                        <SkillCard 
                        {...list}
                        key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;