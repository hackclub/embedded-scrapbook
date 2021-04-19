import Posts from 'scrapbook-grid';
import { useRouter } from "next/router";
import Head from 'next/head'

const App = (props) => {
  const router = useRouter();
  let colors = {};
  Object.keys(router.query).map((x) => {
    if (x.includes("colors")) {
      colors[x.replace("colors-", "")] = router.query[x];
    }
  });
  return (
    <>
      <Head>
        {router.query.css && (
          <link
            rel="stylesheet"
            type="text/css"
            href={`https://scrapbook.hackclub.com/api/css?url=${router.query.css}`}
          />
        )}
      </Head>
      <Posts
        posts={props.initialData}
        hideReactions={router.query.reactions == "false" ? true : false}
        profile
        fonts={
          router.query.fonts
            ? { body: `${router.query.fonts}` }
            : { body: '"Baloo 2"' }
        }
        colors={colors}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const initialData = await fetch('https://scrapbook.hackclub.com/api/posts/').then(r=> r.json())
  return { props: { initialData }, revalidate: 1 }
}

export default App
