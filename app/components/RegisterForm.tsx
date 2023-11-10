'use client';

import { useState } from 'react';
import styles from '../page.module.css';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // const handleRegister = async (e: FormEvent) => {
  //   e.preventDefault();
  //   await Promise.resolve();
  // };

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        userName,
        password,
      }),
    });
    const data = response.json();

    console.log('Check: ', data);
  }

  return (
    <div>
      <h1 className={styles.heading}>Register</h1>
      <div className={styles.container}>
        <form onSubmit={async (event) => await handleRegister(event)}>
          <label>
            {' '}
            Email:
            <input
              className={styles.inputField}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
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
              onChange={(event) => setUserName(event.currentTarget.value)}
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
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </label>
          <br />
          <button className={styles.submitButton}>Register</button>
        </form>
      </div>
    </div>
  );
}
