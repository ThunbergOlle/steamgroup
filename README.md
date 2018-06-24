# Steam-groups
This is an easy to use module that gets all the members from a steamgroup and outputs them as an object.
This module was made and published by [OlleThunberg](https://github.com/ThunbergOlle).

Some methods requires **version 1.1** or **later** to be installed.

**Contribute:** [Github Rep](https://github.com/ThunbergOlle/steamgroup)


---
**Install**
```js
npm install node-steam-group --save
```
**Import**
```js
const steamgroup = require('node-steam-group');
```
---
## Methods
Get members of steamgroup
```js
const steamgroup = require('node-steam-group');
steamgroup.getmembers(steamgroup, function(err, data){});
```
- steamgroup: This is the steamgroup you want to get the members from.
- callback: This is the callback you get.
  - error: This gets the errors if there is any
  - data: This is the array of users steam64 id that's returned.

Get other useful information about the steam group. Please note that this requires version **1.1** or later.

Get other useful information about the steamgroup.
```js
const steamgroup = require('node-steam-group');
steamgroup.getstats(steamgroup, function(err, data){});
```
- steamgroup: The steamgroup you want to get the information from.
- callback: This is the callback function
  - err: This is the error message if there are any.
  - data.id: Gets the id of the group.
  - data.totalmembers: Gets the total amount of members of the group.
  - data.name: Gets the name of the steamgroup. (Not the URL)
  - data.headline: Gets the headline of the steamgroup.
  - data.icon: Gets the avatar icon URL of the steamgroup.
  - data.online: Gets the current amount of members that's online.
  - data.ingame: Gets the current amount of members that's in game.
  - data.inchat: Gets the current amount of members that's in chat.
#### Example in JS format
```js
steamgroup.getstats("unturnedgametrade", function(err, callback){
    console.log(callback.id);
    console.log(callback.name);
    console.log(callback.headline);
    //And so on. 
});
```

---
## Here are some examples
**You can copy and paste these!**

### Get the members from a steamgroup.
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
---
### Get all info about group
```js
steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group);
});
```

**Output**
```
{ totalmembers: [ '22' ],
  id: [ '103582791460358474' ],
  groupdetails:
   { groupName: [ 'UnturnedGame.com' ],
     groupURL: [ 'unturnedgametrade' ],
     headline: [ ' Giveaways and Community Group!' ],
     summary: [ '<a class="bb_link" href="htt...........
```
---
### Get the id of the group
```js
steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group.id);
});
```
**Output**
```
[ '103582791460358474' ]
```
---
### Get the amount of online members
```js
steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group.online);
});
```
**Output**
```
[ '4' ]
```
---
### Get the icon of the steamgroup
```js
steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group.icon);
});
```
**Output**
```
[ 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ce/ce99ef9c0cf05071aef380294f0cd9aefd431256.jpg' ]
```
---
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
