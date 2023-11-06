import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
  return (
    <div>
      <div className="title">
        hi, i'm erika!
      </div>
      <div>
        i'm a first-year compsci student. i love
        dance and all things artsy. i also really
        like sanrio, especially kuromi ...
      </div>
    </div>
  );
}
