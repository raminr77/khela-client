import { useParams } from 'react-router';

export function UserPage() {
  const { userId } = useParams();

  return (
    <div>
      <h3>User - {userId}</h3>
    </div>
  );
}
