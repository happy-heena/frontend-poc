import React from 'react';
import styled from 'styled-components';
import palette from '@lib/styles/palette';
import Responsive from '@components/common/Responsive';
import Button from '@components/common/Button';
import SubInfo from '@components/common/SubInfo';
import Tags from '@components/common/Tags';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  &.first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

function PostItem() {
  return (
    <PostItemBlock>
      <h2>제목</h2>
      <SubInfo username="username" publishedDate={new Date()} />
      <Tags tags={['태그1', '태그2', '태그3']} />
      <p>포스트 내용의 일부분...</p>
    </PostItemBlock>
  );
}

function PostList() {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button $cyan to="/write">
          새 글 작성하기
        </Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  );
}

export default PostList;
