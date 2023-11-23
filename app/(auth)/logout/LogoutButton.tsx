import React from 'react';
import styles from '../../page.module.css';
import { logout } from './actions';

export default function LogoutButton() {
  return (
    <form>
      <button className={styles.logoutButton} formAction={logout}>
        Logout{' '}
      </button>
    </form>
  );
}
