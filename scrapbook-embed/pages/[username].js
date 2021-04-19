import Posts from "@hackclub/scrapbook-grid";
import { useRouter } from "next/router";
import Head from 'next/head'

const App = (props) => {
  console.log(props.initialData.posts)
  if(typeof props.initialData == "undefined"){
    props.initialData.posts = {}
  }
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

export const getStaticPaths = async () => {
  const { map } = require("lodash");
  const usernames = await fetch(
    "https://airbridge.hackclub.com/v0.1/Summer%20of%20Making%20Streaks/Slack%20Accounts" +
      `?select=${JSON.stringify({
        filterByFormula: "{Full Slack Member?} = 1",
        fields: ["Username"],
        sort: [{ field: "Streak Count", direction: "desc" }],
        maxRecords: 50,
      })}`
  )
    .then((r) => r.json())
    .then((u) => map(u, "fields.Username"));
  const paths = usernames.map((username) => ({ params: { username } }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  console.log(params.username)
  const initialData = await fetch(
    `https://scrapbook.hackclub.com/api/users/${params.username}`
  ).then((r) => r.json());
  return { props: { initialData }, revalidate: 1 };
};

export default App;
