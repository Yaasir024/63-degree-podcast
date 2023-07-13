import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "https://63-degree-podcast.cdn.prismic.io/api/v2",
  clientConfig: {
    defaultParams: {
      routes: [
        {
          type: "home",
          path: "/",
        },
        {
          type: "episode",
          path: "/episode",
        },
      ],
    },
  },
});

export default prismic;
