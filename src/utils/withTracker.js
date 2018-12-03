import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

const { REACT_APP_GOOGLE_ANALYTICS_ID } = process.env;

GoogleAnalytics.initialize(REACT_APP_GOOGLE_ANALYTICS_ID);

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent { ...this.props } />;
    }
  };

  return HOC;
};

export default withTracker;
