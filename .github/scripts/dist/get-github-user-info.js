export async function getGithubUserInfo(githubUser) {
    const response = await fetch(`https://api.github.com/users/${githubUser}`);
    const data = await response.json();
    return {
        login: data.login,
        name: data.name,
    };
}
//# sourceMappingURL=get-github-user-info.js.map