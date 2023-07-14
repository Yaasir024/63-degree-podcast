import * as prismic from "@prismicio/client";

// Create a Prismic client
const apiEndpoint = "https://63-degree-podcast.cdn.prismic.io/api/v2";
const accessToken =
  "MC5aTEUwZXhJQUFDQUFiM0xR.F--_vTd377-9N--_ve-_ve-_vUNHVO-_vQQT77-977-977-977-977-977-9X--_vWPvv71t77-9L--_vXYUMg"; // If required
const client = prismic.createClient(apiEndpoint);


export const getPreviousPost = (date) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await client.getAllByType("podcasts", {
        pageSize: 1,
        filters: [
          prismic.filter.dateBefore("document.first_publication_date", date),
        ],
      });
      let refinedResponse;
      if (response.length >= 1) {
        refinedResponse = {
            uid: response[0].uid,
            podcast_name: response[0].data.podcast_name
        };
      } else {
        refinedResponse = null;
      }
      resolve(refinedResponse);
    } catch {
      reject(error);
    }
  });
};
export const getNextPost = (date) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await client.getAllByType("podcasts", {
        pageSize: 1,
        filters: [
          prismic.filter.dateAfter("document.first_publication_date", date),
        ],
      });
      let refinedResponse;
      if (response.length >= 1) {
        refinedResponse = {
            uid: response[0].uid,
            podcast_name: response[0].data.podcast_name
        };
      } else {
        refinedResponse = null;
      }
      resolve(refinedResponse);
    } catch {
      reject(error);
    }
  });
};
