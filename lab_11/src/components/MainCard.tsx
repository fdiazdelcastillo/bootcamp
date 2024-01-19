import Rivian from "../assets/images/rivian.jpg";

type MainCardProps = {
  fecha: string;
  categoría: "Automóviles";
  título: string;
};

/*
 * @return {React.ReactNode} código válido para React
 */
function MainCard(props: MainCardProps): React.ReactNode {
  return (
    <>
      <div
        id="main-card"
        className="parent-row"
        style={{
          padding: 45,
          backgroundImage: `url(${Rivian})`,
          borderRadius: 40,
          aspectRatio: "1059 / 660",
          alignItems: "flex-start",
        }}
      >
        <div
          className="child-column"
          style={{
            padding: "13px 19px",
            backgroundColor: "white",
            borderRadius: 100,
            fontSize: 15,
          }}
        >
          {props.fecha}
        </div>
        <div className="child-column flex-grow"></div>
        <div
          className="child-column parent-column"
          style={{
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
          <div
            className="child-row"
            style={{
              padding: "13px 19px",
              backgroundColor: "white",
              borderRadius: 100,
              fontSize: 15,
            }}
          >
            {props.categoría}
          </div>
          <div
            className="child-row"
            style={{
              padding: "13px 19px",
              backgroundColor: "white",
              borderRadius: 25,
              borderTopLeftRadius: 0,
              fontSize: 30,
              width: 350,
            }}
          >
            {props.título}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard;