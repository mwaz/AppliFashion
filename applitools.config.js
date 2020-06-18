module.exports = {
    concurrency: 10,
    apiKey: '97wVHf9rSmxt5oSRhGb100101I07mx6RJUEJpEIQsv5cxuYU110',
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
// 97wVHf9rSmxt5oSRhGb100101I07mx6RJUEJpEIQsv5cxuYU110