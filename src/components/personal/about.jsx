import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss'
import Icons from '@/components/personal/icons'
import Footer from './footer';

export default function About() {
  return (
    <div className={styles.style}>
      <div className={styles.notFooter}>
        <div className={styles.mainInfo}>
          <h1>naomi zhao</h1>
          <h2>personal page</h2>
          <p>hi, i'm naomi! i'm a class of 2026 computer science & engineering major. lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut scelerisque elit. Fusce vestibulum justo sem, vitae vulputate dui fermentum vitae. Proin varius magna quis consectetur lobortis. Pellentesque ultrices iaculis euismod. Etiam egestas vulputate faucibus. Sed eu erat eros. Phasellus pulvinar mi sed odio egestas, in iaculis sem commodo. Quisque a metus quis ligula interdum interdum. Suspendisse faucibus ornare odio, ut eleifend nulla fringilla ac. Donec egestas malesuada turpis vitae malesuada.

            Nullam consequat, purus ac eleifend feugiat, sapien turpis finibus lacus, vitae imperdiet nisl sem vel augue. Nunc condimentum dui nunc, at consequat leo pellentesque ut. Phasellus hendrerit eget odio nec rhoncus. Phasellus ultricies diam eget felis hendrerit porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent scelerisque augue et varius porttitor. Proin sodales, elit sed aliquam facilisis, nisi dui euismod dui, egestas accumsan ipsum nisi accumsan tortor. Suspendisse libero mauris, faucibus sed pellentesque vitae, ultrices scelerisque tellus. Donec turpis sapien, porttitor volutpat vulputate feugiat, accumsan ut eros. Praesent non lacinia nibh, quis varius nisl. Donec egestas turpis felis, eget rhoncus ex sagittis at. Nunc dictum arcu massa, ut fermentum ex laoreet sit amet. Nullam et commodo turpis, et accumsan lorem.

            Nullam hendrerit bibendum justo quis iaculis. Etiam imperdiet lectus vel mollis pharetra. Fusce velit ligula, tincidunt eu porttitor in, vehicula sit amet odio. Nulla placerat congue enim. Nulla eget nulla a ex consectetur volutpat. Integer ac ex at ex ullamcorper viverra sed quis ipsum. Fusce finibus felis tortor. Sed tempus diam magna, at mollis diam mollis volutpat. Curabitur convallis elit sit amet fringilla pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus dolor massa, vehicula eu elit in, facilisis fermentum massa. Suspendisse ultricies, dolor sit amet euismod sagittis, libero velit consectetur turpis, ut dapibus erat tortor eu augue. Aenean vulputate dolor tellus, vel rutrum nibh porttitor sit amet. Aenean auctor sem lectus, ut aliquam sapien condimentum viverra. Duis non semper leo. Ut arcu magna, rhoncus id massa a, tempus bibendum erat.

            Morbi mattis elit elementum imperdiet dignissim. Nulla facilisi. Ut ultrices eu sapien a bibendum. Pellentesque efficitur justo eget semper vestibulum. Nullam id blandit orci. Phasellus lobortis aliquam vestibulum. Etiam et nunc diam. Sed porta diam eget finibus mattis. Aenean feugiat, quam sit amet consequat aliquam, quam magna vulputate magna, sed aliquet enim enim id erat.

            Donec in justo a augue vulputate aliquam sed quis ligula. Sed odio lectus, sagittis sed convallis in, tempor nec velit. Cras vulputate nisi sed felis pretium, non malesuada nulla rutrum. Morbi egestas, nisl vel porttitor lobortis, erat lorem sodales orci, scelerisque facilisis ligula arcu sed ipsum. Aliquam egestas in nunc non tincidunt. In in leo sit amet elit tincidunt convallis. Aenean vestibulum luctus nunc nec finibus. Nam elementum quam vel fringilla posuere. Sed at rutrum diam, in iaculis erat. In lacinia, metus vitae dapibus auctor, tellus sem cursus risus, sit amet pulvinar nibh libero at sapien. Quisque cursus, ante pulvinar vulputate cursus, ligula nunc auctor diam, tincidunt rhoncus leo est ac sapien. Nulla feugiat odio enim, et placerat dui tempus at. Aenean ornare, lectus et dignissim ultrices, tellus est auctor nibh, vitae fermentum elit sem eu massa. Phasellus aliquet nibh ipsum, sit amet iaculis tellus aliquet ut. Donec et quam sed dui pretium bibendum a eget nunc.</p>
        </div>
        <Icons></Icons>
      </div>
      <Footer></Footer>
    </div>
  )
}

// npm run dev