import React from 'react';
import './directory.styles.scss';
import CategoryItem from '../category-item/catrgory-item.component';

const Directory = ({categories}) => {
  return (
    
       <div className="categories-container">
      {categories.map((category) => (
       <CategoryItem category={category} key={category.id} />
      ))}
      
    </div>
    
  )
}

export default Directory
