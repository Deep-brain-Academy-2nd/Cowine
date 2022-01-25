import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onLogout = () => {
    setIsLogin(false);
  };
  const handleKeyword = () => {};

  return (
    <Base>
      <Navigation>
        <Menulist>
          <Menu>
            <DefaultLink href="/">
              <TextLogo>
                <span>CoWine</span>
              </TextLogo>
            </DefaultLink>
          </Menu>
          <Menu>
            <Link to="/wine">
              <MenuButton>와인찾기</MenuButton>
            </Link>
            <Link to="/evaluation">
              <MenuButton>와인평가하기</MenuButton>
            </Link>
          </Menu>
          <SearchMenu>
            <SearchContainer>
              <SearchFormWrapper>
                <SearchForm>
                  <SearchLabel>
                    <AiOutlineSearch />
                    <SearchInput
                      placeholder="와인 검색"
                      onChange={handleKeyword}
                    />
                  </SearchLabel>
                </SearchForm>
              </SearchFormWrapper>
            </SearchContainer>
          </SearchMenu>
          {isLogin ? (
            <Menu>
              <SignUpBtn onClick={() => onLogout()}>로그아웃</SignUpBtn>
            </Menu>
          ) : (
            <>
              <Menu>
                <Link to="/login">
                  <SignInBtn>로그인</SignInBtn>
                </Link>
              </Menu>
              <Menu>
                <Link to="/signup">
                  <SignUpBtn>회원가입</SignUpBtn>
                </Link>
              </Menu>
            </>
          )}
        </Menulist>
      </Navigation>
    </Base>
  );
};

export default Header;

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  text-align: center;
  box-shadow: rgb(0 0 0 / 10%) 5px 3px 5px 1px;
  width: 100%;
  height: 62px;
  z-index: 10;
`;

const Navigation = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Menulist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: hidden;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  /* 첫번째 항목이 아닐때 margin-left: 24px */
  &:not(:first-child) {
    margin-left: 24px;
  }
`;

const MenuButton = styled.button`
  font-size: 15px;
  color: rgb(126, 126, 126);
  cursor: pointer;
  border: none;
  background: none;
`;

const SearchMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  position: relative;
`;

const DefaultLink = styled.a`
  text-decoration: none;
`;

const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: rgb(165, 0, 0);
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label`
  background: rgb(245, 245, 247);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-radius: 2px;
  padding: 7px 8px;
`;

const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  width: 100%;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  /* 검색어 길어지면 말줄임표 */
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
`;

const SignInBtn = styled.button`
  background: transparent;
  color: rgb(116, 116, 123);
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  font-size: 14px;
  padding: 0;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 12px 0;
  border-radius: 5px;
  > a {
    text-decoration: none;
    color: gray;
  }
`;

const SignUpBtn = styled.button`
  border-radius: 5px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  font-size: 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 6px 0;
  > a {
    text-decoration: none;
    color: rgb(53, 53, 53);
  }
`;
