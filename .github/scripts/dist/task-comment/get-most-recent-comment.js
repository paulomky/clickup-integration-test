import { getClickupAllTaskComments } from '../api/clickup-api.js';
export async function getCommentByAssigneeIdAndPullRequestUrl(taskId, assigneeId, pullRequestUrl) {
    const data = await getClickupAllTaskComments(taskId);
    return data.comments.filter(comment => comment.user.id === assigneeId &&
        comment.comment_text.includes(pullRequestUrl))
        .sort((a, b) => Number(b.date) - Number(a.date))[0];
}
//# sourceMappingURL=get-most-recent-comment.js.map