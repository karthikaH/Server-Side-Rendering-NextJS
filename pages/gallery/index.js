import fetch from 'node-fetch';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import css from './index.module.scss';
import Card from '../../components/card/card';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('./ImageCard'),
  { loading: () => <p>...</p> }
)

/** Static site Generation */
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const allImages = await res.json();

    return {
        props: {
            allImages: allImages.slice(0, 1001),
        }
    }
  }

const GallaryImages = ({ allImages }) => {
    return (
        <>
            <Head>
            <title>My Gallery</title>
            <meta name="description" content="My Gallery"></meta>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={css.mainContainer}>
                <section className={css.curved}>
                    <div className={css.title}>My Gallery</div>
                </section>
                {/* {allImages.map(imgDet => {
                    return (
                        <Card key={imgDet.id}>
                            <img
                                src={imgDet.url}
                                alt={imgDet.title}
                                style={{ width: "100%"}}
                                loading="lazy"   // not working in static site generation
                            />
                            <div className={css.container}>
                                <h2><b>John Doe</b></h2> 
                                <p>{imgDet.title}</p> 
                            </div>
                        </Card>
                    )
                })} */}
                <DynamicComponentWithCustomLoading allImages={allImages} />
            </div>
        </>
    )
}

export default GallaryImages;
