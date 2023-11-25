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

    router.push(`/profile/${data.user.username}`);
    router.refresh();

    // console.log('Check: ', data);
  }

  return (
    <div>
      <div className={styles.authBackground}>
        <div className={styles.authCard}>
          <div className={styles.authPageTitle}>
            <h1 className={styles.heading}>Register</h1>
          </div>
          <div className={styles.containerAuth}>
            <form onSubmit={async (event) => await handleRegister(event)}>
              <div>
                <label>
                  <div className={styles.authTextStyling}>Email</div>
                  <input
                    className={styles.inputField}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </label>
              </div>
              <br />
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
                <button className={styles.submitButton}>Register</button>
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
