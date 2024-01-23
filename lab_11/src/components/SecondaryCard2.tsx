import Arrow from "../assets/icons/arrow.svg";

type SecondaryCard2Props = {
  buttonText: string;
  image: string;
};

function SecondaryCard2(props: SecondaryCard2Props): React.ReactNode {
  return (
    <>
      <div
        id="secondary-card-2"
        className="parent-column"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          aspectRatio: "391 / 353",
          borderRadius: 40,
          padding: 45,
        }}
      >
        <div className="child-row flex-grow"></div>
        <div className="child-row parent-row">
          <div className="child-column flex-grow"></div>
          <div
            className="child-column parent-row"
            style={{
              backgroundColor: "white",
              padding: "18px 25px",
              borderRadius: 100,
              gap: 12,
              alignItems: "center",
            }}
          >
            <div className="child-column" style={{ fontSize: 24 }}>
              {props.buttonText}
            </div>
            <div className="child-column">
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondaryCard2;
