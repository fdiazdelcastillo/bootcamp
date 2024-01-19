type SecondaryCard1Props = {
  categoría: string;
  producto: string;
  callToAction: string;
};

function SecondaryCard1(props: SecondaryCard1Props): React.ReactNode {
  return (
    <>
      <div
        id="secondary-card-1"
        className="parent-column"
        style={{
          padding: 45,
          backgroundColor: "#b8d3d8",
          borderRadius: 40,
          gap: 12,
          alignItems: "flex-start",
        }}
      >
        <div
          className="child-row"
          style={{
            padding: "13px 19px",
            border: "1px solid black",
            borderRadius: 100,
            fontSize: 15,
          }}
        >
          · {props.categoría}
        </div>
        <div className="child-row" style={{ fontSize: 30 }}>
          {props.producto}
        </div>
        <div
          className="child-row"
          style={{ fontSize: 15, textDecoration: "underline" }}
        >
          {props.callToAction}
        </div>
      </div>
    </>
  );
}

export default SecondaryCard1;
