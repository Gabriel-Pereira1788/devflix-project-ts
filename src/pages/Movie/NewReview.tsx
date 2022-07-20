import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { NewReviewModel, User, TextArea } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
type Props = {};

const NewReview = (props: Props) => {
  const { user } = useAuthContext();
  return (
    <NewReviewModel>
      <User>
        <span>{user?.displayName}</span>
        <PersonIcon />
      </User>
      <div>
        <TextArea placeholder="Set a new review..." />
        <button>submit</button>
      </div>
    </NewReviewModel>
  );
};

export default NewReview;
