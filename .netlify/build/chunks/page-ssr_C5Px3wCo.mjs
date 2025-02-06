/* empty css                                */
import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"swaaax0t","dataset":"production","useCdn":true}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
