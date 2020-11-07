import {users} from './constData'


const toggleUserState = (allUsers, userName) => {
  const updatedUsers = new Promise((resolve) => {
  resolve(
    allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    ))
  })
  return updatedUsers;
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
