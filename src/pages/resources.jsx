import styles from "@/styles/resources.module.scss";

// Insert full links to resources in webLinks and videoLinks
const resources = [
  {
    week: 1,
    title: "Intro to HTML/CSS",
    webLinks: ["test1"],
    videoLinks: ["test2"],
  },
  {
    week: 2,
    title: "JavaScript & Next.js Frontend",
    webLinks: ["test1"],
    videoLinks: ["test2"],
  },
  {
    week: 3,
    title: "Next.js Backend",
    webLinks: ["test1"],
    videoLinks: ["test2"],
  },
  {
    week: 4,
    title: "TBD",
    webLinks: ["test1"],
    videoLinks: ["test2"],
  },
  {
    week: 5,
    title: "TBD",
    webLinks: ["test1"],
    videoLinks: ["test2"],
  },
];

export default function Resources() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.resources}>
        <h1>List of Resources</h1>
        {resources?.map((resource, resourceNum) => {
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
                    {resource.webLinks?.map((link, index) => {
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
                    {resource.videoLinks?.map((link, index) => {
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
