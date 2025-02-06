export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN } = Object.assign(__vite_import_meta_env__, { SANITY_TOKEN: "skDPuEZGfyOW83oTq6YG5NkUhj3ateHBiPeME6pz9HqhKHH33nykdus7qf7ndj1gGdRfFuPhe5nIoi9M08dot4F2JMKz74quKbONslfG9tqN5YDuCXSmUBkWimBnjYghD4jNOmVhUAAMG6I2MzcGHzCfj7hY571s073JwCfMamcmP2XicaeD", SANITY_PROJECT_ID: "swaaax0t", SANITY_DATASET: "production", OS: process.env.OS });
const checkIfEmailExists = async (email) => {
  try {
    const query = `*[_type == "subscriptions" && email == "${email}" ]`;
    const response = await fetch(
      `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
const POST = async ({ request }) => {
  const { email } = await request.json();
  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
      headers: {
        "Content-type": "application/json"
      }
    });
  }
  const existingSubscriber = await checkIfEmailExists(email);
  if (existingSubscriber.result.length > 0) {
    return new Response(JSON.stringify({ error: "Email already exists" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const mutations = {
    mutations: [
      {
        create: {
          _type: "subscriptions",
          email
        }
      }
    ]
  };
  try {
    const response = await fetch(
      `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${SANITY_DATASET}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${SANITY_TOKEN}`
        },
        body: JSON.stringify(mutations)
      }
    );
    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: {
        "Content-type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
