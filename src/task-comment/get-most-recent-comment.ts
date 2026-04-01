import { ClickUpComment } from '../types/task-comments-type.js';
import { getClickupAllTaskComments } from '../api/clickup-api.js';

export async function getCommentByAssigneeIdAndPullRequestUrl(taskId: string, assigneeId: number, pullRequestUrl: string): Promise<ClickUpComment> {
    const data = await getClickupAllTaskComments(taskId);

    return data.comments.filter(comment =>
            comment.user.id === assigneeId &&
            comment.comment_text.includes(pullRequestUrl)
        )
        .sort((a, b) => Number(b.date) - Number(a.date))[0] as ClickUpComment;
}