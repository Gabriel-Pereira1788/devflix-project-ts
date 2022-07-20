import styled from "styled-components";

export const bla = "bla";

export const ButtonsContainer = styled.div`
  width: 100%;
  align-items: flex-start;
  button {
    margin-right: 15px;
  }
`;

export const Wrapper = styled.section`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const ReviewContent = styled.div`
  background-color: #2e2c2c;
  box-shadow: 1px 2px 7px 1px #000000c7;
  border-radius: 5px;
  margin: 2% 0px;
  width: 85%;
  padding: 15px;
  article {
    span {
      color: #646363;
      margin-right: 10px;
    }
    p {
      text-align: justify;
    }
  }
`;

export const Author = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  h4 {
    color: white;
  }
`;

export const NewReviewModel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 85%;
  padding: 15px;
  border-radius: 5px;
  background-color: #1e1d1d;
  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const User = styled.div`
  margin: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s;
  span {
    margin-right: 10px;
    color: #999191f2;
  }
`;

export const TextArea = styled.textarea`
  padding: 15px;
  background: none;
  width: 100%;
  color: white;
  border-radius: 5px;
  margin: 0px 15px;
`;
