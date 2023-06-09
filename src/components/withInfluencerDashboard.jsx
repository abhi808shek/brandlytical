import React from 'react'
import InfluencerDashboard from '../pages/InfluencerDashboard';

const withInfluencerDashboard = (Component) => {
    return function WrappedComponent(props) {
        return (
          <InfluencerDashboard>
            <Component {...props} />
          </InfluencerDashboard>
        );
      };
}

export default withInfluencerDashboard