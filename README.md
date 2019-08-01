# AiBinUI - 基于 React 的 UI 框架

[![CircleCI](https://circleci.com/gh/hungeraibin/AiBinUI.svg?style=svg)](https://circleci.com/gh/hungeraibin/AiBinUI) [![npm version](https://badge.fury.io/js/aibin-ui.svg)](https://badge.fury.io/js/aibin-ui) 


## 1. [AiBin UI框架官方文档](https://hungeraibin.github.io/AiBinUI/)
- 此项目是是我对React学习过程中的总结和成果，欢迎大家积极参与讨论

## 2. 项目简介
- AiBin 是基于React16.8全新Hooks和TypeScript的UI框架，提供一些常用的基本轮子组件，
- 组件设计学习参考ElementUI、Ant Design的设计，提供舒服的使用方法
- 使用webpack4进行项目的构建
- 尝试学习并使用Jest进行单元测试
- 尝试学习并使用Circle CI进行持续集成
- 使用自己的组件和React Router搭建并编写友好的文档

## 3. 使用项目
```
yarn install --save-dev aibin-ui
```

```js
import { Button } from 'aibin-ui';

const ButtonComponent: React.FunctionComponent = () => {
  return (
    <div>
      <Button></Button>
    </div>
  );
};
```

## 4. 查看源码
- 下载项目
```bash
git clone git@github.com:hungeraibin/AiBinUI.git
```

- 安装依赖
```bash
yarn install
```

- 启动服务
```bash
yarn start
```

## 5. 联系我们 
- email：hungeraibin@gmail.com
- QQ：1149299088
- 微信：AI_Bin_W