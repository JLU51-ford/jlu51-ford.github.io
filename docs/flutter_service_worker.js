'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/app.dill": "af6dba7206e47c87f1f14b0b1d8dac77",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/app.dill.deps": "f40bba78656b153deee3ba7cc68f38d8",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/dart2js.d": "27b34c0e939c98e7a30ab2da53b573b5",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/dart2js.stamp": "e50541a846ae4c057f6cb44f13a20dc1",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/flutter_assets.d": "369704dacd9cad2ac4af1d330c1ddb68",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/main.dart": "6f424bb4f5e49a4cbf4a4da5107701bb",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/main.dart.js": "a00835c1c0fe016560ab8f35cfa55fb5",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/main.dart.js.deps": "0e2b5a4757724f69098ad37df74f1047",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/outputs.json": "9ce790d7f797c45e3e3e3121572a9024",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/service_worker.d": "458597de7e6a54e2b9a3010810492107",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/web_entrypoint.stamp": "11a2c506c2c2f34604c646e7331454e2",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/web_release_bundle.stamp": "a9d544e32ae639b51062aebfa2fee220",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/web_resources.d": "fd14142207b453b0e5e9e06f3b6ff758",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/web_service_worker.stamp": "b77bb74c75a73ebe469a7476e32f55bb",
".dart_tool/flutter_build/72e25cc8b42ff35ec2ab9c18953d35f4/web_static_assets.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/package_config.json": "55044f82450d67184a8a11ea5bfc78fc",
".dart_tool/package_config_subset": "1c30d05c27b3274dee45bd0cd738beb5",
".dart_tool/version": "3d4b11f6ee2a89fd5ace87c910cee04b",
".idea/libraries/Dart_SDK.xml": "d37c2c3963b64506cef733662a3abc8f",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"android/app/build.gradle": "7097b1c86af109c986e8a6a79fd8a444",
"android/app/src/debug/AndroidManifest.xml": "2f12169bf3f0284894c0a7a8de4ea5ff",
"android/app/src/main/AndroidManifest.xml": "380ceb596b3652ab4147e0aae36010b8",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "12319e79b274dcb3e3c70d21fda2d252",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "2f12169bf3f0284894c0a7a8de4ea5ff",
"android/build.gradle": "2962be45c69b031ffa356fcca8f19460",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "c7561d8cacf2b6b8e33bab63befcd0de",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "fb9f8a3510fd830439212adbd6b2df87",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/nft_image.png": "29bf56fbce2d4e7ef1ac77e11b66c26e",
"assets/images/slide_card1.png": "66fa60aad07a569334a5c2c9ca542c0d",
"assets/images/slide_card2.png": "e7184c4bdeafdf3b39d052089dd1dc54",
"assets/images/slide_card3.png": "77a59bfb1cf9c1cbbafdd9f86095b405",
"assets/images/slide_card4.png": "4b7d2951a1ba60e22b51c946036cf0b0",
"assets/NOTICES": "4c1f994a633103e82e14ef8c84f00189",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/3f4dfb53cb9f2207b37af38f22c0c163/gen_dart_plugin_registrant.stamp": "f6ba9e060e685c7aa4743b4a98c21650",
"build/3f4dfb53cb9f2207b37af38f22c0c163/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/3f4dfb53cb9f2207b37af38f22c0c163/_composite.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"build/web/assets/NOTICES": "2d7236aca695ba4cd213a3478e55d740",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/web/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"build/web/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"build/web/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"build/web/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/index.html": "023c8aa842b80a76bd8da9f74d5fdfa3",
"/": "be0c8e92f769aa4001e939857861d136",
"build/web/main.dart.js": "a00835c1c0fe016560ab8f35cfa55fb5",
"build/web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"build/web/version.json": "b3b87f9153d4406c14bc11865bbe1089",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5d7b8fc8d583311eb63b808a1438610",
"ios/Flutter/AppFrameworkInfo.plist": "db12a133dfacff2c7ffcdfe99a669634",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "0ca30bb23237703a7619fb658036d318",
"ios/Flutter/Generated.xcconfig": "f08535df8d85e9b09c469bded9756adf",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "388d9db9258d999b7105cde77f9ac40e",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "085e3343bee4f742010057a1928295a2",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7721d249fd3216036344543336caee67",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"lib/main.dart": "a6fb1329af99457b050f36d34b9bfb35",
"linux/CMakeLists.txt": "c37d213e8f5724a4bd3e2c04cc752528",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/my_application.cc": "595fe499c61799cb6f43a9afffeaa255",
"linux/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "de1ebbdba3c619f2d25836671e1053fe",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "d75389f9a35c9ef26cab279112a61ffc",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "9e943798973d8337e94637a639bf1a57",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "b7da05eb1e3dde358fb6591cf3a29348",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "e3516d01efaafaf34ca2ee2142181cad",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "4a7edbb5a7b3072d6452de36331bb2a8",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8a4fb0d67f0ecf1865d9d9f97e0f449a",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "586d6c7e93b7f746e6e94e35a7dbb6a5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "64b46626103336f80c23fc64656272a1",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "ad2257a3afbf5dff6c1ef37a91030bfc",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "25da60ddd7c7148c2a40dc3194b8ddca",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "8d8f7712e480d453092ebd9d8ab123eb",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "4749fc9064b9a190d4b014ea79dcae5e",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"main.dart.js": "7d1b5c837578a699d2d1d1b5cf7d0fba",
"manifest.json": "c3af8bf0b2d66b7f6ae5b5687dc5837e",
"pubspec.lock": "b9857cba3742b102c2caa8f349f1efb3",
"pubspec.yaml": "3de613466c7a04f6496bba10e687ba71",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "2d72dd921c091195a8d235c7323cbbf6",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "be0c8e92f769aa4001e939857861d136",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "e0f10da35b9e41eee205c76b23f0f835",
"windows/CMakeLists.txt": "e0f434edeccda0dca49269f1e0a167b2",
"windows/flutter/CMakeLists.txt": "82c70875775d10a82c7e2c3e9453a26d",
"windows/flutter/ephemeral/generated_config.cmake": "3a02219d9e12492218526ac8bdbecea1",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "64b3110d5e27ca67acccb677776be2a5",
"windows/runner/flutter_window.cpp": "f853be20595509bef5128dc4eebf8b8a",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "e32754af8da2d4bdeeda9164a3d22694",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "e6f4cf89a9b09cc07835380ee88ad54f",
"windows/runner/Runner.rc": "fd36d01d7dd80f3b6ffb769b96debfca",
"windows/runner/utils.cpp": "892a92c75eb6291ca11f62b44ea4d16b",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "51d773f28ac8f760edd9003a06a96723",
"windows/runner/win32_window.h": "ca8cb4198d0ab7865e929fba6318d26e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
