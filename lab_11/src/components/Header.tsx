type HeaderProps = {
  título: string;
  opcionesDeNavegación: string[];
  menú: string;
};

function Header(props: HeaderProps): React.ReactNode {
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
            {props.título}
          </div>
          <div
            className="child-column parent-row"
            style={{
              gap: 25,
            }}
          >
            <div
              className="child-column"
              style={{
                fontSize: 15,
              }}
            >
              {props.opcionesDeNavegación[0]}
            </div>
            <div
              className="child-column"
              style={{
                fontSize: 15,
              }}
            >
              {props.opcionesDeNavegación[1]}
            </div>
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
          {props.menú}
        </div>
      </div>
    </>
  );
}

export default Header;
