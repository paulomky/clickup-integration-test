if (!process.env.CI) {
  await import('dotenv/config');
}

interface EnvType {
    clickUpUrl: string;
    branchName: string;
    taskId: string;
    clickUpToken: string;
    assigneeId: number;
    commentBody: string;
    githubUser: string;
    pullRequestUrl: string;
    targetBranch: string;
}

const branch = process.env.BRANCH_NAME;
const taskId = branch?.split("/")[1] ?? null;

export const env = {
    clickUpUrl: process.env.CLICKUP_URL,
    branchName: branch,
    taskId: taskId,
    clickUpToken: process.env.CLICKUP_TOKEN,
    assigneeId: parseInt(process.env.ASSIGNEE_ID ?? ''),
    commentBody: process.env.COMMENT_BODY,
    githubUser: process.env.GITHUB_USER,
    pullRequestUrl: process.env.PULL_REQUEST_URL,
    targetBranch: process.env.TARGET_BRANCH
} as EnvType;