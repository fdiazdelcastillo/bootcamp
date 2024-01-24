import Arrow2 from "../icons/arrow-2.svg";

type BroadCastProps = {
  callToAction: string;
};

function BroadCast(props: BroadCastProps): React.ReactNode {
  return (
    <>
      <div
        id="broadcast"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 25,
        }}
      >
        <div
          className="call-to-action"
          style={{
            fontSize: 63,
            fontWeight: "500",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          {props.callToAction}
        </div>
        <div
          style={{
            backgroundColor: "#b8d3d8",
            padding: "30px 60px",
            borderRadius: 1000,
          }}
        >
          <img src={Arrow2} width={50} height={50} alt="Arrow 2" />
        </div>
      </div>
    </>
  );
}

export default BroadCast;
