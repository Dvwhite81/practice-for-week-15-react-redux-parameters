import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SingleArticle.css";

const SingleArticle = () => {
  const articles = useSelector((state) => state.articleState.entries);
  const { id } = useParams();

  const article = articles.find((item) => item.id === id);
  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt="home" />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
