import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: "Burr, it's cold!",
    iconName: 'snowflake',
  },
};

class SeasonDisplay extends React.Component {
  getSeason(lat, mon) {
    return lat < 0 && (mon > 2 || mon < 8) ? 'winter' : 'summer';
  }

  render() {
    const season = this.getSeason(this.props.latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-topleft massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-bottomright massive ${iconName} icon`} />
      </div>
    );
  }
}

export default SeasonDisplay;
