import css from '../contactList/contactList.module.css';

export const Filter = ({ onChange }) => {
  return (
    <div className={css.findCOntacts}>
      <p className="form-label">Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.inputFindContacts}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
};
