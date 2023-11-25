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
    router.refresh();

    // console.log('Check: ', data);
  }

  return (
    <div>
      <div className={styles.authBackground}>
        <div className={styles.authCard}>
          <div className={styles.authPageTitle}>
            <h1 className={styles.heading}>Log in</h1>
          </div>
          <div className={styles.containerAuth}>
            <form onSubmit={async (event) => await handleRegister(event)}>
              <div>
                <label>
                  <div className={styles.authTextStyling}>Username</div>
                  <input
                    className={styles.inputField}
                    type="username"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.currentTarget.value)}
                  />
                </label>
              </div>
              <br />

              <div>
                <label>
                  <div className={styles.authTextStyling}>Password</div>
                  <input
                    className={styles.inputField}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                  />
                </label>
              </div>
              <br />
              <div>
                <button className={styles.submitButton}>Log in</button>
              </div>
              {errors.map((error) => (
                <div className="error" key={`error-${error.message}`}>
                  Error: {error.message}
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
