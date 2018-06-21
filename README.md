# Steam-groups
This is an easy to use module that gets all the members from a steamgroup and outputs them as an object.
This module was made and published by [OlleThunberg](https://github.com/ThunbergOlle)

**Contribute:**[Github Rep](https://github.com/ThunbergOlle/steamgroup)



**Install**
```js
npm install node-steam-group --save
```
**Import**
```js
const steamgroup = require('node-steam-group');
```

## Methods
```js
const steamgroup = require('node-steam-group');
steamgroup.getmembers(function(err, callback){});
```
## Example
**You can copy and paste this!**
```js
const steamgroup = require('node-steam-group');
steamgroup.getmembers("unturnedgametrade", function(err, members){ //Calls the function
console.log(members);   //Logs all the members recieved
});
```
**Output**
```
[ '76561198089544929',
  '76561198336175675',
  '76561198155355891',
  '76561198084135141',
  '76561198183606787',
  '76561198271237346',
  '76561198363049941',
  '76561198356899796',
  '76561198371743116' ]
```

### More info
I'm really **happy** if you'd like to share this module or use this in your upcomming bot or script or whatever you are going to use this for. If you feel like there is anything missing then please open an issue on the [Github](https://github.com/ThunbergOlle/steamgroup) page. I will fix it as soon as possible.

## License
MIT License

Copyright (c) 2018 Olle Thunberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
