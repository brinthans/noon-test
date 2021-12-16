import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Noongram</h1>
      <div className="nav-btns">
        <Link href="/">
          <StyledNavButton>
            <FontAwesomeIcon icon={faHome} size="2x" color="#000" />
          </StyledNavButton>
        </Link>
        <Link href="/favorites">
          <StyledNavButton>
            <FontAwesomeIcon icon={faHeart} size="2x" color="#000" />
          </StyledNavButton>
        </Link>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: #a9a9a980 1px solid;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: left;
  padding-left: 1rem;
  height: 3.2rem;
  align-items: center;

  .nav-btns {
    visibility: hidden;
    opacity: 0;
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-around;

    .nav-btns {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const StyledNavButton = styled.span`
  padding: 0 0.4rem;
  border-radius: 5px;
  transform: scale(0.8);
  background-color: #fff;
  border: none;
  cursor: pointer;
`;
