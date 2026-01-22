import "./HelpBox.css";

type HelpBoxProps = {
  title: string;
  text: string;
};

const HelpBox = ({ title, text }: HelpBoxProps) => {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

export default HelpBox;
