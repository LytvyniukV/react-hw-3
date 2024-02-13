import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
export const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <div className={css.contactWrap}>
        <p className={css.text}>
          <FaUser className={css.icon} size={15} /> {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} size={15} /> {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};
