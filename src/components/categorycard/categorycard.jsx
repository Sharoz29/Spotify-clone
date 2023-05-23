import "./categorycard.css";

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card-container">
      <img className="category-img" src={category?.icons[0]?.url} alt="" />
      <h3 className="category-name">{category.name}</h3>
    </div>
  );
};
export default CategoryCard;
