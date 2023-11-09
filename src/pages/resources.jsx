import data from "@/data/data.json";
import styles from "@/styles/resources.module.scss";

// Insert full links to resources in webLinks and videoLinks
const content = [
  {
    week: 1,
    tags: ["setup"],
  },
  {
    week: 2,
    tags: ["general", "flexbox", "position", "responsiveness"],
  },
  {
    week: 3,
    tags: [],
  },
  {
    week: 4,
    tags: [],
  },
  {
    week: 5,
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
            data[`week ${resource.week}`]["content"][tag]?.web.forEach(
              (item) => {
                webLinks.push(item);
              }
            );
          });

          const videoLinks = [];
          resource.tags.forEach((tag) => {
            data[`week ${resource.week}`]["content"][tag]?.video.forEach(
              (item) => {
                videoLinks.push(item);
              }
            );
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
                Workshop {resource.week}: {data[`week ${resource.week}`].title}
              </h1>
              <section className={styles.resourceList}>
                <section className={styles.websites}>
                  <h1>Web Links</h1>
                  <ul className={styles.websiteList}>
                    {webLinks?.map((link, index) => {
                      console.log(link);
                      return (
                        <a
                          href={link.url}
                          target="_blank"
                          key={`Resource ${resourceNum} Web Link ${index}`}
                        >
                          <li className={styles.resourceLink}>{link.name}</li>
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
                          href={link.url}
                          target="_blank"
                          key={`Resource ${resourceNum} Video Link ${index}`}
                        >
                          <li className={styles.resourceLink}>{link.name}</li>
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
