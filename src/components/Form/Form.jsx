import { Component } from 'react';
import css from './Form.module.css';
import css from '../App.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onSubmitAddContact = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  onChangeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.formStyle} onSubmit={this.onSubmitAddContact}>
        <label className={css.labelForm}>
          Name
          <input
            className={css.inputForm}
            type="text"
            name="name"
            value={name}
            required
            onChange={this.onChangeInput}
          />
        </label>
        <label className={css.labelForm}>
          Phone number
          <input
            className={css.inputForm}
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.onChangeInput}
          />
        </label>
        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
