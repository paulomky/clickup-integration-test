if (!process.env.CI) {
    await import('dotenv/config');
}
const branch = process.env.BRANCH_NAME;
const taskId = branch?.split("/")[1] ?? null;
export const env = {
    clickUpUrl: process.env.CLICKUP_URL,
    branchName: branch,
    taskId: taskId,
    clickUpToken: process.env.CLICKUP_TOKEN,
    assigneeId: process.env.ASSIGNEE_ID,
    commentBody: process.env.COMMENT_BODY,
    githubUser: process.env.GITHUB_USER,
    pullRequestUrl: process.env.PULL_REQUEST_URL
};
//# sourceMappingURL=env.js.map