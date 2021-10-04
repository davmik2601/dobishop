import React from 'react';
import { useParams } from 'react-router';
import NotFound from '../components/NotFound';

const PageRender = () => {
  
  const generatePage = (pageName) => {
    
    const component = () => require(`../pages/${pageName}`).default;
    
    try {
      return React.createElement(component());
    } catch(err) {
      return <NotFound />
    }
  }

  const { page, id } = useParams();

  let pageName = '';

    if(!id) {
      pageName = `${page}`;
    }



  return generatePage(pageName);
}

export default PageRender
