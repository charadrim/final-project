'use client';
import { useState } from 'react';
import styles from '../page.module.css';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className={styles.heading}>Create an account</h1>
      <div className={styles.container}>
        <form onSubmit={handleLogin}>
          <label>
            {' '}
            Email:
            <input
              className={styles.inputField}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
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
          <button className={styles.submitButton}>Create Account</button>
        </form>
      </div>
    </div>
  );
}
