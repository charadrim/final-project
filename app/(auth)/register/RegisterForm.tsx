'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterResponseBodyPost } from '../../api/(auth)/register/route';
import styles from '../../page.module.css';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

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
        username,
        password,
      }),
    });
    const data: RegisterResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.push('/');

    // console.log('Check: ', data);
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
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
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
          {errors.map((error) => (
            <div key={`error-${error.message}`}>Error: {error.message}</div>
          ))}
        </form>
      </div>
    </div>
  );
}

// export default function RegisterForm() {
//   return <div>registration</div>;
// }
