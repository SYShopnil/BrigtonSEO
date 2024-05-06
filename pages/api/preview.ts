// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { slugsQuery } from '@sanity-lib/queries/pages';
import { previewClient } from '@sanity-lib/client';

/**
 * Redirect to preview page with API token in the response header.
 * @param res
 * @param Location
 */
function redirectToPreview(res: NextApiResponse, Location: string) {
  res.setPreviewData({ token: process.env.SANITY_API_TOKEN });
  res.writeHead(307, { Location });
  res.end();
}

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret, slug, type } = req.query;

  if (!secret) {
    return res.status(401).json({ message: 'No secret token' });
  }

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  if (!slug) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  /**
   * Check if the page with the given `slug` exists
   * If the slug doesn't exist prevent preview mode from being enabled
   * TODO: This needs to be updated
   */
  if (type && slug !== 'undefined') {
    const page = await previewClient.fetch(slugsQuery, {
      slug,
      type,
    });

    if (!page) {
      return res.status(401).json({ message: 'Invalid slug' });
    }
  }

  /**
   * Switch case to return correct route according to page type.
   */
  switch (type) {
    case 'homepage':
      return redirectToPreview(res, '/');
    default:
      return res.status(401).json({ message: 'Unregistered page type' });
  }
}
