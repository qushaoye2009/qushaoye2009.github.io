(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{266:function(e,s,a){"use strict";a.r(s);var t=a(28),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"关于nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于nodejs"}},[e._v("#")]),e._v(" 关于nodejs")]),e._v(" "),a("p",[e._v("作为前端工程师，不得不懂nodejs。")]),e._v(" "),a("h2",{attrs:{id:"什么是-nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-nodejs"}},[e._v("#")]),e._v(" 什么是 nodejs?")]),e._v(" "),a("p",[e._v("百度百科是这样定义的：Node.js是一个Javascript运行环境。从定义看， Node.js 不是一个 JavaScript 框架，更不是浏览器端的库，而是一个让 JavaScript 运行在服务端的开发平台。")]),e._v(" "),a("h3",{attrs:{id:"node特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node特点"}},[e._v("#")]),e._v(" node特点")]),e._v(" "),a("p",[e._v("chrome v8引擎， 事件驱动，非阻塞 I/O， 单线程")]),e._v(" "),a("h3",{attrs:{id:"如何安装nodejs？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何安装nodejs？"}},[e._v("#")]),e._v(" 如何安装nodejs？")]),e._v(" "),a("p",[e._v("在不同系统下，安装 nodejs，都有很多种方法。主流的方式有：")]),e._v(" "),a("ul",[a("li",[e._v("直接到 nodejs 的官网"),a("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nodejs.org/"),a("OutboundLink")],1),e._v("下载页 下载 对应系统下 自己想要的版本，成功后一路点击 安装即可, 如遇到问题，网上一搜就有对应的解决办法。")]),e._v(" "),a("li",[e._v("使用 nvm 安装，它是 Node Version Manager（Node版本管理器）的简称，用它可以方便的在机器上安装并维护多个Node的版本。")])]),e._v(" "),a("h2",{attrs:{id:"node-发展历程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-发展历程"}},[e._v("#")]),e._v(" node 发展历程")]),e._v(" "),a("p",[e._v("原生node提供web服务")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const Server = http.createServer((req, res) => {\n  res.writeHead(200,{'Content-Type': 'application/json;charset=utf-8;'});\n  res.write('{text: \"hello world!\"}');\n  res.end();\n}).listen(8888)；\n")])])]),a("p",[e._v("express 封装开发web服务")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var express = require('express');\nvar app = express();\napp.get('/', function (req, res) {\n    res.send('hello world!');\n});\napp.listen(8888);\n")])])]),a("p",[e._v("随着es6普及，express团队基于generator推出koa框架\nkoa 1.x")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var koa = require('koa');\nvar app = koa();\n\napp.use('/file', function *() {\n    yield readFile1();\n    var data = yield readFile2();\n    this.body = data;\n});\napp.listen(8888);\n")])])]),a("p",[e._v("基于promise配合async 实现异步开发 2.x版本\nkoa 2.x")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.use(async (ctx, next) => {\n    await next();\n    var data = await readFile();\n    ctx.response.type = 'text/plain';\n    ctx.response.body = data;\n});\n\n")])])]),a("h4",{attrs:{id:"koa-vs-express"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-vs-express"}},[e._v("#")]),e._v(" koa vs express")]),e._v(" "),a("ul",[a("li",[e._v("express没有统一的错误处理，而koa有默认的错误处理方式")]),e._v(" "),a("li",[e._v("Koa 支持 es6 语法，Koa 在内核方法中不绑定任何中间件，不提供路由功能和某些工具，摒弃了的回调，采用 generator 或 promise的方式，在 Context中，Koa 对 request 和 response 进行了封装，使用方式也相应改变")])]),e._v(" "),a("h4",{attrs:{id:"koa1-vs-koa2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa1-vs-koa2"}},[e._v("#")]),e._v(" koa1 vs koa2")]),e._v(" "),a("ul",[a("li",[e._v("中间件的使用:  koa1依赖 co 并采用 generator 函数，在函数内使用 yield 语句，而koa2增加了箭头函数，移除了 co 依赖，使用 Promise，因此可以结合 async，await 使用；")]),e._v(" "),a("li",[e._v("context 对象的获取：koa1为this 对象，this.req, this.res；koa2: cxt 参数，cxt.req, cxt.res。")])]),e._v(" "),a("h2",{attrs:{id:"koa2-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa2-x"}},[e._v("#")]),e._v(" koa2.x")]),e._v(" "),a("p",[e._v("listen 方法实现")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" listen(...args) {\n    debug('listen');\n    const server = http.createServer(this.callback());\n    return server.listen(...args);\n  }\n\n")])])]),a("p",[e._v("引入中间件 use 方法,将generator模式中间件添加到middleware中")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("use(fn) {\n    if (isGeneratorFunction(fn)) {\n      fn = convert(fn); \n    }\n    this.middleware.push(fn);\n    return this;\n  }\n")])])]),a("p",[e._v("koa callback回调方法，接收到请求后，依据中间件各个部分依次处理请求，返回处理结果")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("callback() {\n  const fn = compose(this.middleware);\n  if (!this.listenerCount('error')) this.on('error', this.onerror);\n  const handleRequest = (req, res) => {\n    const ctx = this.createContext(req, res);\n    return this.handleRequest(ctx, fn);\n  };\n  return handleRequest;\n}\n\n")])])]),a("p",[e._v("中间件分为狭义中间件和广义中间件，狭义中间件是指可以直接使用app.use()来挂载的中间件，例koa-static，广义中间件是指不能直接被app.use()加载，但是可以间接挂载进项目，或者通过封装引入项目，例如：koa-router")]),e._v(" "),a("h2",{attrs:{id:"node-fs模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-fs模块"}},[e._v("#")]),e._v(" node fs模块")]),e._v(" "),a("ul",[a("li",[e._v("Node.js内置的fs模块就是文件系统模块，负责读写文件\nfs 读异步")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("use strict';\n\nvar fs = require('fs');\n\nfs.readFile('sample.txt', 'utf-8', function (err, data) {\n    if (err) {\n        console.log(err);\n    } else {\n        console.log(data);\n    }\n});\n")])])]),a("p",[e._v("fs 读同步")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("'use strict';\n\nvar fs = require('fs');\n\nvar data = fs.readFileSync('sample.txt', 'utf-8');\nconsole.log(data);\n")])])]),a("p",[e._v("fs 写异步")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("'use strict';\n\nvar fs = require('fs');\n\nvar data = 'Hello, Node.js';\nfs.writeFile('output.txt', data, function (err) {\n    if (err) {\n        console.log(err);\n    } else {\n        console.log('ok.');\n    }\n});\n")])])]),a("p",[e._v("fs 写同步")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("'use strict';\n\nvar fs = require('fs');\n\nvar data = 'Hello, Node.js';\nfs.writeFileSync('output.txt', data);\n")])])]),a("p",[e._v("fs 信息")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("'use strict';\n\nvar fs = require('fs');\n\nfs.stat('sample.txt', function (err, stat) {\n    if (err) {\n        console.log(err);\n    } else {\n        // 是否是文件:\n        console.log('isFile: ' + stat.isFile());\n        // 是否是目录:\n        console.log('isDirectory: ' + stat.isDirectory());\n        if (stat.isFile()) {\n            // 文件大小:\n            console.log('size: ' + stat.size);\n            // 创建时间, Date对象:\n            console.log('birth time: ' + stat.birthtime);\n            // 修改时间, Date对象:\n            console.log('modified time: ' + stat.mtime);\n        }\n    }\n});\n")])])]),a("h2",{attrs:{id:"关于nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于nvm"}},[e._v("#")]),e._v(" 关于nvm")]),e._v(" "),a("p",[e._v("维护多个版本的node将会是一件非常麻烦的事情，而nvm就是为解决这个问题而产生的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash\n")])])]),a("p",[e._v("常用命令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nvm ls-remote // 查看node有哪些版本可以安装\nnvm ls // \b查看本地 所有安装的版本\nnvm install node // 安装最新版 Node.js\nnvm install --lts // 安装最新稳定版\nnvm install v10.10.0 // 安装 node 10.10.0\nnvm use v9.6.2 // 切换到node 9.6.2\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);