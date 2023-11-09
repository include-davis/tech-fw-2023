// import styles from styling folder!
import styles from '@/styles/components/personal/skillset.module.scss';
/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

const skillsList = [
{
  name: "C",
  level: "Intermediate" 
},
{
  name: "C++",
  level: "Intermediate"
},
{
  name: "Assembly",
  level: "Learning"
},
{
  name: "JavaScript",
  level: "Some experience"
},
{
  name: "Java",
  level: "Some experience"
},
{
  name: "Godot Game Engine",
  level: "Some Experience"
}
]

export default function Skills() {
  return <section className={styles.skills}>
          <h1>Skills</h1>
            <div className={styles.body}>
              {skillsList.map((skill, index) => (
                <div key={index}>
                  <h2>
                    {skill.name}
                  </h2>
                  <p>
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
        </section>;
}
