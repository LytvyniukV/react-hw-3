import css from './SearchBox.module.css';
import { useId } from 'react';
export const SearchBox = ({ value, onChange }) => {
  const inputId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={inputId} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={css.input}
        name="name"
        id={inputId}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
