import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function Users({ users }) {
  // const [users, setUsers] = useState([]);

  // const fetchUsers = async () => {
  //   const response = await axios.get(
  //     'https://jsonplaceholder.typicode.com/users'
  //   );
  //   const data = await response.data;

  //   setUsers(data);
  // };

  // console.log(users);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

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
