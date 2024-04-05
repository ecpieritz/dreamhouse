export default function Titles(props) {
  return (
    <div className="dhTitles">
      <h2>{props.title}</h2>
      <h5>{props.subtitle}</h5>
    </div>
  );
}