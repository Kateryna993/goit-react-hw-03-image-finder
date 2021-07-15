import { Component } from 'react';
import toast from 'react-hot-toast';
import style from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter keyword to seach images!');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <div>
        <header className={style.Searchbar}>
          <form onSubmit={this.handleSubmit} className={style.SearchForm}>
            <button type="submit" className={style.SearchFormButton}>
              <span className={style.SearchFormBtnlabel}>Search</span>
            </button>

            <input
              onChange={this.handleChange}
              value={this.state.query}
              className={style.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;
