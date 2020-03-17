import React from 'react'
import PropTypes from "prop-types";

import { Container, Content } from "./styles";
import Avatar from "../Avatar";

export default function PostCommment({ comments }) {
  return (
    <Container>
      <Avatar src={comments.author.avatar} alt="User picture" />
      <Content>
        <p>
          <span>{comments.author.name}{" "}</span>
          {comments.content}
        </p>
      </Content>
    </Container>
  )
}

PostCommment.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    date: PropTypes.string,
    content: PropTypes.string,
  }),
}
