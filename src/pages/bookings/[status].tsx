import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  console.log(JSON.stringify(router.query, null, 2));
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>This is the bookings/[status] page.</h1>

        <div>
          <pre>
            <code>{JSON.stringify(router.query, null, 2)}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Home;
