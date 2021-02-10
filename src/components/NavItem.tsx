import React from "react";

type NavItemProp = {
  url: string;
  name: string;
};

export default function NavItem({ url, name }: NavItemProp) {
  return (
    <div>
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
}
