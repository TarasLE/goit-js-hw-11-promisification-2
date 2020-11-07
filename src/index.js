import {users} from './constData'


const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  callback(updatedUsers);
};

// const logger = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);


// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);