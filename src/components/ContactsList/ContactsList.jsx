import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactsList.module.css';

export const ContactList = ({ contactsArr, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <ContactItem
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
