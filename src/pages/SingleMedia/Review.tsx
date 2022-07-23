import { formatDate } from "../../utils/formatDate";
import { Content, Author } from "./styles";
type Props = {
  author: string;
  content: string;
  created_at: string;
};

const Review = ({ author, content, created_at }: Props) => {
  return (
    <Content Background_Set="none">
      <article>
        <Author>
          <h4>{author}</h4>
          <span>{formatDate(created_at)}</span>
        </Author>
        <p>{content}</p>
      </article>
    </Content>
  );
};

export default Review;
