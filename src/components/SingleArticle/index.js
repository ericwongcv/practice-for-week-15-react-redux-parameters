import { useParams } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();

  const obj = articles.find((object) => object.id === id) || "";

  return (
    <div className="singleArticle">
      <h1>{obj.title}</h1>
      <img src={obj.imageUrl} alt="home" />
      <p>{obj.body}</p>
    </div>
  );
};

export default SingleArticle;
