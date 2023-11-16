'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';
import styles from '../../page.module.css';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data: LoginResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }
    // This way is not secure to do returnTo
    // if (props.returnTo) {
    //   router.push(props.returnTo);
    // }

    router.push(
      getSafeReturnToPath(props.returnTo) || `/profile/${data.user.username}`,
    );

    // console.log('Check: ', data);
  }

  return (
    <div>
      <h1 className={styles.heading}>Log in</h1>
      <div className={styles.container}>
        <form onSubmit={async (event) => await handleRegister(event)}>
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
          <button className={styles.submitButton}>Log in</button>
          {errors.map((error) => (
            <div className="error" key={`error-${error.message}`}>
              Error: {error.message}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
