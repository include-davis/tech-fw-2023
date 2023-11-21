import styles from '@/styles/components/personal/skillset.module.scss';
/*
TO-DO:
1. Make responsive to different sized screens
2. Make a component to get rid of repetitiveness.
3. Border animation
*/

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return <section className={styles.skills}>
    <div className={styles.container}>
        {/* <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
          </ul> */}
      <div className={styles.box}>
      <h1 className={styles.sectionName}>SKILLS</h1>
      <div className={styles.languages}>
      <div className={styles.skill}>
        <img className={styles.logo} alt="html logo" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"/>
        <div className={styles.descr}>
          <h2 className={styles.label}>HTML</h2>
          <h3 className={styles.years}>2 Years</h3>
        </div>
      </div>
      <div className={styles.skill}>
        <img className={styles.logo} alt="css logo" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"/>
        <div className={styles.descr}>
          <h2 className={styles.label}>CSS</h2>
          <h3 className={styles.years}>2 Years</h3>
        </div>
      </div>
      <div className={styles.skill}>
        <img className={styles.logo} alt="javascript logo" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"/>
        <div className={styles.descr}>
          <h2 className={styles.label}>Javascript</h2>
          <h3 className={styles.years}>1 Year</h3>
        </div>
      </div>
      <div className={styles.skill}>
        <img className={styles.logo} alt="java logo" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"/>
        <div className={styles.descr}>
          <h2 className={styles.label}>Java</h2>
          <h3 className={styles.years}>1 Year</h3>
        </div>
      </div>
      <div className={styles.skill}>
        <img className={styles.logo} alt="c logo" src="https://www.codeconvert.ai/lang_logos/c.svg"/>
        <div className={styles.descr}>
          <h2 className={styles.label}>C</h2>
          <h3 className={styles.years}>Less Than 1 Year</h3>
        </div>
      </div>
      <div className={styles.skill}>
        <img className={styles.logo} alt="react logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"/>
        <div className={styles.descr}>
          <h2 className={styles.label}>React</h2>
          <h3 className={styles.years}>Less Than 1 Year</h3>
        </div>
        </div>
      </div>
      </div>
    </div>

    

  </section>;
}
