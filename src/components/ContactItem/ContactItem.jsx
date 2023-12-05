import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <li className={css.listItem} key={id}>
    <p>
      {name}: {number}
    </p>
    <button
      className={css.buttonItem}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
