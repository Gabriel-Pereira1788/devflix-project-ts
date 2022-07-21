import { formatDate } from "../../utils/formatDate";
import { Author, ReviewContent } from "./styles";
type Props = {
  author: string;
  content: string;
  created_at: string;
};

const Review = ({ author, content, created_at }: Props) => {
  return (
    <ReviewContent>
      <article>
        <Author>
          <h4>{author}</h4>
          <span>{formatDate(created_at)}</span>
        </Author>
        <p>{content}</p>
      </article>
    </ReviewContent>
  );
};

export default Review;
