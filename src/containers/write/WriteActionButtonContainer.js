import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WriteActionButtons from '@components/write/WriteActionButtons';
import { writePost } from '@modules/write';

function WriteActionButtonContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }

    if (postError) {
      console.log(postError);
    }
  }, [post, postError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
}

export default WriteActionButtonContainer;
