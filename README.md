# Notchtify

Notchtify is a simple local music player with express server, you can add your custom songs in the ``./public/audio`` folder to play your songs in all on your local network, you can modify and use nginx to host in a virtual machine and access between a domain.

# Proyect Files
```bash
│   .env.example
│   app.js
│   LICENSE
│   package.json
│   README.md
│
├───public
│   ├───audio
│   │       song.mp3
│   │       somesong.mp3
│   │       moresong.mp3
│   │       music.mp3
│   │       song2.mp3
│   │       moremoresong.mp3
│   │
│   ├───css
│   │       style.css
│   │
│   ├───images
│   │       disk-default.png
│   │       mountains.jpg
│   │       nxt.png
│   │       pre.png
│   │
│   └───js
│           app.js
│           data.js
│
└───views
        index.ejs
```

## Installation

## Before you start

- Make sure you download de main Branch for new updates, then you have to open a terminal inside the repository clone and run the commands ``npm install`` to get the dependencies.
- You need nodejs v16 or above, recommended v18, you can download here: **[node.js](https://nodejs.org/)**.
- Make sure you download the latest version from npm, you can download here: ```npm i npm@latest``` 
- You need to download the latest version from Git, you can download here: **[Git](https://git-scm.com/downloads)** 

#### Main Library

```bash
$ npm install express # main library
```

### Setup

First you have to rename the file ``.env.example`` to ``.env``. Inside you can find the default port of the web server **80**, you can modify the port changing the **APP_PORT** value with the port that you prefer.

To add custom music you have to add the music in .mp3 format in the ``./public/audio`` folder, then you have to open this file and add the music in a format json like this:

```json
{
    "name": "Song Name",
    "path": "../audio/Song Name.mp3", // the path of the song (Recommend to drop all the songs inside the audio folder (/public/audio))
    "artist": "artist", // Artist Name (Optional)
    "cover": "" // Path of the cover Image (Optional) (Recommend to drop all the songs inside the cover folder (/public/cover))
},
```

If you want to add a cover for the song you have to put the path image in the cover section on the json, if you dont have a cover, No Problem! The program will use a default cover.

### Modify the Web Page

You can modify the Web Page, the main file is inside **views** folder, is in format .ejs but inside you can use HTML.


## Start the Player

To start the server you have to use the command **``npm start``**, If you want to run the Software in the backgroung I recommend you to use the package [pm2](https://www.npmjs.com/package/pm2) PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.

