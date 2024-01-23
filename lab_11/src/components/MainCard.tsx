type MainCardProps = {
  date: string;
  category: "Automóviles";
  title: string;
  image: string;
};

/*
 * @return {React.ReactNode} código válido para React
 */
function MainCard(props: MainCardProps): React.ReactNode {
  return (
    <>
      <div
        id="main-card"
        className="parent-row flex-grow"
        style={{
          padding: 45,
          backgroundImage: `url(${props.image})`,
          borderRadius: 40,
          aspectRatio: "1059 / 660",
          alignItems: "flex-start",
          backgroundSize: "cover",
          gap: 20,
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
          {props.date}
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
            {props.category}
          </div>
          <div
            className="child-row"
            style={{
              padding: "13px 19px",
              backgroundColor: "white",
              borderRadius: 25,
              borderTopLeftRadius: 0,
              fontSize: 30,
              maxWidth: 350,
            }}
          >
            {props.title}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard;
