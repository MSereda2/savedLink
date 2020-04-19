import React from 'react';
import style from './input.module.scss';

const Input = ({input, meta, ...props}) => {

  const hasError = meta ? meta.touched && meta.error : undefined ;


  return(
      <div className={`${style.form__controls} ${hasError && style.error}`}>
        <input {...input} {...meta} {...props} />
        {hasError && <span>{meta.error}</span>}
      </div>
      
    
  )
 
}

export default Input