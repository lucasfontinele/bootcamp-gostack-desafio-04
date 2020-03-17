import React from 'react'
import PropTypes from "prop-types";

import Avatar from "../Avatar";
import { Container, InfoWrapper, Content, Divisor, CommentsContainer } from "./styles";
import PostCommment from '../PostComment';

export default function PostItem({ data }) {
  return (
    <Container>
      <InfoWrapper>
        <Avatar src={data.author.avatar} alt="User picture" />
        <div>
          <p>{data.author.name}</p>
          <p>{data.date}</p>
        </div>
      </InfoWrapper>
      <Content>{data.content}</Content>
      <Divisor />
      <CommentsContainer>
        {data.comments.map(comments => (
          <PostCommment key={comments.id} comments={comments} />
        ))}
      </CommentsContainer>
    </Container>
  )
}

PostItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    date: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
      }),
      date: PropTypes.string,
      content: PropTypes.string,
    }))
  }),
}
