(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{265:function(a,t,s){"use strict";s.r(t);var e=s(28),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"pm2-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm2-部署"}},[a._v("#")]),a._v(" pm2 部署")]),a._v(" "),s("h2",{attrs:{id:"关于pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于pm2"}},[a._v("#")]),a._v(" 关于pm2")]),a._v(" "),s("p",[a._v("开发时，我们需要npm run …来启动一个node项目，如果终端被关掉，程序跟着停止，特别是启动多个项目时，多有不便，特别是部署到线上的时候，如果报错了可能直接终止整个运行，supervisor或nodemon一般只用在开发环境的。")]),a._v(" "),s("p",[a._v("而线上我们一般使用PM2，它是带有负载均衡功能的node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等。")]),a._v(" "),s("h3",{attrs:{id:"安装pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装pm2"}},[a._v("#")]),a._v(" 安装pm2")]),a._v(" "),s("p",[a._v("打开我们本地的终端，输入如下命令登录远程服务器：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ssh 用户名@云服务器IP地址\n// 例子 ssh root@173.123.34.55\n")])])]),s("p",[a._v("或者")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vi ~/.ssh/config\n// 添加如下内容\nHost test\n  HostName 172.**6.122.***\n  User root\n  Port 53808\n// 此时通过 ssh test 也可以访问，Port一般默认为22\n")])])]),s("p",[a._v("之后输入密码，登录成功后输入下面命令，-g是安装到全局(若提示npm命令不存在，则需要安装node或是环境配置有问题)：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install -g pm2\n")])])]),s("h3",{attrs:{id:"常用命令："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令："}},[a._v("#")]),a._v(" 常用命令：")]),a._v(" "),s("ul",[s("li",[a._v("启动:  pm2 start app.js")]),a._v(" "),s("li",[a._v("停止：pm2 stop app_name|app_id")]),a._v(" "),s("li",[a._v("停止所有：pm2 stop all")]),a._v(" "),s("li",[a._v("重启：pm2 restart app_name|app_id")]),a._v(" "),s("li",[a._v("删除：pm2 delete app_name|app_id")]),a._v(" "),s("li",[a._v("查看某一个进程的信息：pm2 describe app_name|app_id")]),a._v(" "),s("li",[a._v("查看所有的进程：pm2 list")]),a._v(" "),s("li",[a._v("查看所有的进程状态：pm2 status")])]),a._v(" "),s("h2",{attrs:{id:"本地一键自动部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地一键自动部署"}},[a._v("#")]),a._v(" 本地一键自动部署")]),a._v(" "),s("h3",{attrs:{id:"配置免密登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置免密登录"}},[a._v("#")]),a._v(" 配置免密登录")]),a._v(" "),s("p",[a._v("将本地Mac生成的公钥 添加到远程服务器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ssh-keygen\nssh-copy-id -i .ssh/id_rsa.pub 用户名@47.92.xx.xxx\n")])])]),s("p",[a._v("或者")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cat ~/.ssh/id_rsa.pub\n// 复制内容后登录服务器添加到如下文件\nvi ~/.ssh/authorized_keys\n")])])]),s("h3",{attrs:{id:"初始化配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化配置文件"}},[a._v("#")]),a._v(" 初始化配置文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pm2 ecosystem\n")])])]),s("p",[a._v("编辑，ecosystem.json文件，参考的例子如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n  apps : [\n    {\n      name: "h5",\n      script: "build/build.js",\n      env: {\n        COMMON_VARIABLE: "true"\n      },\n      env_production : {\n        NODE_ENV: "production"\n      }\n    }\n  ],\n  deploy : {\n    production : {\n      user : "xqart",\n      host : "47.xx.xxx.xxx",\n      ref  : "origin/master",\n      repo : "git@gitee.com:kongwutw/xqart-h5-vue.git",\n      path : "/home/xqart/h5",\n      "post-deploy" : "git pull"\n    }\n  }\n}\n\n')])])]),s("h3",{attrs:{id:"初始化远程服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化远程服务器"}},[a._v("#")]),a._v(" 初始化\b远程服务器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pm2 deploy production setup\n")])])]),s("h3",{attrs:{id:"部署到服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署到服务器"}},[a._v("#")]),a._v(" 部署到服务器")]),a._v(" "),s("p",[a._v("在项目根目录下执行：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pm2 deploy production\n``")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);