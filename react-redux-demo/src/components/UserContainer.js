import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  userLogin, userLogout, userCreatePost, fetchUsers,
} from '../redux';

function UserContainer(props) {
  const [postInput, setPostInput] = useState('');

  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
      <h3>{`Login status: ${props.loggedIn}`}</h3>
      <button onClick={props.userLogin}>Login</button>
      <button onClick={props.userLogout}>Logout</button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (postInput.length > 0) {
            props.userCreatePost(postInput);
          }
        }}
      >
        <input onChange={(e) => setPostInput(e.target.value)} type="text" />
        <button type="submit">Create post</button>
      </form>
      <ul>
        {props.posts.map((post) => (
          <li>{post}</li>
        ))}
      </ul>

      <ul>
        {props.userData.users
          ? props.userData.users.map((user) => (
            <li>{`User ID: ${user.id}. UserName: ${user.name} `}</li>
          ))
          : null}
        {props.userData.error ? <li>oops something went wrong</li> : null}
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.user.loggedIn,
  posts: state.user.posts,
  userData: state.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  userLogin: () => dispatch(userLogin()),
  userLogout: () => dispatch(userLogout()),
  userCreatePost: (post) => dispatch(userCreatePost(post)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
