import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../../../components/button/Button';

import './style.scss';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthList: [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
      ]
    }
  }

  render() {
    const article = this.props.data;

    const date = new Date(article.date);
    const dateString = `${date.getDate()} ${this.state.monthList[date.getMonth()]}`;

    const tags = article.tags.map(tag => {
      return (
        <li key={tag.id} className='hash-tags__item'>
          <Link className='hash-tags__link' to='/'>
            #{tag.value}
          </Link>
        </li>
      );
    });

    return (
      <article className='post main-block'>
        {article.headingImg ? (
          <Link className='post__heading-link' to={article.headingImg.link}>
            <img
              className='post__heading-img'
              srcSet={article.headingImg.srcSet}
              height={article.headingImg.height}
              width={article.headingImg.width}
              alt={article.headingImg.alt}
            />
          </Link>
        ) : null}
        <header className='post__header'>
          <Link className='post__mark' to='/'>I Do {article.mark}</Link>
          <div className='post__date'>{dateString}</div>
          <h2 className='post__heading'>{article.title}</h2>
        </header>
        <div className='post__content'>
          {article.contentSnippet}
        </div>
        <footer className='post__footer'>
          <Button value='Read more' type='button' />
          <ul className='hash-tags'>
            {tags}
          </ul>
        </footer>
      </article>
    );
  }
}

Article.propTypes = {
  data: PropTypes.object
};