'use client';
import { useState } from 'react';
import styles from '../page.module.css';

export default function LogIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className={styles.heading}>Log in</h1>
      <div className={styles.container}>
        <form onSubmit={handleLogin}>
          <label>
            {' '}
            Username:
            <input
              className={styles.inputField}
              type="username"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <br />

          <label>
            {' '}
            Password:
            <input
              className={styles.inputField}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className={styles.submitButton}>Log In</button>
        </form>
      </div>
    </div>
  );
}
