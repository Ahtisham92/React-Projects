// import { useState } from 'react';
import {data} from '../../data.js';
import styles from './UserList.module.css'

const UserList = ({users}) => {
  // const [users, setUsers] = useState(data); 

 
  const list = users.map((user, index) => {
    const userInfo = `${user.username} (${user.age})`
    return (
      <li key={index}>{userInfo}</li>
    );
  });
  // console.log(users);
  // console.table(users);
  return (
    <div className={styles['user-box']}>
      <ul>{list}</ul>
    </div>
  );
}

export default UserList;