const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysFiltered = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return journeysFiltered;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysFiltered = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return journeysFiltered;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const journeysTotalled = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
  return journeysTotalled;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportTypes = this.journeys.map((journey) => {
    return journey.transport;
  })
  const uniqueTransport = transportTypes.filter(function(item, index, array){
    return array.indexOf(item) === index;
  })
  return uniqueTransport;
  
};


module.exports = Traveller;
