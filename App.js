import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        bounces={false}
        source={{
          uri: 'https://opentokdemo.tokbox.com/room/polished-block-shiny-silence-4077',
          // uri: 'https://webrtc.github.io/samples/src/content/peerconnection/pc1/',
        }}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowFileAccess={true}
        scalesPageToFit={false}
        cacheEnabled={false}
        pullToRefreshEnabled={true}
        mediaCapturePermissionGrantType={'grant'}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  webview: {
    width: '100%',
    height: '100%',
  },
});
