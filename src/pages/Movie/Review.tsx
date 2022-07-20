import React from "react";
import { Author, ReviewContent } from "./styles";
type Props = {
  author: string;
  content: string;
};

const Review = ({ author, content }: Props) => {
  return (
    <ReviewContent>
      <article>
        <Author>
          <span>Author:</span>
          <h4>{author}</h4>
        </Author>
        <p>{content}</p>
      </article>
    </ReviewContent>
  );
};

export default Review;
