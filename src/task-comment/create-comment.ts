import { getGithubUserInfo } from '../get-github-user-info.js';

const user = await getGithubUserInfo('paulomky');
console.log(user);