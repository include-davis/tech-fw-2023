import React, { useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import contact from "@/json/contact.json";
import styles from "@/styles/contact.module.scss";

export default function Contact() {
  const [active, setActive] = useState(null);

  return (
    <article className={styles.contact}>
      <h1>Contact Us</h1>
      <section className={styles.about}>
        {contact?.info.map((lead, index) => {
          return (
            <div className={styles.lead} key={`Lead ${index}`}>
              <div className={styles.leadImg}>
                <Image
                  src={lead.image}
                  alt={"lead-image"}
                  fill={true}
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "50%",
                  }}
                  // sizes={"(max-width: 1024px) 200px, 300px"}
                  onClick={() => setActive(index)}
                />
              </div>
              {active == index && (
                <div className={styles.backdrop}>
                  <div className={styles.info}>
                    <div className={styles.panel}>
                      <ul className={styles.socials}>
                        <li>
                          <a href={lead.discord} target="_blank">
                            <Image
                              src="/discord.svg"
                              width={100}
                              height={100}
                              alt={"discord"}
                            />
                          </a>
                        </li>
                        <li>
                          <a href={`mailto:${lead.gmail}`}>
                            <Image
                              src="/gmail.svg"
                              width={100}
                              height={100}
                              alt={"gmail"}
                            />
                          </a>
                        </li>
                        <li>
                          <a href={`https://github.com/${lead.github}`} target="_blank">
                            <Image
                              src="/github.svg"
                              width={100}
                              height={100}
                              alt={"github"}
                            />
                          </a>
                        </li>
                      </ul>
                      <button onClick={() => setActive(null)}>
                        <MdClose />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <h1>{lead.name}</h1>
            </div>
          );
        })}
      </section>
    </article>
  );
}
