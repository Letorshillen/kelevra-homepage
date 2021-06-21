import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "mifiu6aq",
  dataset: "production",
  apiVersion: "2021-06-21",
  useCdn: true,
});
