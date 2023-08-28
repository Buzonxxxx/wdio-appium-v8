const path = require('path');
const { config } = require('./wdio.shared.conf')

config.specs = [
    '.././test/specs/ios/ios-todo-item-screen.spec.js'
];

config.capabilities = [
    {
        platformName: 'ios',
        'appium:platformVersion': '14.5',
        'appium:deviceName': 'iPhone 12',
        'appium:automationName': 'xcuitest',
        'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app')
    }]

config.port = 4723

exports.config = config;