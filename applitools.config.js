module.exports = {
    concurrency: 10,
    apiKey: 'YOUR-APPLITOOLS-API-KEY-HERE',
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
    // configuration batch name
    batchName: 'UFG Hackathon',
    appName: 'applifashion-hackathon',
    showLogs: true,
}
