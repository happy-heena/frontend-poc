import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getUsers } from '@modules/sample';

function Sample() {
  const { post, users } = useSelector((state) => state.sample);
  const { GET_POST: loadingPost, GET_USERS: loadingUsers } = useSelector(
    (state) => state.loading,
  );
  const dispatch = useDispatch();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      const fn = async () => {
        try {
          await dispatch(getPost(1));
          await dispatch(getUsers());
        } catch (e) {
          console.log(e);
        }
      };
      fn();
    }
  }, [dispatch]);

  return (
    <div>
      <section>
        <h1>POST</h1>
        {loadingPost && 'loading...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>User List</h1>
        {loadingUsers && 'loading...'}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Sample;
