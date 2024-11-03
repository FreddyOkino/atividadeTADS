export function primeirosUsuarios(data) {
    const primeirosUsuarios = [...data]
        .sort((a, b) => new Date(a.starred_at) - new Date(b.starred_at))
        .slice(0, 5);

    return primeirosUsuarios?.map(entry => ({
        name: entry.user.name,
        handle: `@${entry.user.login}`,
    }))

}

export function recentesUsuarios(data) {
    const recentesUsuarios = [...data]
        .sort((a, b) => new Date(b.starred_at) - new Date(a.starred_at))
        .slice(0, 5);

    return recentesUsuarios?.map(entry => ({
        name: entry.user.name || entry.user.login,
        handle: `@${entry.user.login}`,
    }))
}

export function popularesUsuarios(data) {
    const popularesUsuarios = [...data]
        .sort((a, b) => b.user.followers - a.user.followers)
        .slice(0, 5);

    return popularesUsuarios?.map(entry => ({
        name: entry.user.name || entry.user.login,
        handle: `@${entry.user.login}`,
        followers: entry.user.followers,
    }))
}