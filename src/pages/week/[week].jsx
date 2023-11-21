// manually import weekly components
import Flexbox from "@/components/week 2/flexbox.jsx";
import Position from "@/components/week 2/position.jsx";
import Responsiveness from "@/components/week 2/responsiveness.jsx";

import data from "@/data/data.json";
import styles from "@/styles/week/week.module.scss";

// Insert weekly components in separate variables; Render based on week param.
const weekContent = {
  1: [
    {
      component: <h1>No components were made for this week</h1>,
      title: "",
      desc: "",
      tags: [],
    },
  ],
  2: [
    {
      component: <Flexbox key="flexbox" />,
      title: "Flexbox",
      desc: "Tutorial on how flexbox works! Mess around with the code!",
      tags: ["flexbox"],
    },
    {
      component: <Position key="position" />,
      title: "Position",
      desc: "Example of positioning in CSS. Play with me!",
      tags: ["position"],
    },
    {
      component: <Responsiveness key="responsiveness" />,
      title: "Responsiveness",
      desc: "Example of responsiveness in CSS. Inspect me on different screen layouts!",
      tags: ["responsiveness"],
    },
  ],
<<<<<<< Updated upstream
  3: [],
  4: [],
=======
  3: [
    {
      component: <Map key="map"/>,
      title: "Map",
      desc: "Example of map function",
      tags: ["map"],
    },
    {
      component: <Form key="form"/>,
      title: "Form",
      desc: "Example using useState",
      tags: ["form"],
    },
  ],
  4: [
    {
      component: <Map key="map" />,
      title: "Map Function Example",
      desc: "Follow along with the comments in the code to create a list using map.",
      tags: ["map"],
    },
    {
      component: <Form key="form" />,
      title: "State Example",
      desc: "Follow along with the comments in the code to create a simple form with useState.",
      tags: ["state"],
    },
  ],
>>>>>>> Stashed changes
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
                  <h1>{item.tags ? "Resources" : ""}</h1>
                  <ul>
                    {item.tags
                      ? item.tags.map((component, index) => {
                          const webLinks =
                            data[`week ${week}`]["content"][component]?.web;
                          const videoLinks =
                            data[`week ${week}`]["content"][component]?.video;
                          const allLinks = webLinks.concat(videoLinks);

                          return (
                            <div
                              className={styles.links}
                              key={`${component} resource list ${index}`}
                            >
                              {allLinks
                                ? allLinks.map((link, index) => {
                                    return (
                                      <a
                                        href={link.url}
                                        target="_blank"
                                        key={`Resource ${index} Week ${week}`}
                                      >
                                        <li className={styles.resourceLink}>{link.name}</li>
                                      </a>
                                    );
                                  })
                                : null}
                            </div>
                          );
                        })
                      : null}
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
