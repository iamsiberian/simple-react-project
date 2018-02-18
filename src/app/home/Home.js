import React from 'react';

import Article from './blocks/article/Article';

import data from '../../../public/api/articles';
import './style.scss';

export default class Home extends React.Component {
  render() {
    const articles = data.articles.map(article => {
      return <Article key={article.id} data={article} />;
    });

    return (
      <section className='main-feed'>
        {articles}
      </section>
    );
  }
}
