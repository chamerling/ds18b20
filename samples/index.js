//
// Getting all sensors data...
//
// @chamerling
//

var sensor = require('..');

sensor.sensors(function(err, ids) {
  if (err) {
    return console.log('Can not get sensor IDs', err);
  }

  console.log('Sensor IDs', ids);
  ids.forEach(function(id) {
    sensor.temperature(id, function(err, result) {
      if (err) {
        console.log('Can not get temperature from sensor', err);
      } else {
        console.log('Sensor ' + id + ' :', result);
      }
    });
  });
});

sensor.sensors(function(err, ids) {
  if (err) {
    return console.log('Can not get sensor IDs', err);
  }

  console.log('Sensor IDs', ids);
  ids.forEach(function(id) {
    console.log('Sensor ' + id + ' (decimal) :' + sensor.temperatureSync(id));
    console.log('Sensor ' + id + ' (hex) :' + sensor.temperatureSync(id, {parser: 'hex'}));
  });
});
