import css from '../contactList/contactList.module.css';

const ContactList = ({ contacts, del }) => {

  return (
    <div className="contactsContainer">
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            <li key={id} className={css.liContainer}>
              {name}: {number}
              <button
                type="button"
                className={css.delBtn}
                onClick={() => del(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


export default ContactList;
