import Head from 'next/head';
import Link from 'next/link';

import css from './index.module.scss';

/** Static site Generation */
export async function getStaticProps() {
  const allPostsData = [{name: 'karthika'}];
  return {
      props: {
      allPostsData
      }
  }
}

const Home = ({ allPostsData }) => {
  console.log(allPostsData);
  return (
    <div className={css.container}>
      <Head>
        <title>Learning Server Side Rendering</title>
        <meta name="description" content="New Beginnings, New Learnings"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={css.title}>
          Welcome to Server Side Rendering(SSR)!
        </h1>

        <p className={css.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={css.grid}>
          <Link href="/posts">
            <a
              className={css.card}
            >
              <h3>My First Post - SSR &rarr;</h3>
              <p>
                Stay Tunned!
              </p>
            </a>
          </Link>
          <Link href="/gallery">
            <a
              className={css.card}
            >
              <h3>My Image Gallery &rarr;</h3>
              <p>
                Stay Tunned!
              </p>
            </a>
          </Link>
        </div>
        <div>Created By: {allPostsData?.[0].name}</div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={css.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home;
