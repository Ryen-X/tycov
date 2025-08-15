import { NextResponse } from 'next/server';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_BRANCH = process.env.REPO_BRANCH;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const path = url.pathname.replace('/api/image/', '');
    const githubUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/${REPO_BRANCH}/${path}`;
    const response = await fetch(githubUrl, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    console.log('GitHub response status:', response.status);

    if (!response.ok) {
      console.error('GitHub response error:', await response.text());
      return new NextResponse('Image not found', { status: 404 });
    }

    const image = await response.blob();
    return new NextResponse(image, {
      headers: {
        'Content-Type': 'image/webp',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
