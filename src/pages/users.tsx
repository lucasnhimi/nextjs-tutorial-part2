import axios from 'axios';
import Link from 'next/link';
import { User } from '../../api/User';

export interface UsersProps {
  users?: User;
}

function Users({ users }: UsersProps) {
  return (
    <div>
      {users.map((user) => (
        <div>
          <Link href='/profile/[id]' as={`/profile/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  const data = await response.data;

  return {
    props: { users: data }, // will be passed to the page component as props
  };
}

export default Users;
