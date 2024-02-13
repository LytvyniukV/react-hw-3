import css from './Notification.module.css';

export const Notification = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>
        There are no contacts in your phonebook. Please add your first contact!
      </p>
    </div>
  );
};
