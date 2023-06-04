import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { loadMemoFB, updateMemoFB } from "./redux/modules/memo";


const Card = (props) => {
  const my_lists = useSelector((state) => state.memo.list);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(loadMemoFB());
  }, []);

  return (
    <>
      {my_lists.map((list, index) => {
        return (
          <CardBox
            key={index}
            // 여기에서 completed를 짝수로 선언함! 짝수가 아닐 경우, 배경색이 변하도록 함.
            completed={list.completed % 2 === 0}
          >
            <Ul>
              <Li1>{list.word}</Li1>
              <Li>[{list.pinyin}]</Li>
              <Li3>{list.def}</Li3>
              <Li style={{ color: "#1554FF" }}>{list.ExEn}</Li>
              <Li style={{ color: "#1554FF" }}>{list.ExKo}</Li>
            </Ul>
            <Btns>
              <Btn
                onClick={() => {
                  dispatch(updateMemoFB(list.id, list.completed));
                }}
              > 
                // 완료가 되면 버튼글자가 ✔️로 바뀌게 함!
                {list.completed % 2 === 0 ? "완료" : "✔️"}
              </Btn>
              <Btn
                onClick={() => {
                  history.push(`/write/modifi/${(list.word, index)}`);
                }}
              >
                수정
              </Btn>
              <Btn
                onClick={() => {
                  history.push("/");
                }}
              >
                삭제
              </Btn>
            </Btns>
          </CardBox>
        );
      })}
    </>
  );
};

const CardBox = styled.div`
  border: 1px solid black;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

/* 여기에서 배경색을 바꿔줌! */
  background-color: ${(props) => (props.completed ? "transparent" : "#ddd")};
  &:hover {
    box-shadow: 5px 5px 20px #e6e6e6;
  }
`;

export default Card;