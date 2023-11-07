import React, { useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import contact from "@/data/contact.json";
import styles from "@/styles/contact.module.scss";

export default function Contact() {
  const [active, setActive] = useState(null);

  return (
    <div className={styles.contact}>
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
                  blurDataURL={lead.blurDataURL}
                  placeholder="blur"
                  onClick={() => setActive(index)}
                  priority={true}
                />
              </div>
              {active == index && (
                <div className={styles.backdrop}>
                  <div className={styles.info}>
                    <div className={styles.panel}>
                      <ul className={styles.socials}>
                        <li>
                          <a href={lead.linkedIn} target="_blank">
                            <BsLinkedin
                              fontSize={100} /*to resize the icons */
                              color={"#0072b1"}
                              alt={"linkedIn"}
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
                          <a href={lead.github} target="_blank">
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
    </div>
  );
}
