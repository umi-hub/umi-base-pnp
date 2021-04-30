# 这是一个 umi 的 pnp 支持情况验证测试库

这个分支是最简dem，开启 webpack5 配置，可以支持。几个包缺失，但不影响项目运行，报错如下：

```base
(node:9906) [MODULE_NOT_FOUND] Error: @umijs/utils tried to access @umijs/babel-preset-umi, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.
(node:9906) [MODULE_NOT_FOUND] Error: @umijs/babel-preset-umi tried to access @umijs/utils, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.
(node:9906) [MODULE_NOT_FOUND] Error: @umijs/babel-preset-umi tried to access @umijs/deps, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.
Bundle with webpack 5...
(node:9906) [MODULE_NOT_FOUND] Error: @umijs/preset-built-in tried to access @umijs/core, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.
Starting the development server...
(node:9906) [MODULE_NOT_FOUND] Error: @umijs/deps tried to access esprima, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.
(node:9906) [MODULE_NOT_FOUND] Error: @umijs/preset-built-in tried to access react-dom, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.
(node:9906) [MODULE_NOT_FOUND] Error: @umijs/server tried to access @umijs/core, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.
```