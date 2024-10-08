import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { readPost, unloadPost } from '@modules/post';
import PostViewer from '@components/post/PostViewer';

function PostViewerContainer() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(
    ({ post: _post, loading: _loading }) => ({
      post: _post.post,
      error: _post.error,
      loading: _loading['post/READ_POST'],
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <PostViewer post={post} loading={loading} error={error} />;
}

export default PostViewerContainer;
