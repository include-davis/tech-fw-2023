import React, { Component } from 'react';
import styles from '@/styles/components/personal/projects.module.scss';
/*
TO-DO:
1. Make responsive to different sized screens
2. Make a component to get rid of repetitiveness.
3. Underline project name when user hover over project.
4. Make project div responsive to scrolling.
*/
export default function Projects() {
    
    return (
        <div className={styles.center}>
        <div className={styles.allProjects}>
            <div className={styles.project}>
                <div className={styles.projectDescr}>
                <h2 className={styles.projectName}>Sanrio Memory Game</h2>
                <p className={styles.projectLangs}>Made with:</p>
                <div className={styles.projectLangPics}>
                    <img className={styles.logo} alt="html logo" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"/>
                    <img className={styles.logo} alt="css logo" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"/>
                    <img className={styles.logo} alt="javascript logo" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"/>
                    <img className={styles.logo} alt="react logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"/>
                </div>
                <p className={styles.words}>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
                <a target="_blank" href="https://github.com/anna-c2/SanrioMemoryGame"><button className={styles.projectButton}>View Project</button></a>
                </div>
               
                <img className={styles.projectPic} alt="project preview" src="/personal/sanrio.png"/>
                
            </div>

            <div className={styles.project}>
                <div className={styles.projectDescr}>
                <h2 className={styles.projectName}>Fast Food Trivia Quiz</h2>
                
                <p className={styles.projectLangs}>Made with:</p>
                <div className={styles.projectLangPics}>
                    <img className={styles.logo} alt="html logo" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"/>
                    <img className={styles.logo} alt="css logo" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"/>
                    <img className={styles.logo} alt="javascript logo" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"/>
                </div>
                <p className={styles.words}>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
                <a target="_blank" href="https://github.com/anna-c2/CNTriviaProject"><button className={styles.projectButton}>View Project</button></a>
                </div>
                <img className={styles.projectPic} alt="project preview" src="/personal/foodtriv.png"/>
            </div>
            <div className={styles.project}>
                <div className={styles.projectDescr}>
                <h2 className={styles.projectName}>Minesweeper</h2>
                {/* <div className={styles.lang}> */}
                    <p className={styles.projectLangs}>Made with:</p>
                    <div className={styles.projectLangPics}>
                        <img className={styles.logo} alt="java logo" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"/>
                        <img className={styles.logo} alt="css logo" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"/>
                    </div>
                {/* </div> */}
                <p className={styles.words}>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
                <a target="_blank" href="https://github.com/anna-c2/Minesweeper"><button className={styles.projectButton}>View Project</button></a>
                </div>
                <img className={styles.projectPic} alt="project preview" src=""/>
            </div>
            <div className={styles.project}>
            <div className={styles.projectDescr}>
                <h2 className={styles.projectName}>Asteroids Game</h2>
                {/* <div className={styles.lang}> */}
                <p className={styles.projectLangs}>Made with:</p>
                <div className={styles.projectLangPics}>
                    <img className={styles.logo} alt="java logo" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"/>
                    <img className={styles.logo} alt="css logo" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"/>
                </div>
                {/* </div> */}
                <p className={styles.words}>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
                <a target="_blank" href="https://github.com/anna-c2/AsteroidsGame"><button className={styles.projectButton}>View Project</button></a>
                </div>
                <img className={styles.projectPic} alt="project preview" src="/personal/asteroid.png"/>
            </div>
        </div>
        </div>
    )
}