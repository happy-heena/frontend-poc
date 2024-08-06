import React from 'react';
import HeaderContainer from '@containers/common/HeaderContainer';
import PostList from '@components/post/PostList';

function PostListPage() {
  return (
    <>
      <HeaderContainer />
      <PostList />
    </>
  );
}

export default PostListPage;
