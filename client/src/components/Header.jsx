import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import React, { useState } from "react";
import Modal from "../Modal";
import styled from "styled-components";
export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="../public/logo2.png" alt="" />
          <Button>새 게시글 쓰기</Button>
          <Button onClick={openModal}>로그인</Button>
          <Modal open={modalOpen} close={closeModal} header="소셜 로그인">
            <img
              style={{ width: "100px", marginLeft: "20px" }}
              src="Naver.png"
            />
            <img
              style={{ width: "100px", marginLeft: "20px" }}
              src="Kakaotalk.png"
            />
            <img
              style={{ width: "100px", marginLeft: "20px" }}
              src="Google.png"
            />
          </Modal>
        </Nav>
        <Flex>
          <div>
            <h1> 모각코 같이 하실 분! 어디 없나요?</h1>
            <p>
              Cocodus에서 모각코 같이 할 사람을 구해보세요! <br></br>
              멋진 아이디어, 취업 준비를 위한 공부, 알고리즘 스터디 등 <br></br>
              따로 또는 같이 코딩할 멤버를 쉽게 만나보세요.
            </p>

            <Button bg="#D27E25" color="#fff">
              멤버 모집하기
            </Button>
          </div>

          <Image src="TeamWork.png" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
