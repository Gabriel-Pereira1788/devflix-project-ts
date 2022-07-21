import { useAuthContext } from "../../contexts/AuthContext";
import { NewReviewModel, User, TextArea } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { useInsertData } from "../../hooks/useInsertData";
type Props = {
  media_id: string;
};

const NewReview = ({ media_id }: Props) => {
  const { user } = useAuthContext();
  const [reviewText, setReviewText] = useState<string>("");
  const [error, setError] = useState<string>();

  const { insertDocument, response } = useInsertData("reviews");

  const handleSubmit = () => {
    console.log(reviewText);

    setError("");

    insertDocument({
      content: reviewText,
      uid: user!.uid,
      author: user!.displayName,
      media_id: media_id,
    });
  };

  return (
    <NewReviewModel>
      <User>
        <span>{user?.displayName}</span>
        <PersonIcon />
      </User>
      <div>
        <TextArea
          placeholder="Conte sua opinião sobre o show ..."
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        />
        {!response.loading && <button onClick={handleSubmit}>Enviar</button>}
        {response.loading && (
          <button onClick={handleSubmit} disabled>
            carregando...
          </button>
        )}
      </div>
    </NewReviewModel>
  );
};

export default NewReview;
