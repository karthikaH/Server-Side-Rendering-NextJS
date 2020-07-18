import Head from 'next/head';
import Card from '../../components/card/card';
import css from './index.module.scss';

const MyPost = () => (
    <>
        <Head>
            <title>My Post</title>
            <meta name="description" content="My first post in Next JS app"></meta>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Card>
        <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}} />
        <div class={css.container}>
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
        </Card>
    </>
);

export default MyPost;