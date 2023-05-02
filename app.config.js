const variants = {
  development: {
    name: "cc-expo(Dev)",
    scheme: "cc-expo-dev",
    icon: "./assets/icon-dev.png",
    ios: {
      bundleIdentifier: "com.xtobu.ccexpotest.dev",
    },
    android: {
      package: "com.xtobu.ccexpotest.dev",
    },
  },
  preview: {
    name: "cc-expo(Test)",
    scheme: "cc-expo-test",
    icon: "./assets/icon-test.png",
    ios: {
      bundleIdentifier: "com.xtobu.ccexpotest.test",
    },
    android: {
      package: "com.xtobu.ccexpotest.test",
    },
  },
  production: {
    name: "cc-expo",
    scheme: "cc-expo",
    icon: "./assets/icon.png",
    ios: {
      bundleIdentifier: "com.xtobu.ccexpotest",
    },
    android: {
      package: "com.xtobu.ccexpotest",
    },
  },
};
const APP = variants[process.env.BUILD_MODE];

export default {
  scheme: APP.scheme,
  name: APP.name,
  slug: "cc-expo-test",
  version: "1.0.0",
  orientation: "portrait",
  icon: APP.icon,
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    buildNumber: "1",
    supportsTablet: true,
    bundleIdentifier: APP.ios.bundleIdentifier,
  },
  android: {
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.xtobu.ccexpotest",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "1e68bf81-eb66-4b4e-ad39-478384dc5eaa",
    },
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  updates: {
    url: "https://u.expo.dev/1e68bf81-eb66-4b4e-ad39-478384dc5eaa",
  },
};

// module.exports = ({ config }) => {
//     console.log(config.name); // prints 'My App'
//     return {
//       ...config,
//       name:
//     };
//   };
