# ds18b20

[![badge](https://travis-ci.org/chamerling/ds18b20?branch=master)](https://travis-ci.org/chamerling/ds18b20)

Get sensor data from ds18b20 connected to the Raspberry (GPIO w1 pin).

## Usage

### Drivers

1-Wire drivers need to be loaded in order to create the connection between the physical sensor and the rPI.
You can load them from the terminal (or from the bin/modules.sh script).

    sudo modprobe wire
    sudo modprobe w1-gpio
    sudo modprobe w1-therm

### Code

    var ds18b20 = require('ds18b20');
    ds18b20.sensors(function(err, ids) {
      // got sensor IDs ...
    });

    // ... async call
    ds18b20.temperature('10-00080283a977', function(err, value) {
      console.log('Current temperature is', value);
    });

    // ... or sync call
    console.log('Current temperature is' + ds18b20.temperatureSync('10-00080283a977'));

    // default parser is the decimal one. You can use the hex one by setting an option
    ds18b20.temperature('10-00080283a977', {parser: 'hex'}, function(err, value) {
      console.log('Current temperature is', value);
    });

    console.log('Current temperature is' + ds18b20.temperatureSync('10-00080283a977', {parser: 'hex'}));

## Develop

Install dev dependencies

    npm install

And check gulpfile...

## License

(The MIT License)

Copyright (c) 2013 - 2015 Christophe Hamerling &lt;christophe.hamerling@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
