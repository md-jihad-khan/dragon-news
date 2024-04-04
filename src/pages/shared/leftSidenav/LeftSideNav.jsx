import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl">All Categories</h2>

      <div className="mt-3">
        {categories.map((category) => (
          <Link
            to={`category/${category.id}`}
            className="block ml-4 mb-3 "
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
