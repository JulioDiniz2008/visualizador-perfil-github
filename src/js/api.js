const BASE_URL = 'https://api.github.com';

export async function fetchUserProfile(userName) {
    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Erro ao buscar perfil do usuário: ${error.message}`);
    }
}

export async function fetchGithubUserRepos(UserName) {
    const response = await fetch(`${BASE_URL}/users/${UserName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error("Repositórios não encontrados");
    }
    return await response.json();
}
