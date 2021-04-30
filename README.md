# @umijs/preset-react pnp

在 umi 库验证通过的前提下，安装 @umijs/preset-react。
执行报错

```
Cannot find module '@umijs/preset-react' from '/Users/xiaohuoni/Documents/GitHub/umi-base-pnp'
Error: Cannot find module '@umijs/preset-react' from '/Users/xiaohuoni/Documents/GitHub/umi-base-pnp'
    at Function.resolveSync [as sync] (/Users/xiaohuoni/Documents/GitHub/umi-base-pnp/.yarn/cache/@umijs-deps-npm-3.4.14-18d36acc77-70807a7359.zip/node_modules/@umijs/deps/compiled/resolve/index.js:1:11108)
    at /Users/xiaohuoni/Documents/GitHub/umi-base-pnp/.yarn/cache/@umijs-core-npm-3.4.14-78d870b291-acd43659e0.zip/node_modules/@umijs/core/lib/Service/utils/pluginUtils.js:94:29
    at Array.map (<anonymous>)
    at getPluginsOrPresets (/Users/xiaohuoni/Documents/GitHub/umi-base-pnp/.yarn/cache/@umijs-core-npm-3.4.14-78d870b291-acd43659e0.zip/node_modules/@umijs/core/lib/Service/utils/pluginUtils.js:89:99)
    at resolvePresets (/Users/xiaohuoni/Documents/GitHub/umi-base-pnp/.yarn/cache/@umijs-core-npm-3.4.14-78d870b291-acd43659e0.zip/node_modules/@umijs/core/lib/Service/utils/pluginUtils.js:173:23)
    at new Service (/Users/xiaohuoni/Documents/GitHub/umi-base-pnp/.yarn/cache/@umijs-core-npm-3.4.14-78d870b291-acd43659e0.zip/node_modules/@umijs/core/lib/Service/Service.js:183:59)
    at new Service (/Users/xiaohuoni/Documents/GitHub/umi-base-pnp/.yarn/cache/umi-npm-3.4.14-ff7d3692f2-e343771c1a.zip/node_modules/umi/lib/ServiceWithBuiltIn.js:50:5)
    at /Users/xiaohuoni/Documents/GitHub/umi-base-pnp/.yarn/cache/umi-npm-3.4.14-ff7d3692f2-e343771c1a.zip/node_modules/umi/lib/forkedDev.js:44:21
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/Users/xiaohuoni/Documents/GitHub/umi-base-pnp/.yarn/cache/umi-npm-3.4.14-ff7d3692f2-e343771c1a.zip/node_modules/umi/lib/forkedDev.js:33:103)
```