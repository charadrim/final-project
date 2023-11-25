// import React from 'react';
// import styles from '../../page.module.css';
// import { logout } from './actions';

// export default function LogoutButton() {
//   return (
//     <form>
//       <button className={styles.logoutButton} formAction={logout}>
//         Logout{' '}
//       </button>
//     </form>
//   );
// }

'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from '../../page.module.css';
import { logout } from './actions';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };
  return (
    <form>
      <button
        className={styles.logoutButton}
        formAction={logout}
        onClick={handleLogout}
      >
        Logout
      </button>
    </form>
  );
}
