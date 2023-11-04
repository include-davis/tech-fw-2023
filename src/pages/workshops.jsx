import Link from "next/link";
import data from "@/data/data.json";
import styles from "@/styles/workshops.module.scss";

const workshops = [1, 2, 3, 4, 5];

export default function Workshops() {
  return (
    <div className={styles.table}>
      <h1 className={styles.header}>Table of Contents</h1>
      {workshops?.map((value, index) => {
        const workshop = data[`week ${value}`];
        return (
          <section className={styles.tableSection} key={`section ${index}`}>
            <div className={styles.tableTitle}>
              <h1 className={styles.week}>
                Week {value}: {workshop.title}
              </h1>
            </div>
            <div className={styles.tableInfo}>{workshop.desc}</div>
            <div className={styles.tableRedirect}>
              <button className={styles.link}>
                <Link href={`/week/${value}`}>Learn Now!</Link>
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
