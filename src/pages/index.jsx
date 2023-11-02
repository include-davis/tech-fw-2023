import React, { Component } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/index.module.scss";

const workshopInfo = [
  {
    week: "Week 1",
    title: "Initial Set Up",
    goals: [
      "How The Internet Works",
      "Overview of Web Development",
      "Workspace Set Up",
      "Basic HTML & CSS (Box Model)",
    ],
  },
  {
    week: "Week 2",
    title: "Intro to HTML and CSS",
    goals: ["Flexbox", "Responsiveness", "Media Queries", "Positioning"],
  },
  {
    week: "Week 3",
    title: "Javascript + Next.js Frontend",
    goals: ["Coming Soon"],
  },
  {
    week: "Week 4",
    title: "Next.js Backend",
    goals: ["Coming Soon"],
  },
  {
    week: "Week 5",
    title: "TBD",
    goals: ["TBD"],
  },
];

export default function Index() {
  const scrollToSection = function (elementId) {
    const section = document.getElementById(elementId);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className={styles.body}>
      <section className={styles.hero}>
        <h1>Welcome to the 2023-2024 Technical Cohort! 🎉🎉🎉</h1>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <Image
              src="/hero.jpg"
              className={styles.heroImg}
              width={450}
              height={450}
              alt="heroImg"
            />
            <div className={styles.heroText}>
              <h2>
                We are so excited to have you join us on this journey of
                exploration and learning! This year, we will be learning about
                full stack web development, and we will be using Next.js and
                React.js to build our projects. We will be using this website to
                host all of our resources and workshops, so make sure to check
                back here often!
              </h2>
            </div>
          </div>
          <button
            className={styles.heroButton}
            onClick={() => scrollToSection("workshops")}
          >
            Get Started! <BsChevronDoubleDown />
          </button>
        </div>
      </section>
      <section className={styles.workshops} id="workshops">
        <h1 className={styles.workshopTitle}>Workshops</h1>
        <div className={styles.workshopContent}>
          {workshopInfo?.map((workshop, workshopNum) => {
            return (
              <div className={styles.workshop} key={`Workshop ${workshopNum}`}>
                <h2>{workshop.title}</h2>
                <ul className={styles.learningGoals}>
                  {workshop.goals.map((goal, index) => {
                    return (
                      <li key={`Week ${workshopNum + 1}: Goal ${index}`}>
                        {goal}
                      </li>
                    );
                  })}
                </ul>
                <button className={styles.btn}>
                  <Link href={`/week/${workshopNum + 1}`}>Learn More</Link>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
