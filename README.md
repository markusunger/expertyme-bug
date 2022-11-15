# Expertyme-WebView-Bug

This is a simple React Native application to demonstrate the camera input freeze bug we are experiencing with the Expertyme conferencing tool on Android devices.

## Requirements

- Node.js 16+
- Java (11) installed and available at the JAVA_HOME environment variable
- Android SDK installed and available at the ANDROID_SDK_ROOT environment variable
- a physical Android device
- Android Studio is recommended and contains both the required Java and Android SDK installations


## Installation

1. Run `npm install`
2. Start the Metro bundler with `npm start`
3. Connect an Android device (needs developer mode and USB debugging enabled, see https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)
4. Run `npm run android` to start the app on the device

## Technical Details

By default, the application renders an OpenTok demo application inside of a WebView. We are using the latest React Native version (0.70.5) and the latest version of the `react-native-webview` library (which is wrapping the Android system WebView).

The OpenTok demo application runs without problems. In the application source code (`App.js`) there is another test URL (temporarily commented out) for the WebRTC peer connection test at https://webrtc.github.io/samples/src/content/peerconnection/pc1/. This demo also runs without a problem.

To test an Expertyme conference and reproduce the issue, the `uri` in the `App.js` file on line 11 needs to be replaced as follows:

```js
source={{
    uri: '<INSERT_EXPERTYME_CALL_LINK_HERE>',
}}
```

After granting all permissions and entering the video conference, the user's video from their phone camera is visible for a very short time before disappearing. After a couple of seconds, a connection warning from Expertyme is displayed. Other participants of the conference and their video feed are displayed without issues.