import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  // componentDidMount is the second most used Lifecycle method after render
  // This runs after componentWillMount and is where we have all our http requests, ajax calls etc
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // // This runs before DidMount
  // componentWillMount() {
  //   console.log("component will mount");
  // }

  // // //The next two run when component updates (ie: changing its state)
  // // This one runs after componentWillUpdate
  // componentDidUpdate() {
  //   console.log("component did update");
  // }

  // // This one runs first
  // componentWillUpdate() {
  //   console.log("component will update");
  // }

  // // This runs when a component receives new properties
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps");
  // }

  // // The 'Will' components are being deprecated
  // // To replace componentWillReceiveProps we have:
  // static getDerivedStateFromProps(nextProps, PrevState) {
  //   return{
  //     test: 'something'
  //   }
  // }

  // // This one fires before mutations are made ie: before DOM is updated
  // getSnapshotBeforeUpdate(prevProps, PrevState) {
  //   console.group("Get snapshot before update");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
