export const takeUsers = (state)=>{
    return state.FindUsersPage.users
}

export const takePageSize = (state)=>{
    return state.FindUsersPage.pageSize
}

export const takeUsersCount = (state)=>{
    return state.FindUsersPage.usersCount
}

export const takeCurrentPage = (state)=>{
    return state.FindUsersPage.currentPage
}

export const takeIsFetching = (state)=>{
    return state.FindUsersPage.isFetching
}

export const takeFollowingProgress = (state)=>{
    return state.FindUsersPage.followingProgress
}