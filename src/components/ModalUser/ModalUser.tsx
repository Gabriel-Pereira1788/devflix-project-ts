import { useAuthContext } from "../../contexts/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
//icons
import PersonIcon from "@mui/icons-material/Person";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//styles
import {
  Modal,
  UserInterface,
  InfoUser,
  ExitModal,
  Title,
  LogoutUserSection,
} from "./styles";
import { User } from "../../GlobalStyles";
type Props = {
  setModalUserOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalUser = ({ setModalUserOn }: Props) => {
  const { user } = useAuthContext();
  const { signOutAccount } = useAuthentication();

  const handleSignOut = () => {
    signOutAccount();
    setModalUserOn(false);
  };

  return (
    <Modal>
      <UserInterface>
        <Title>
          <ExitModal>
            <button onClick={() => setModalUserOn(false)}>X</button>
          </ExitModal>

          <h1>devflix</h1>
        </Title>
        <InfoUser>
          <User>
            <span>{user?.displayName}</span>
            <PersonIcon />
          </User>
          <User>
            <span>{user?.email}</span>
            <FontAwesomeIcon icon={faEnvelope} color="white" />
          </User>
        </InfoUser>
        <LogoutUserSection>
          <button onClick={handleSignOut}>Sair</button>
        </LogoutUserSection>
      </UserInterface>
    </Modal>
  );
};

export default ModalUser;
