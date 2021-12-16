import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <Link href="/">
        <StyledButton>
          <FontAwesomeIcon icon={faHome} size="2x" color="#000" />
        </StyledButton>
      </Link>
      <Link href="/favorites">
        <StyledButton>
          <FontAwesomeIcon icon={faHeart} size="2x" color="#000" />
        </StyledButton>
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  bottom: 0;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 768px) {
    visibility: hidden;
    opacity: 0;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;
