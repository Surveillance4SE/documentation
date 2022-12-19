import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Real Time Detections',
    Svg: require('@site/static/img/undraw_surveillance_re_8tkl.svg').default,
    description: (
      <>
        Get notified in real time when a camera captures an intrusion.
      </>
    ),
  },
  {
    title: 'Intrusion Playback.',
    Svg: require('@site/static/img/undraw_video_files_fu10.svg').default,
    description: (
      <>
        On demand access to video recordings of the captured intrusions.
      </>
    ),
  },
  {
    title: 'Premisse Management.',
    Svg: require('@site/static/img/undraw_safe_re_kiil.svg').default,
    description: (
      <>
        Manage properties and staff and install new cameras on a friendly UI.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
