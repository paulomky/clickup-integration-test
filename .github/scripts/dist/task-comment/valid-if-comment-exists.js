import { env } from '../env.js';
import { getDefaultHeaders } from '../request-utils.js';
export async function getCommentByAssigneeIdAndPullRequestUrl(taskId, assigneeId, pullRequestUrl) {
    const url = `${env.clickUpUrl}/api/v2/task/${taskId}/comment?custom_task_ids=false`;
    const options = {
        method: 'GET',
        headers: getDefaultHeaders()
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        console.error('Erro:', await response.text());
        throw new Error(`Failed to fetch comments: ${response.statusText}`);
    }
    // console.log(await response.json())
    const data = await response.json();
    console.log(JSON.stringify(data));
    return await data.comments.find(comment => {
        comment.user.id == assigneeId && comment.comment_text.includes(pullRequestUrl);
    });
}
//# sourceMappingURL=valid-if-comment-exists.js.map