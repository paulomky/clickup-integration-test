import { getGithubUserInfo } from '../get-github-user-info.js';
import { env } from '../env.js';
import { getCommentByAssigneeIdAndPullRequestUrl } from './get-most-recent-comment.js';
import { createClickUpComment, updateClickUpComment } from '../api/clickup-api.js';
const githubUserInfo = await getGithubUserInfo(env.githubUser);
const message = `Responsável: ${githubUserInfo.name} (${env.githubUser})
Linked Pull Request: ${env.pullRequestUrl}
Aplicado no ambiente: ${env.targetBranch}

--- Início do comentário ---

${env.commentBody}

--- Fim do comentário ---`;
const previousComment = await getCommentByAssigneeIdAndPullRequestUrl(env.taskId, env.assigneeId, env.pullRequestUrl);
if (previousComment != null) {
    const newComment = message + `\n\n\n*Comentário atualizado em ${new Date().toLocaleString('pt-BR', { hour12: false })}*`;
    await updateClickUpComment(previousComment.id, env.assigneeId, newComment);
}
else {
    await createClickUpComment(env.taskId, env.assigneeId, message);
}
//# sourceMappingURL=create-comment.js.map