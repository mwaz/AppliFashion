const iphoneViewport = [
    { deviceName: 'iPhone X', screenOrientation: 'portrait' },
];
const tabletViewports = [
    { width: 768, height: 700, name: 'chrome' },
    { width: 768, height: 700, name: 'firefox' },
    { width: 768, height: 700, name: 'edgechromium' },
];
const desktopViewports = [
    { width: 1200, height: 700, name: 'chrome' },
    { width: 1200, height: 700, name: 'firefox' },
    { width: 1200, height: 700, name: 'edgechromium' },
];

const viewportDimensions = {
    laptop: [1200, 700],
    tablet: [768, 700],
    mobile: [375, 812],
};

export default {
    iphoneViewport,
    tabletViewports,
    desktopViewports,
    viewportDimensions
}