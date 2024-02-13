import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contactsArr, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              deleteContact={deleteContact}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
};
