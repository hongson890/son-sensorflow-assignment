interface RootState {
  users: []
}

export const getUsers = (state: RootState) => state.users
