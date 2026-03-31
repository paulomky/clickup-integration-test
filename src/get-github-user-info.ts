export interface GithubUser {
  login: string;
  name: string;
}

export async function getGithubUserInfo(githubUser: string): Promise<GithubUser> {
  const response = await fetch(`https://api.github.com/users/${githubUser}`);
  const data = await response.json() as Record<string, unknown>;

  return {
    login: data.login as string,
    name: data.name as string,
  };
}