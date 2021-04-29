import Link from 'next/link';

const Users = ({ t }) => {
  return (
    <div>
      <h1>User page</h1>

      <div>
        <p>
          This page doesn't have getInitialProps. If so, and unfortunately all namespaces from
          translations will be loaded. Check the page source.
        </p>

        <p>
          To prevent this behavior add the getInitialProps and return an empty array on
          namespacesRequired property.
        </p>
      </div>

      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  )
};

// Users.getInitialProps = async () => {
//   console.log('Users.getInitialProps');

//   return {
//     namespacesRequired: [],
//   }
// };

export default Users;
