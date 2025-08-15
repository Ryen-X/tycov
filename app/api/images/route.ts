import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const GITHUB_USERNAME = 'Ryen-X';
const GITHUB_REPO = 'tycov-img';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

interface GitHubFile {
  name: string;
  path: string;
  type: string;
  // Add other properties if needed, but these are sufficient for current usage
}

const fetchGitHubDirectory = async (directory: string): Promise<GitHubFile[]> => {
  const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${directory}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch directory ${directory}: ${response.statusText}`);
  }

  return response.json();
};

export async function GET() {
  try {
    const aiFiles = await fetchGitHubDirectory('output-webp/ai');
    const realFiles = await fetchGitHubDirectory('output-webp/real');

    const aiImageUrls = aiFiles
      .filter((file: GitHubFile) => file.name.endsWith('.webp'))
      .map((file: GitHubFile) => ({
        type: 'ai',
        url: `/api/image/${file.path}`,
      }));

    const realImageUrls = realFiles
      .filter((file: GitHubFile) => file.name.endsWith('.webp'))
      .map((file: GitHubFile) => ({
        type: 'real',
        url: `/api/image/${file.path}`,
      }));

    const manifest = {
      images: [...aiImageUrls, ...realImageUrls],
    };

    const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

    return NextResponse.json({ message: 'Manifest generated successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate manifest' }, { status: 500 });
  }
}
