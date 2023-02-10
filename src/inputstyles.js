import { css } from 'lit';

export const styles = css`
  input {
    margin: 0px;
    padding: 0px;
    display: block;
    border: none;
  }

  input {
    background: rgba(0, 0, 0, 0.42);
    padding: 5px;
    color: #ffffff;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
  input[type='number'] {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    -moz-appearance: textfield; /* Firefox */
  }

  p {
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  p#metrica {
    text-align: right;
    top: 5px;
    color: #ffffff;
    position: absolute;
    right: 10px;
  }

  div {
    position: relative;
    width: min-content;
  }
`;
