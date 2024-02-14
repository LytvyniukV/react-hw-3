import { useId } from 'react';
import css from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Min 3 symbols')
    .max(50, 'Too Long! Max 50 symbols')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short! Min 3 symbols')
    .max(50, 'Too Long! Max 50 symbols')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  const nameId = useId();
  const numberId = useId();
  const submitForm = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={submitForm}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameId}>
            name
          </label>
          <Field type="text" name="name" id={nameId} className={css.input} />
          <span className={css.error}>
            <ErrorMessage name="name" as="span" />
          </span>
        </div>

        <div>
          <label className={css.label} htmlFor={numberId}>
            number
          </label>
          <Field
            type="text"
            name="number"
            pattern="\+?[0-9\s\-\(\)]+"
            id={numberId}
            className={css.input}
          />
          <span className={css.error}>
            <ErrorMessage name="number" as="span" />
          </span>
        </div>

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
