import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Editor from '@components/write/Editor';
import { changeField, initialize } from '@modules/write';

function EditorContainer() {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(
    () => () => {
      dispatch(initialize());
    },
    [dispatch],
  );

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
}

export default EditorContainer;
