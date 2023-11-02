// manually import weekly components
import Flexbox from "@/components/week 2/flexbox.jsx";
import Position from "@/components/week 2/position.jsx";
import Responsiveness from "@/components/week 2/responsiveness.jsx";

import styles from "@/styles/week/week.module.scss";

// Insert weekly components in separate variables; Render based on week param.
const weekContent = {
  1: [
    {
      component: <h1>No components were made for this week</h1>,
      title: "N/A",
      desc: "N/A",
      resources: null,
    },
  ],
  2: [
    {
      component: <Flexbox key="flexbox" />,
      title: "Flexbox",
      desc: "Tutorial on how flexbox works!",
      resources: ["link1", "link2"],
    },
    {
      component: <Position key="position" />,
      title: "Position",
      desc: "Example of positioning in CSS",
      resources: ["link1", "link2"],
    },
    {
      component: <Responsiveness key="responsiveness" />,
      title: "Responsiveness",
      desc: "Example of responsiveness in CSS",
      resources: ["link1", "link2"],
    },
  ],
  3: [],
  4: [],
  5: [],
};

export default function WorkshopContent({ week }) {
  return (
    <div className={styles.workshopContainer}>
      <h1 className={styles.workshopTitle}>Week {week} Workshops</h1>
      <section className={styles.workshopContent}>
        {weekContent[week]?.map((item, index) => {
          return (
            <div
              className={styles.example}
              key={`Example ${index} Week ${week}`}
            >
              {item.component}
              <div className={styles.exampleContent}>
                <div className={styles.exampleInfo}>
                  <h1>{item.title}</h1>
                  <ul>
                    <li>{item?.desc}</li>
                  </ul>
                </div>
                <div className={styles.exampleResources}>
                  <h1>{item.resources ? "Resources" : ""}</h1>
                  <ul>
                    {item.resources?.map((resource, index) => {
                      return (
                        <li key={`Resource ${index} Week ${week}`}>
                          {resource}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
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
