import { useRouter } from 'next/router';
import { useState } from 'react';

const UsernameInfo = () => {
  const router = useRouter();
  const { username, info } = router.query;
  const [name, setName] = useState('?');

  return (
    <div>
      <h1 className="title">{username},s</h1>
    </div>
  );
};

export default UsernameInfo;
