import { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Button.module.css';

// const loadMoreButton = ({ onFetchImages, children }) => (
//   <div>
//     <button type="button" onClick={onFetchImages}>
//       {children}
//     </button>
//   </div>
// );

// loadMoreButton.propTypes = {
//   onFetchImages: PropTypes.func,
//   children: PropTypes.string,
// };

// export default loadMoreButton;
