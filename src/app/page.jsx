import Image from "next/image";
import styles from "@/styles/layout/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.sectionContainer}>
        <div className={styles.overlay} />
        <article>
          <h1>Movieverse Marvel Quest</h1>
          <p>Updated daily to bring you the latest titles.</p>
          <Link href="/movies">Get Started</Link>
        </article>
        <article>
          <Image
            src="/babygroot.png"
            alt="baby groot"
            width={650}
            height={750}
            layout="intrinsic"
          />
        </article>
      </section>
    </main>
  );
}
