import React from 'react';
import { connect } from 'react-redux';
import { buyCookie } from '../redux';

function CookieContainer(props) {
  return (
    <div>
      <h3>
Num of Cookies -
        {props.numOfCookies}
      </h3>
      <button onClick={props.buyCookie}>Buy Cookie</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCookies: state.cookies.numOfCookies,
});

const mapDispatchToProps = (dispatch) => ({
  buyCookie: () => dispatch(buyCookie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CookieContainer);
