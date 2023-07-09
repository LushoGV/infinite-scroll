import { Doc } from "../interfaces";

type Props = {
  element: Doc;
};

const Card = ({ element }: Props) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        fontWeight: 500,
        padding: "4px",
        marginBottom: "5px",
      }}
    >
      <span>{element.title}</span>
    </li>
  );
};

export default Card;
