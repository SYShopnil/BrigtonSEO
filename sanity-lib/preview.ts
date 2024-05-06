import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from '@root/sanity-lib/client';

export const usePreview = definePreview({
  projectId,
  dataset,
});
