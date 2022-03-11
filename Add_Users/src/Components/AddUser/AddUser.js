import React, { useState } from "react";
import styles from '../AddUser/AddUser.module.css'

const AddUser = ({onAddUser, onError}) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.length < 3) {
      onError('Please enter a valid name with at least 3 characters');
    }else if(age < 18) {
      onError('Your age should be at least 18');
    } else if(age > 150) {
      onError('Please enter a value less than 150');
    } else {
      const newUser = {
        username: name,
        age: age
      }
      onAddUser(newUser);
      setAge('');
      setName('');
    }
  }

  return (
    <form className={styles['main-form']} onSubmit={handleSubmit}>
      <div className={styles['form-control']}>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className={styles['form-control']}>
        <label htmlFor="username">Age(Year)</label>
        <input 
          type="number" 
          value={age} onChange={e => setAge(e.target.value)} 
        />
      </div>

      <div className={styles['form-control']}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default AddUser;