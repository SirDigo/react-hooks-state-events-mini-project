import React from "react";

function CategoryFilter({ categories, handleClick, selectedCategory }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map(category => { 
          const styleName = category === selectedCategory ? "selected" : "";
          return (<button onClick={e => handleClick(e)} key={category} className={styleName} value={category}>{category}</button>)
         })
      }
    </div>
  );
}

export default CategoryFilter;
