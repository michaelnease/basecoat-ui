import React, { Component, useState } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;

    return isError ? <div>There was an Error.</div> : this.props.children;
  }
}
