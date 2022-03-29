import { StyledHeader, Nav, Logo, Image } from "./NavBar.styled";
import { Container } from "../../components/styles/Container.styled";
import { Button } from "../../components/styles/Button.styled";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../components/styles/Global";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineDesktop } from "react-icons/ai";
export default function NavBar({}) {
  const [modalOpen, setModalOpen] = useState(false);
  let navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEmail("");
    setPassword("");
  };

  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#00333",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledHeader>
        <Container>
          <Nav>
            <a href="/">
              <Logo src="logo2.png" alt="" />
            </a>

            <a href="/register">
              <Button>새 게시글 쓰기</Button>
            </a>
            <Button onClick={openModal}>로그인</Button>
            <Modal open={modalOpen} close={closeModal} header="소셜 로그인">
              <a
                href={
                  "https://github.com/login/oauth/authorize" +
                  "?client_id=a3992310760bdbc99e31" +
                  "&redirect_uri=http://localhost:8080/user/signup/github" +
                  "&scope=user:email"
                }
              >
                <img
                  style={{ width: "100px", marginLeft: "20px" }}
                  src="Naver.png"
                />
              </a>
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
        </Container>
      </StyledHeader>
    </ThemeProvider>
  );
}
