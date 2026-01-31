import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice";

function Filter({ category }) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <p onClick={() => {
        dispatch(filterCategory(category));
      }}
      className={
        selectedCategory === category
          ? "categoryButtonSelected categoryButton"
          : "categoryButton"
      }> {category}
    </p>
  );
}

export default Filter;
