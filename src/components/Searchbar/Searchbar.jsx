import { Component } from 'react';
import toast from 'react-hot-toast';

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
        <header className="Searchbar">
          <form onSubmit={this.handleSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              onChange={this.handleChange}
              className="SearchForm-input"
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

// export const SearchBar = ({ onSearch }) => {
//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch(e.target.elements.imageName.value);
//   };

//   return (
//     <header className="Searchbar">
//       <form onSubmit={handleSearch} className="SearchForm">
//         <button type="submit" className="SearchForm-button">
//           <span className="SearchForm-button-label">Search</span>
//         </button>

//         <input
//           className="SearchForm-input"
//           type="text"
//           //   autocomplete="off"
//           //   autofocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };
