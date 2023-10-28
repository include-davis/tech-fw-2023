// manually import weekly components
import Test from "@/components/week 1/test.jsx";

import styles from "@/styles/week/week.module.scss";

// Insert weekly components in separate variables; Render based on week param.
const weekContent = {
  1: [<Test key="first" />],
  2: [<Test key="second" />],
  3: [<Test key="three" />],
  4: [<Test key="four" />],
  5: [<Test key="five" />],
};

export default function WorkshopContent({ week }) {
  return (
    <div className={styles.workshopContainer}>
      <section className={styles.workshopContent}>{weekContent[week]}</section>
    </div>
  );
}

const numWeeks = Object.keys(weekContent);

// Get static paths for each week
export async function getStaticPaths() {
  return {
    paths: numWeeks.map((weekNum) => ({ params: { week: weekNum } })),
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
