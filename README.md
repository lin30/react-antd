# react + redux + antd + webpack2
### 全家桶 react-router + react-redux + react-router-redux
### 此项目由 dva项目例子拆解而成
## 项目启动
- npm install
- npm run dev
- 然后你就可以在 http://localhost:8888看到主页
- 在http://localhost:8888/#/users可以看到后台管理系统

## 未完成
- webpack 代理未配置完成 -- 👌
- typeScript未引进
- 测试环境增加 hmr -- 👌 

## hmr 配置 
### 依赖下载

```npm install --save-dev babel-plugin-react-transform``` 

```npm install --save-dev react-transform-hmr```

```npm install babel-preset-react-hmre --save-dev```


### .babelrc 配置

```"presets": ["react-hmre"]```

### 同时 DevServer 要开通 hot: true,