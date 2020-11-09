import Link from 'next/link';
import styles from 'styles/Orbiter.module.scss';

interface OrbiterProps {
  size?: number | string;
  bgColor?: string;
  animationDuration?: string;
  link: string;
}

const Orbiter = ({
  size = '100%',
  bgColor = 'white',
  animationDuration = '100s',
  link,
}: OrbiterProps) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        width: size,
        height: size,
      }}
    >
      <Link href={link} scroll={false}>
        <a className={styles.innerWrapper}>
          <div className={styles.svgWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <circle
                cx="50%"
                cy="50%"
                r="49%"
                fill="transparent"
                stroke="#818181"
                strokeWidth="1"
                strokeDasharray="3 2"
              />
            </svg>
          </div>
          <div
            className={styles.orbitalBodyContainer}
            style={{
              animationDuration,
            }}
          >
            <div
              className={styles.orbitalBody}
              style={{
                backgroundColor: bgColor,
              }}
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Orbiter;
