Applitools is the  proud sponsor of this hackathon

![applitools](https://user-images.githubusercontent.com/10160787/86256908-886abc00-bbc1-11ea-914c-c008705a071a.jpeg)


`Applitools Ultrafast grid` is the easiest and quickest way to carry out automated visual testing when it comes to frontend applications.

<!-- ![GIF demo](img/demo.gif) -->

Applitools Ultrafast grid is designed to run on all major browsers inclusing Chrome, Firefox, Safari, Edge, I.E and among other browsers. Applitools ultrafast grid allows one to also run their tests through different mobile user interfaces and this is done by resizing browsers in different viewports. The main advantage of the Ultrafast grid is that with a single test you can be able to run tests in all the possible combinations of browsers supported. Ultrafast grid is super fast as the test runs are concurrent and they run in the cloud which would not be how they would normally run in the local machines. 

**Technologies used**
---
1. NodeJs
2. Cypress
3. Javascript
4. Eyes SDK

**Usage**
---
Below is an applitools browsers configuration of all the browsers that the eyes SDK will use to run the tests and an iphone-X mobile device emulation that will use a resized version of Google's Chrome browser.

```
Configuration: Browser Configuration on Applitools Ultrafast Grid with eyes SDK

   browser: [
        // configuration of different viewports
        {width: 1200, height: 700, name: 'chrome'},
        {width: 1200, height: 700, name: 'firefox'},
        {width: 1200, height: 700, name: 'edgechromium'},
        {width: 768, height: 700, name: 'chrome'},
        {width: 768, height: 700, name: 'firefox'},
        {width: 768, height: 700, name: 'edgechromium'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
    ],

beforeEach(() => {
        cy.viewport(800, 600);
        cy.eyesOpen(browser);
    });


```

**Installation Process (MACOS)**
---

1. Download Node from the official website or with brew
    + `$ brew install node`

2. Clone the github repository
    + `$  git clone git@github.com:mwaz/AppliFashion.git`

3. Install packages with npm package manager
    + `$  cd /cloned/project/folder`
    + `$  npm install`

4. Add the `API-KEY` provided by Applitools eyes to the applitools.config.js file as shown below.
```
module.exports = {
    ...
    apiKey: 'YOUR-API-KEY-HERE',
    ...
}
```

**Running Visual AI Ultrafast Grid Tests**
---
### Running V1 tests on ultragrid
```
test:ultragrid:v1
```

### Running V2 tests on ultragrid
```
test:ultragrid:v2
```


**Running Traditional Tests Version 1**
---

### 1. Chrome Browser

```
test:chrome:v1
```
### 2. Firefox Browser

```
test:firefox:v1
```

### 3. Edge Browser

```
test:edge:v1
```

**Running Traditional Tests Version 2**
---

### 1. Chrome Browser

```
test:chrome:v2
```
### 2. Firefox Browser

```
test:firefox:v2
```

### 3. Edge Browser

```
test:edge:v2
```

**Configuration Options**
---

1. Applitools.config.js file

    Applitools eyes Ultrafast grid can be configured using the applitools.config.js file that should live in the root of the tests directory. A sample configuration to run the tests looks as shown below

    ```
    module.exports = {
    concurrency: 10,
    apiKey: 'YOUR-API-KEY',
    browser: [
         // {Viewport dimensions, name of browser}
        {width: 1200, height: 700, name: 'chrome'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
    ],
    // configuration batch name
    batchName: 'UFG Hackathon',
    appName: 'applifashion-hackathon',
    showLogs: true,
    }
    ```

2. cy.eyesOpen({configuration})

    Eyes SDK can also be configured on the cy.eyesOpen command for Eyes SDK. Using the command, a user can override the test defaults configured on the applitools.config.js or even extend the configurations for specific tests.


**How to Contribute**
---

1. Clone repo and create a new branch: `$ git checkout https://github.com/mwaz/applifashion -b name_for_new_branch`.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

**Acknowledgements**
---

+ [@cypress](https://github.com/cypress-io/cypress) for cypress documentation.
+ [Applitools Eyes SDK](https://github.com/applitools/eyes.sdk.javascript1/tree/master/packages/eyes-cypress) for best practices on using the SDK.

**Donations**
---

This is free, open-source software. If you'd like to support the development of future projects, or say thanks for this one, you can [buy me a coffee](https://buymeacoff.ee/8hyOkXp)