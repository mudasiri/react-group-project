import React from 'react';

function Rocket() {
  return (
    <div className="rocket-info-container">
      <div className="rocket-img">
        <img src="https://i.imgur.com/azYafd8.jpg" alt="pic of a rocket" />
      </div>
      <div className="rocket-info">
        <h2>Falcon 1</h2>
        <p>
          The Falcon 1 was an expendable launch system privately developed and manufactured
          by SpaceX during 2006-2009. On 28 September 2008,
          Falcon 1 became the first privately-developed liquid-fuel launch
          vehicle to go into orbit around the Earth.
        </p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default Rocket;
