import Link from "next/link";
import styles from "@/styles/workshops.module.scss";

const workshops = [
  {
    week: 1,
    title: "Intro to HTML/CSS",
    desc: "Basics of HTML & CSS.",
    link: "/week/1",
  },
  {
    week: 2,
    title: "JavaScript & Next.js Frontend",
    desc: "Using JavaScript and Next.js to create a frontend for your website.",
    link: "/week/2",
  },
  {
    week: 3,
    title: "Next.js Backend",
    desc: "Using Next.js to create a backend for your website.",
    link: "/week/3",
  },
  {
    week: 4,
    title: "TBD",
    desc: "TBD",
    link: "/week/4",
  },
  {
    week: 5,
    title: "TBD",
    desc: "TBD",
    link: "/week/5",
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
                <Link href={workshop.link}>Learn Now!</Link>
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
