# AriaNg
[![GitHub license](https://img.shields.io/github/license/free-bots/AriaNg?style=for-the-badge)](https://github.com/free-bots/AriaNg/blob/botsFlavor/LICENSE)
[![Lastest Release](https://img.shields.io/github/release/free-bots/AriaNg.svg?style=for-the-badge)](https://github.com/free-bots/AriaNg/releases)

## Introduction
AriaNg is a modern web frontend making [aria2](https://github.com/aria2/aria2) easier to use. AriaNg is written in pure html & javascript, thus it does not need any compilers or runtime environment. You can just put AriaNg in your web server and open it in your browser. AriaNg uses responsive layout, and supports any desktop or mobile devices.

## Features
1. Pure Html & Javascript, no runtime required
2. Responsive design, supporting desktop and mobile devices
3. User-friendly interface
    * Sort tasks (by name, size, progress, remaining time, download speed, etc.), files, bittorrent peers
    * Search tasks
    * Retry tasks
    * Adjust task order by dragging
    * More information of tasks (health percentage, client information of bt peers, etc.)
    * Filter files by specified file types (videos, audios, pictures, documents, applications, archives, etc.) or file extensions
    * Tree view for multi-directory task
    * Download / upload speed chart for aria2 or single task
    * Full support for aria2 settings
4. Dark theme
5. Url command line api support
6. Download finished notification
7. Multi-languages support
8. Multi aria2 RPC host support
9. Exporting and Importing settings support
10. Less bandwidth usage, only requesting incremental data
11. Configuration usage across multiple clients *(DO NOT USE THIS IF YOUR AriaNg DEPLOYMENT IS PUBLIC ACCESSIBLE! EVERYONE COULD USE YOUR SECRETS!)*
    - Modify example-default-config.json and rename it to config.json. AriaNg fetches the config and overwrites the local configuration in your browser, this allows you to define for example a default list of hosts.
    - The easiest way is to configure all your settings in the browser and use the export functionality then paste the exported config in config.json

## Screenshots
#### Desktop
![AriaNg](https://raw.githubusercontent.com/mayswind/AriaNg-WebSite/master/screenshots/desktop.png)
#### Mobile Device
![AriaNg](https://raw.githubusercontent.com/mayswind/AriaNg-WebSite/master/screenshots/mobile.png)

## Installation
AriaNg now provides three versions, standard version, all-in-one version and [AriaNg Native](https://github.com/mayswind/AriaNg-Native). Standard version is suitable for deployment in the web server, and provides on-demand loading. All-In-One version is suitable for local using, and you can download it and just open the only html file in browser. [AriaNg Native](https://github.com/mayswind/AriaNg-Native) is also suitable for local using, and is no need for browser. 

#### Prebuilt release
Latest Release: [https://github.com/free-bots/AriaNg/releases](https://github.com/free-bots/AriaNg/releases)

#### Building from source
Make sure you have [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Then download the source code, and follow these steps.

##### Standard Version

    $ npm install
    $ npm run build

##### All-In-One Version

    $ npm install
    $ gulp clean build-bundle

The builds will be placed in the dist directory.

#### Usage Notes
Since AriaNg standard version loads language resources asynchronously, you may not open index.html directly on the local file system to run AriaNg. It is recommended that you can use the all-in-one version or deploy AriaNg in a web container or download [AriaNg Native](https://github.com/mayswind/AriaNg-Native) that does not require a browser to run.

## Documents
1. [English](http://ariang.mayswind.net)
2. [Simplified Chinese (简体中文)](http://ariang.mayswind.net/zh_Hans)

## Demo
Please visit [http://ariang.mayswind.net/latest](http://ariang.mayswind.net/latest)

## Third Party Extensions
There are some third-party applications based on AriaNg, so you can use AriaNg in more scenarios or devices. Please visit [Third Party Extensions](http://ariang.mayswind.net/3rd-extensions.html) for more information.

## License
[MIT](https://github.com/mayswind/AriaNg/blob/master/LICENSE)
