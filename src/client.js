import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: "9h3mur6w",
  dataset: "production",
  useCdn: true,
});

export default client

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}