import styles from '@/styles/components/personal/about.module.scss'
import { FiSmile } from 'react-icons/fi'

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return (
    <div className={styles.skillsWrapper}>
      <section className={styles.skills}>
        <h2>my skills</h2>
        <ul>
          <li>
          <img src="https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png"></img>
            <p>c/c++: 1 year</p>
          </li>
          <li>
          <img src="https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png"></img>
          <p>flutter: 1 year</p>
          </li>
          <li>
          <img src="https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png"></img>
            <p>html + css: 1 month</p>
          </li>
          <li>
            <img src="https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png"></img>
            <p>git/github: 1 week</p>
          </li>
          <li>
            <img src="https://stardewvalleywiki.com/mediawiki/images/f/fb/Pineapple.png"></img>
            <p>react native: 1 day</p>
          </li>
        </ul>
        <p>as you can see i'm a very pro developer yep <FiSmile/></p>
      </section>
    </div>

  );
}
