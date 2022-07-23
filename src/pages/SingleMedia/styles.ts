import styled from "styled-components";

type PropsContent = {
  Background_Set: string;
};

export const Wrapper = styled.section`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div<PropsContent>`
  width: 100%;
  padding: 41px;
  background: ${(props) => props.Background_Set};
  article {
    padding: 20px;
    border-top: 1px solid #7e7a7a69;
    span {
      color: #646363;
      margin-right: 10px;
    }
    p {
      color: #e7e6e6;
      text-align: justify;
    }
  }
`;

export const Author = styled.div`
  margin: 1em 0;
  display: flex;
  width: 100%;
  align-items: flex-start;
  span {
    margin-left: 10px;
    color: #fff;
  }
  h4 {
    color: white;
  }
`;

export const NewCommentModel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background-color: #1e1d1d;
  form {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: none;
    width: 100%;
    margin: 0;
    button {
      width: auto;
      background: none;
      &:hover {
        background: none;
        color: red;
      }
    }
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

export const Title = styled.h1`
  font-size: clamp(0.5em, 2.5vw, 2em);
`;
