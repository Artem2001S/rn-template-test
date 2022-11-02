# rn-boilerplate

## Как использовать данный темплэйт

Без Firebase

```
$ npx react-native init MyAppName --template https://git.snpdev.ru/saltpepper/react-native-boilerplate.git
```

С подключенным Firebase (ветка with-firebase)

```
npx react-native init MyAppName --template https://git.snpdev.ru/saltpepper/react-native-boilerplate.git#with-firebase
```

#### Настройка окружения

Для запуска проекта необходимо настроить окружение, см [статью из офф. документации.](https://reactnative.dev/docs/environment-setup)

> Важно - если путь к ANDROID_SDK_ROOT настроен через

> терминал bash, то проект следует запускать через bash. Если zsh -

> запуск через zsh.

## Запуск проекта, типы сборок (prod/dev)

ENV константы хранятся в файлах `.env.development` и `.env.production`

В файл `.env` при запуске iOS записываются константы из файла `.env.development` или `.env.production` - в зависимости от выбранной схемы запуска.

#### Запуск iOS

```
$ yarn // установка npm пакетов

$ cd ios && pod install && cd .. // установка pod файлов (для iOS)
```

Затем открыть проект в XCode (Открыть XCode -> Open a project or file -> Выбрать папку ios проекта)

Выбрать [схему](https://monosnap.com/file/tD1VhvUMeKD4PriqYlUD77TXZLM9Pv) для запуска и эмулятор/устройство, нажать кнопку запуска.

#### iOS проект содержит 3 схемы для запуска

- `RNBoilerplate` - дефолтная схема, если потребуется создать новую схему - необходимо склонировать эту схему и таргет `RNBoilerplate`

- `RNAppDev` - схема для запуска тестовой версии.

Конфигурация тестового приложения находится в файле `DevInfo.plist`, таргет `RNAppDev`

- `RNAppProd` - схема для запуска продакшен версии.

Конфигурация продакшен приложения находится в файле `ProdInfo.plist`, таргет `RNAppProd`

Отличия prod и dev схем:

- разные `.env` файлы (перед запуском проекта выполняется скрипт, который записывает в файл `.env` данные из `.env.development` или `.env.production`

- разные .plist файлы

> Важно: при изменении .plist файлов (например: добавление доступа к камере) - необходимо внести изменения во все .plist файлы - `DevelopmentInfo.plist`, `ProductionInfo.plist` и `Info.plist`

При необходимости можно задать разные иконки/splash скрины для разных типов сборок, для этого необходимо изменить нужный .plist файл или таргет [Изменение иконки/splash screen'а](https://monosnap.com/file/YW8LbziXuwTfUyrP2CWVd6MTRb82Ci)

#### Запуск Android

```
$ yarn // установка npm пакетов
```

Файл `package.json` содержит 4 скрипта для запуска Android:

- `android:dev` - запуск dev версии, `.env` константы будут использоваться из `.env.development`

- `android:production` - запуск production версии, `.env` константы будут использоваться из `.env.production`

- `android:build:dev` - сборка apk установщика, файл будет сгенерирован в папке `android/app/build/outputs/apk/development/release/app-development-release.apk`

- `android:build:production` - сборка apk установщика, файл будет сгенерирован в папке `android/app/build/outputs/apk/production/release/app-production-release.apk`

#### Изменение конфигурации Android приложения

В файле `android/app/build.gradle` описаны параметры сборки приложения. Env файлы прописаны в

```
project.ext.envConfigFiles = [
	debug: '.env.development',
	release: '.env.production',
]
```

Настройки названия и id приложения находятся в этом же файле, параметр `productFlavors`, который содержит две конфигурации (production & development)

Чтобы изменить id приложения, необходимо изменить параметр `applicationId`.

Для изменения названия приложения, необходимо изменить параметр

`resValue "string", "app_name", "RN App Production"`

> Параметр `app_name` подставляется в `AndroidManifest.xml` > `android:label="@string/app_name"`

### Firebase

Настройки firebase расположены в файлах:
iOS - [appName]/GoogleServices/Development (/Production)
Android - android/app/src/development (/production)

### OneSignal

Настройка OneSignal для выполнена только для Android. Необходимо создать проект в OneSignal и получить app id, изменить app id в `.env` файлах

[Инструкция по добавлению OneSignal SDK для iOS + Android](https://documentation.onesignal.com/docs/react-native-sdk-setup)
[Инструкция по настройке OneSignal для Андроид](https://documentation.onesignal.com/docs/generate-a-google-server-api-key)

### Изменение иконок приложения

Для разных типов сборок заданы разные иконки приложения.

#### iOS

[Расположение иконки iOS приложения в XCode](https://monosnap.com/file/tWJcAUqMDVc7lTwvGWfbow8aSOFMvx)

Где выбрать нужную иконку - см. [Изменение иконки/splash screen'а](https://monosnap.com/file/YW8LbziXuwTfUyrP2CWVd6MTRb82Ci)

Для генерации иконки iOS приложения можно воспользоваться сервисом [app icon generator](https://appicon.co/).

#### Android

Иконка задается в файле `android/app/build.gradle`

```

productFlavors {

production {

manifestPlaceholders = [

appIcon: "@mipmap/ic_launcher_prod",

appIconRound: "@mipmap/ic_launcher_prod_round"

]

}

....

}

```

Переменные `appIcon` и `appIconRound` подставляются в `AndroidManifest.xml`

```

<application

android:name=".MainApplication"

android:label="@string/app_name"

android:icon="${appIcon}"

android:roundIcon="${appIconRound}"

.....

```

[Инструкция по добавлению новой иконки](https://developer.android.com/codelabs/basic-android-kotlin-training-change-app-icon#5)

#### Splash screen

Документация [react-native-bootsplash (v3.2.6)](https://github.com/zoontek/react-native-bootsplash/tree/3.2.6)

При необходимости можно сделать разные сплэш скрины для прод/тест сборок по аналогии с иконкой приложения.

## Сборка проекта для выгрузки в Google Play Console / TestFlight

### Подготовка

#### Android

Необходимо сгенерировать ключ подписи приложения.

[Подробная инструкция по генерации ключа](https://reactnative.dev/docs/signed-apk-android)

#### iOS

[Документация Apple](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution)

Необходимо добавить в XCode аккаунт разработчика, создать и скачать сертификаты Development и Distribution (через App Store Connect).

Выставить `Bundle Identifier` (раздел `General` из настроек выбранного таргета в XCode), который был указан при создании приложения в App Store Connect

### Сборка

#### iOS

1. Выбрать нужную схему (прод/тест)

2. Перед каждой новой сборкой необходимо изменить `Build Number` (раздел `General` из настроек выбранного таргета в XCode)

Например, если номер текущей сборки 12, то следует изменить номер сборки на 13.

3. Выбрать устройство для сборки `"Any iOS Device"` из списка эмуляторов)

4. Выбрать в меню XCode `Product -> Archive`

5. Далее загружаем созданный [билд по инструкции](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)

#### Android

1. Изменить номер сборки и версию (файл `android/app/build.gradle`)

2. Открыть проект в Android Studio

3. Выбрать в меню Build -> Generate Signed Bundle / APK

4. В появившемся окне выбрать "Android App Bundle"

5. Выбрать сгенерированный ключ подписи, заполнить поля (пароль, alias и тп), нажать далее

6. Выбрать нужный тип сборки

7. Файл формата .aab можно загружать в Google Play Console
