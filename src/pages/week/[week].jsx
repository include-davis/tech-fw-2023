// manually import weekly components

import styles from "@/styles/week/week.module.scss";

// Insert weekly components in separate variables; Render based on week param.
const week1 = [];

export default function WorkshopContent({ week }) {
  return (
    <div className={styles.workshopContainer}>
      <section className={styles.workshopContent}>{week}</section>
    </div>
  );
}

const numWeeks = [1, 2, 3, 4, 5];

// Get static paths for each week
export async function getStaticPaths() {
  return {
    paths: numWeeks.map((week) => ({ params: { week: week.toString() } })),
    fallback: false,
  };
}

// Get static props (call API for content if need be) for each week
export async function getStaticProps({ params }) {
  return {
    props: {
      week: params.week,
    },
  };
}
