import React from "react";

type link = {
  url: string;
  name: string;
};

type HeaderProps = {
  brand: string;
  links: link[];
};

function Header(props: HeaderProps): React.ReactNode {
  let linkItems: React.ReactNode[] = [];

  for (let i = 0; i < props.links.length; i++) {
    const link = props.links[i];

    linkItems = [
      ...linkItems,
      <a
        href={link.url}
        className="child-column"
        style={{
          fontSize: 15,
          textDecoration: "none",
          color: "black",
        }}
      >
        {link.name}
      </a>,
    ];
  }

  return (
    <>
      <div id="header" className="child-row parent-row">
        <div
          className="child-column parent-row"
          style={{
            gap: 50,
            alignItems: "center",
          }}
        >
          <div
            className="child-column"
            style={{
              fontSize: 35,
              fontStyle: "italic",
            }}
          >
            {props.brand}
          </div>
          <div
            id="links"
            className="child-column parent-row"
            style={{
              gap: 25,
            }}
          >
            {linkItems}
          </div>
        </div>
        <div className="child-column flex-grow"></div>
        <div
          className="child-column"
          style={{
            padding: "13px 25px",
            border: "1px solid black",
            borderRadius: 100,
          }}
        >
          Menú
        </div>
      </div>
    </>
  );
}

export default Header;
