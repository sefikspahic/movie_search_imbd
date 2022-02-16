import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavbarBrand, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { search } from "../../redux/Search/search.actions";
import { ReactComponent as IMDBLogo } from "../../assets/images/imd-logo.svg";

const Container = styled.div`
  position: relative;
  background-color: #fff;
  min-height: 75px;
  width: 100%;
  border: none;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
`;

const LogoSearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 75px;
  width: 100%;
  padding: 0 30px;
`;

const SearchBox = styled.div`
  position: relative;
  width: 300px;
`;

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const reDirect = () => {
    window.location.replace("http://localhost:3000/");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;

    setSearchValue(value);
  };
  const pathname = window.location.pathname;
  const handleOnClick = () => {
  
    dispatch(search(searchValue));
  };

  const handleOnClickEnter = (e) => {
    if (e.key === "Enter") {
      // window.location.reload();
      dispatch(search(searchValue));
      
    }
  };

  return (
    <Container>
      <LogoSearchContainer>
        <NavbarBrand>
          <IMDBLogo onClick={reDirect} width={80} height={40} />
        </NavbarBrand>
        <SearchBox className="input-group">
          <FormControl
            type="text"
            placeholder="Seach movie..."
            onChange={handleOnChange}
            onKeyDown={handleOnClickEnter}
          />
          <div className="input-group-append">
            <Button variant="warning" onClick={handleOnClick}>
              Submit
            </Button>
          </div>
        </SearchBox>
      </LogoSearchContainer>
    </Container>
  );
};

export default Header;
