import Posts from "@hackclub/scrapbook-grid";
import { useRouter } from "next/router";
import Head from 'next/head'

function App(props){
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
        posts={props.initialData.posts}
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


export const getServerSideProps = async (context) => {
  console.log(context.params)
  console.log('hi!')
  const initialData = await fetch(
    `https://scrapbook.hackclub.com/api/users/${context.params.username}`
  ).then((r) => r.json());
  return { props: { initialData } };
};

export default App;
