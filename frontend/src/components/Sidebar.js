import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed;
  width: 110px;
  height: 1687px;
  z-index: 1;
  top: 145px;
  left: 0px;
  overflow-x: hidden;
  padding-top: 10px;
  background: #283848 0% 0% no-repeat padding-box;
  box-shadow: 3px 0px 10px #00000029;
  opacity: 1;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path: "/" /* path is used as id to check which NavItem is active basically */,
          name: "Home",
          css: "home-icon",
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
        },
        {
          path: "/maskgroup",
          name: "Mask Group",
          css: "mask-group-24",
          key: 2,
        },
        {
          path: "/notifications",
          name: "Notifications",
          css: "bell",
          key: 3,
        },
        {
          path: "/record",
          name: "Record",
          css: "record",
          key: 3,
        },
        {
          path: "/card",
          name: "Card",
          css: "card-payment",
          key: 4,
        },
        {
          path: "/box",
          name: "Box",
          css: "group-4282",
          key: 5,
        },
        {
          path: "/level",
          name: "Level And Bonuses",
          css: "lavels-bonuses",
          key: 5,
        },
      ],
    };
  }

  onItemClick = (path) => {
    this.setState({ activePath: path });
  };

  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {items.map((item) => {
          return (
            <NavItem
              path={item.path}
              name={item.name}
              css={item.css}
              onItemClick={this.onItemClick}
              active={item.path === activePath}
              key={item.key}
            />
          );
        })}
      </StyledSideNav>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; 
  position:relative;
  left:14px;
  text-align: center;
  margin-bottom: 0; 
  a {
    font-size: 2.7em;
    color: ${(props) => (props.active ? "white" : "#9FFFCB")};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}

const NavIcon = styled.div``;

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
