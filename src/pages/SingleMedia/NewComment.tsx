import { useAuthContext } from "../../contexts/AuthContext";
import { NewCommentModel, User, TextArea } from "./styles";
import PersonIcon from "@mui/icons-material/Person";

import { FormEvent, useState } from "react";
import { useInsertData } from "../../hooks/useInsertData";
//icons
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../components/Loading/Loading";
type Props = {
  media_id: string;
};

const NewReview = ({ media_id }: Props) => {
  const { user } = useAuthContext();
  const [commentText, setCommentText] = useState<string>("");
  const [error, setError] = useState<string>();

  const { insertDocument, response } = useInsertData("comments");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(commentText);

    setError("");

    insertDocument({
      content: commentText,
      uid: user!.uid,
      author: user!.displayName,
      media_id: media_id,
    });
  };

  return (
    <NewCommentModel>
      <User>
        <span>{user?.displayName}</span>
        <PersonIcon />
      </User>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder="Conte sua opinião sobre a obra ..."
          onChange={(e) => setCommentText(e.target.value)}
          required
          value={commentText}
        />
        {!response.loading && (
          <button>
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </button>
        )}
        {response.loading && (
          <button disabled>
            <Loading />
          </button>
        )}
      </form>
    </NewCommentModel>
  );
};

export default NewReview;
