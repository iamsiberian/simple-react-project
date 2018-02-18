import React from 'react';

import Button from '../../components/button/Button';
import FormField from '../../components/formField/FormField';
import RadioButton from '../../components/radioButton/RadioButton';


import './style.scss';

export default class About extends React.Component {
  render() {
    return (
      <section className='main-feed'>
        <article className='about main-block'>
          <header className='about__header'>
            <h2 className='about__heading'>About</h2>
          </header>
          <form className='about__form'>
            <FormField
              label='First Name'
              type='text'
              name='firstName'
              placeholder='Your First Name'
            />
            <FormField
              label='Last Name'
              type='text'
              name='lastName'
              placeholder='Your Last Name'
            />
            <FormField
              label='E-mail'
              type='email'
              name='email'
              placeholder='Email'
            />
            <FormField
              label='Phone'
              type='text'
              name='phoneNumber'
              placeholder='+_ (___) ___-__-__'
            />
            <FormField
              label='Date of Birth'
              type='text'
              name='date'
              placeholder='DD/MM/YYYY'
            />
            <fieldset className='about__fieldset'>
              <legend>Sex</legend>
              <RadioButton
                label='Male'
                name='sex'
                value='male'
              />
              <RadioButton
                label='Female'
                name='sex'
                value='female'
              />
            </fieldset>
            <Button classes='about__button' type='submit' value='Submit' />
          </form>
        </article>
      </section>
    );
  }
}