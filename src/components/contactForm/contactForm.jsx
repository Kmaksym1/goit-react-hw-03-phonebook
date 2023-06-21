import { Component } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import * as yup from 'yup';
import css from '../contactForm/contactForm.module.css';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(7).max(12).required(),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = values => {
    this.props.createName({
      name: values.target.name.value,
      number: values.target.number.value,
    });
    this.setState({
      name: '',
      number: '',
    });
    useFormikContext().resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={schema}
      >
        <Form className={css.formContainer} onSubmit={this.handleSubmit}>
          <div className={css.imputName}>
            <label htmlFor="name" className="form-label">
              Name
              {/* <ErrorMessage name='name'/> */}
            </label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={css.imputString}
              onChange={this.handleInput}
              value={this.state.name}
            />

            <label htmlFor="name" className="form-label">
              Number
            </label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={css.imputString}
              onInput={this.handleInput}
              value={this.state.number}
            />
          </div>

          <button type="submit" className={css.addBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;
