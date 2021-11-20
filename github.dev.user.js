// ==UserScript==
// @name         One Click to VS Code
// @name:zh-CN   一键直达 VS Code
// @namespace    https://github.com/jks-liu/github.dev.user.js
// @supportURL   https://github.com/jks-liu/github.dev.user.js
// @version      1.0.0
// @description  One Click to VS Code <https://github.dev>. <https://github.com/jks-liu/github.dev.user.js>
// @description:zh-CN   一键直达 VS Code <https://github.dev>。<https://github.com/jks-liu/github.dev.user.js>
// @author       Jks Liu (https://github.com/jks-liu)
// @license      MIT
// @match        https://github.com/*/*
// @icon         https://www.google.com/s2/favicons?domain=code.visualstudio.com
// ==/UserScript==


(function() {
    'use strict';

    // Link image
    var img = document.createElement("img");
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAh1JREFUOI2Nk01IVFEUx3/3vnnzXtkHFmIFJn0XmQgFQbsWtiiQwF1Qi4QWbsIQoVTCUFtZiygQChfRKiiEQmp2RZLRF+RARLUxECGcUMb3Me/e0+LppBg1B87iHO7/8jv/w4FKo+Npu9/3Mtg7FuZrHhXPLbVVReKu3CBrvcvMzrH/ZDMoTRKGU3OJ6c9UIL7LGq+NUgxikcQiJkZrp25jhmENQPubLX8XPxvFy7YRh2AtCCAgFiQxIKAZmhyhsXaaG/nXK8SdY69wsy3EAVgB5UCp9E1ElT/CgEapswRFcDJHGZqc5a3ApSefcN1jxGH60MlAFOYYbt0taMRKmiJofgbNGGtIDKCqefFZcLwGFhZSj62Fufkehk6dAMDyh8AubaFDPLblp0FVIxa0hl8FmJ35wZ3WuuWT7Xkci43Dcp2aeFMJ379AtIicGNhQDfX7VvkqdpHCLhGceXCcmnU5lHYIY9haD74PxqQkIhDYHq41DQDsehiJlJYTbK7KpRYrcJ0CV48o4iSPdlMSK1Dl9dP34XmKsJJAUzL3cTyI4wlund4EQG9TA2E0jpMFYyGKwM020zXxVZIEEcqZmthwpZbJwZlVA/e+H8X3W0iitF5I2HnoAGJMWqtKbqH73T18/zxJDMWIHY0HEWtBabBmcQv/ioHDbRSD66hM6rrSqIyHNXaqENkL/9WX4+J4u9v9Mdg+Mp9ff7tQPuffyOD5ICvN+/cAAAAASUVORK5CYII=";
    img.alt = "GOTO VS Code (github.dev)";

    var link = document.createElement("a");
    link.href = "https://github.dev" + document.querySelector("strong.mr-2.flex-self-stretch a").href.slice(18);
    link.appendChild(img);

    var user = document.querySelector("strong.mr-2.flex-self-stretch a").parentElement.parentElement.append(link);
})();
