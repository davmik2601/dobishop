import React from 'react';
import { useParams } from 'react-router';
import NotFound from '../../components/NotFound';

const AdminRender = () => {

  const generatePage = (pageName) => {

    const component = () => require(`../../pages/admin/${pageName}`).default;

    try {
      return React.createElement(component());
    } catch (err) {
      return <NotFound />
    }
  }

  const { page } = useParams();

  return generatePage(page);
}

export default AdminRender;
