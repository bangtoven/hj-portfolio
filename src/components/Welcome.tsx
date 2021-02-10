import React from "react";
import NavItem from "./NavItem";
// import { RouteComponentProps } from "react-router";
// props: RouteComponentProps<{}>
export default function WelcomePage() {
  return (
    <div>
      {/* <button
        onClick={() => {
          props.history.goBack();
        }}
      >
        Go back
      </button> */}
      <NavItem url="https://picsum.photos/200" name="About" />
      <NavItem url="https://picsum.photos/200" name="Work" />
      <NavItem url="https://picsum.photos/200" name="Exhibitions" />
      <NavItem url="https://picsum.photos/200" name="Contact" />
    </div>
  );
}
