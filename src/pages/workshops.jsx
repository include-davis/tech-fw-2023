import Link from "next/link";
import styles from "@/styles/workshops.module.scss";

const workshops = [
  {
    week: 1,
    title: "Initial Set Up",
    desc: "Getting to understand the web in prep for the rest of the workshops.",
  },
  {
    week: 2,
    title: "Intro to HTML/CSS",
    desc: "Basics of HTML & CSS.",
  },
  {
    week: 3,
    title: "JavaScript & Next.js Frontend",
    desc: "Using JavaScript and Next.js to create a frontend for your website.",
  },
  {
    week: 4,
    title: "Next.js Backend",
    desc: "Using Next.js to create a backend for your website.",
  },
  {
    week: 5,
    title: "TBD",
    desc: "TBD",
  },
];

export default function Workshops() {
  return (
    <div className={styles.table}>
      <h1 className={styles.header}>Table of Contents</h1>
      {workshops?.map((workshop, index) => {
        return (
          <section className={styles.tableSection} key={`section ${index}`}>
            <div className={styles.tableTitle}>
              <h1 className={styles.week}>
                Week {workshop.week}: {workshop.title}
              </h1>
            </div>
            <div className={styles.tableInfo}>{workshop.desc}</div>
            <div className={styles.tableRedirect}>
              <button className={styles.link}>
                <Link href={`/week/${workshop.week}`}>Learn Now!</Link>
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
