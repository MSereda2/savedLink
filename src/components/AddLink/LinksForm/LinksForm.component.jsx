import React from 'react';
import style from './linkForm.module.scss';
import {reduxForm, Field} from 'redux-form';

// Components
import Btn from '../../shared/Btn/Btn.component';
import Input from '../../shared/Input/Input.component';
import Select from '../../shared/Select/Select.component';

// Validators
import { requiredField } from '../../../helpers/validators/validators';

const LinksForm = (props) => {

  return(
    <form onSubmit={props.handleSubmit} className={style.formGroup}>
       <div>
         <div className={style.formGroup__item}>
            <p className={style.formGroup__text}>Название</p>
             <Field validate={[requiredField]} autoComplete='off' component={Input} name="title"  placeholder="Название" type="text" />
         </div>
         <div className={style.formGroup__item}>
            <p className={style.formGroup__text}>Ссылка</p>
            <Field validate={[requiredField]} autoComplete='off' component={Input} name="link"  placeholder="Ссылка" type="text" />
         </div>
         <div className={style.formGroup__item}>
            <p className={style.formGroup__text}>Категория</p>
            <Field validate={[requiredField]} component={Select} name="category" />
         </div>
       </div>
       <div>
         <Btn text="Создать ссылку" />
       </div>
      
    </form>
  )
}

export default reduxForm({
    form: 'links',
    initialValues: {
      title: '',
      link: '',
      category: ''
    }
  })
(LinksForm);