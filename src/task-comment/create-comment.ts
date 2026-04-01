import { getGithubUserInfo } from '../get-github-user-info.js';
import { env } from '../env.js';

const githubUserInfo = await getGithubUserInfo(env.githubUser);
const message = `Assignee: ${githubUserInfo.name} (${env.githubUser})
Linked Pull Request: ${env.pullRequestUrl}

---

${env.commentBody}`;

console.log(message);

const url = `${env.clickUpUrl}/api/v2/task/${env.taskId}/comment?custom_task_ids=false`
const options = {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json;charset=utf-8',
        'Authorization': env.clickUpToken
    },
    body: JSON.stringify({
        notify_all: false,
        assignee: env.assigneeId,
        comment_text: message
    })
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));