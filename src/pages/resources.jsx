import resources from "@/data/resources.json";
import styles from "@/styles/resources.module.scss";

// Insert full links to resources in webLinks and videoLinks
const content = [
  {
    week: 1,
    title: "Initial Set Up",
    tags: ["setup"],
  },
  {
    week: 2,
    title: "Intro to HTML/CSS",
    tags: ["flexbox", "position", "responsiveness"],
  },
  {
    week: 3,
    title: "JavaScript & Next.js Frontend",
    tags: [],
  },
  {
    week: 4,
    title: "Next.js Backend",
    tags: [],
  },
  {
    week: 5,
    title: "TBD",
    tags: [],
  },
];

export default function Resources() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.resources}>
        <h1>Resource Glossary</h1>
        {content?.map((resource, resourceNum) => {
          const webLinks = [];
          resource.tags.forEach((tag) => {
            resources[`week ${resource.week}`][tag]?.web.forEach((item) => {
              webLinks.push(item);
            });
          });

          const videoLinks = [];
          resource.tags.forEach((tag) => {
            resources[`week ${resource.week}`][tag]?.video.forEach((item) => {
              videoLinks.push(item);
            });
          });

          {
            /* console.log(webLinks, videoLinks); */
          }

          return (
            <section
              className={styles.resource}
              key={`Resource ${resourceNum}`}
            >
              <h1>
                Workshop {resource.week}: {resource.title}
              </h1>
              <section className={styles.resourceList}>
                <section className={styles.websites}>
                  <h1>Web Links</h1>
                  <ul className={styles.websiteList}>
                    {webLinks?.map((link, index) => {
                      console.log(link);
                      return (
                        <a
                          href={link}
                          key={`Resource ${resourceNum} Web Link ${index}`}
                        >
                          <li className={styles.resourceLink}>{link}</li>
                        </a>
                      );
                    })}
                  </ul>
                </section>
                <section className={styles.videos}>
                  <h1>Video Links</h1>
                  <ul className={styles.videoList}>
                    {videoLinks?.map((link, index) => {
                      return (
                        <a
                          href={link}
                          key={`Resource ${resourceNum} Video Link ${index}`}
                        >
                          <li className={styles.resourceLink}>{link}</li>
                        </a>
                      );
                    })}
                  </ul>
                </section>
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
}
