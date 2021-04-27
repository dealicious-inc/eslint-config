# Dealicious ESLint Config

이 패키지는 [재활용 가능한 eslint 설정](https://eslint.org/docs/developer-guide/shareable-configs)을 제공하는 것이 목적입니다.

## Installation

```sh
npm install eslint babel-eslint eslint-plugin-node @dealicious-inc/eslint-config
```

## Usage

프로젝트 Root 에 `.eslintrc.json` 파일을 추가하고, 아래와 같이 `extends` 속성을 설정하세요.

```json
{
  "extends": "@dealicious-inc"
}
```

이제 Dealicious 에 공통으로 적용될 `eslint rules` 들이 적용되는 것을 확인하실 수 있을 것입니다.
`@dealicious-inc/eslint-config` 에 사용된 세부적인 설정사항은 [ESLint Documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) 을 참고하세요.

### Plugins

다음에 기술되는 `Plugin` 들도 사용 가능합니다.

### Jest

Jest 를 사용한다면 위에서 먼저 설명한 [Installation](#installation) 에 추가하여 다음의 항목을 추가로 설치합니다.

```sh
npm install jest eslint-plugin-jest
```

위와 같이 추가한 뒤 설정에 다음의 항목을 확장합니다.

```json
{
  "extends": ["@dealicious-inc", "@dealicious-inc/eslint-config/plugins/jest"]
}
```

어떤 경우에는 `Jest` 규칙을 `overrides` 속성을 통해 재정의 함으로써 제한하는 것도 좋은 방법입니다.

```json
{
  "extends": "@deali-web",
  "overrides": [
    {
      "files": ["*.spec.*"],
      "extends": "@dealicious-inc/eslint-config/plugins/jest"
    }
  ]
}
```

### React

`React` 와 `React Hooks` 그리고 `JSX a11y` 를 위한 플러그인 역시 포함되어 있습니다.
이를 사용하기 위해서는 위에서 먼저 설명한 [Installation](#installation) 에 추가하여 다음의 항목을 추가로 설치합니다.

```sh
npm install eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

위와 같이 추가한 뒤 기본설정을 다음과 같이 확장합니다.

```json
{
  "extends": ["@dealicious-inc", "@dealicious-inc/eslint-config/plugins/react"]
}
```

### Typescript

`Typescript` 를 사용하기 위한 플러그인이 포함되어 있습니다.
이를 사용하기 위해서는 위에서 먼저 설명한 [Installation](#installation) 에 추가하여 다음의 항목을 추가로 설치합니다

```sh
npm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

위와 같이 추가한 뒤 기본설정을 다음과 같이 확장합니다.

```json
{
  "extends": [
    "@dealicious-inc",
    "@dealicious-inc/eslint-config/plugins/typescript"
  ]
}
```

만약, JS 와 TS 를 코드베이스에서 혼용하여 사용하고 싶다면 다음과 같이 `overrides` 속성을 이용하여 확장하면 됩니다.

```json
{
  "extends": "@dealicious-inc",
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": "@dealicious-inc/eslint-config/plugins/typescript"
    }
  ]
}
```
