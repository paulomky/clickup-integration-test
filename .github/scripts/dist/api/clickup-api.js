import { env } from "../env.js";
export async function createClickUpComment(taskId, assigneeId, commentText) {
    const url = `${env.clickUpUrl}/api/v2/task/${taskId}/comment?custom_task_ids=false`;
    const options = {
        method: 'POST',
        headers: getDefaultHeaders(),
        body: JSON.stringify({
            notify_all: false,
            assignee: assigneeId,
            comment_text: commentText
        })
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        console.error('Erro:', await response.text());
        throw new Error(`Failed to fetch comments: ${response.statusText}`);
    }
    const data = await response.json();
    console.info(`Comentário ${data.id} criado com sucesso!`);
    return await data;
}
export async function updateClickUpComment(commentId, assigneeId, commentText) {
    const url = `${env.clickUpUrl}/api/v2/comment/${commentId}`;
    const options = {
        method: 'PUT',
        headers: getDefaultHeaders(),
        body: JSON.stringify({
            resolved: false,
            comment_text: commentText,
            assignee: assigneeId
        })
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        console.error('Erro:', await response.text());
        throw new Error(`Failed to fetch comments: ${response.statusText}`);
    }
    console.info(`Comentário ${commentId} atualizado com sucesso!`);
}
export async function getClickupAllTaskComments(taskId) {
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
    return await response.json();
}
function getDefaultHeaders() {
    return {
        'accept': 'application/json',
        'content-type': 'application/json;charset=utf-8',
        'Authorization': env.clickUpToken
    };
}
//# sourceMappingURL=clickup-api.js.map