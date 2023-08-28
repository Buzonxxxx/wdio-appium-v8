const path = require('path');
const { config } = require('./wdio.shared.conf')

config.specs = [
    '.././test/specs/android/add-note-screen*.js'
];

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '14.0',
        'appium:deviceName': 'Pixel 4 API 34',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ColorNote-Notepad.apk'),
        'appium:autoGrantPermissions': true
    }]

config.port = 4723

exports.config = config;