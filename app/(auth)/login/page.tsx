import '../../page.module.css';
import LoginForm from './LoginForm';

type Props = { searchParams: { returnTo?: string | string[] } };

export default function LogInPage({ searchParams }: Props) {
  return (
    <div>
      <LoginForm returnTo={searchParams.returnTo} />
    </div>
  );
}
