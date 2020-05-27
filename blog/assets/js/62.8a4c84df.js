(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{314:function(_,v,t){"use strict";t.r(v);var i=t(28),a=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_3-1-linux-入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-linux-入门"}},[_._v("#")]),_._v(" 3_1 Linux 入门")]),_._v(" "),t("p",[_._v("本节将分享Linux的基础教程及常用命令。")]),_._v(" "),t("h2",{attrs:{id:"什么是linux？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是linux？"}},[_._v("#")]),_._v(" 什么是Linux？")]),_._v(" "),t("p",[_._v("Linux是三种主流的操作系统之一，其他两种是我们熟知的windows系统和Mac系统，普通大众一般不知道，因为Linux更多的是应用于服务器上。\n它是一套免费使用和自由传播的类Unix操作系统，并且继承了Unix以网络为核心的设计思想。")]),_._v(" "),t("h2",{attrs:{id:"什么是终端？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是终端？"}},[_._v("#")]),_._v(" 什么是终端？")]),_._v(" "),t("p",[_._v("怎样看出电影中哪个人是电脑大神？就是看他是不是在用终端。操作系统分为两个部分：")]),_._v(" "),t("ul",[t("li",[_._v("内核：负责系统的全部逻辑操作，由海量命令组成；")]),_._v(" "),t("li",[_._v("用户交互界面：开机之后所有我们所看到的东西，比如窗口，软件等")])]),_._v(" "),t("p",[_._v("终端就是连接内核与交互界面的这座桥，它允许用户在交互界面上打开一个叫做「Terminal 终端」的应用程序，在其中输入命令，系统会直接给出反馈。")]),_._v(" "),t("h2",{attrs:{id:"如何打开终端？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何打开终端？"}},[_._v("#")]),_._v(" 如何打开终端？")]),_._v(" "),t("ul",[t("li",[_._v("对于Windows，win10以下版本，不支持Linux风格的terminal，一般需要安装git bash, 里面集成了大多数的Linux命令；")]),_._v(" "),t("li",[_._v("对于Mac 系统，有如下三种打开方式：首先，F4 去找 到对应的 图标， 其次，可以在搜索框 输入Terminal，最后可以把把固定到 面板，经常使用的话 会 特别 便利。")])]),_._v(" "),t("h2",{attrs:{id:"什么是命令？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是命令？"}},[_._v("#")]),_._v(" 什么是命令？")]),_._v(" "),t("p",[_._v("命令就是 你告诉电脑希望它做什么的 那句话，分为：")]),_._v(" "),t("ul",[t("li",[_._v("系统自带命令，如ls，cd等命令；")]),_._v(" "),t("li",[_._v("需要安装才能使用的命令，如node和npm等命令；")])]),_._v(" "),t("h2",{attrs:{id:"什么是路径？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是路径？"}},[_._v("#")]),_._v(" 什么是路径？")]),_._v(" "),t("p",[_._v("当你需要使用终端对文件夹进行操作时，终端需要你告诉它，你想要修改的文件在哪里，这时我们需要了解路径的概念。系统中的每一个文件都有一个存放位置，这一存放位置就称作路径。")]),_._v(" "),t("p",[_._v("终端启动后，它的默认路径在当前用户文件夹的根目录上，为了确定这一点，你可以输入 pwd 命令来查看当前路径。若你想改变当前路径，则可以输入 cd /其他文件夹")]),_._v(" "),t("p",[_._v("但路径其实分为两种：")]),_._v(" "),t("ul",[t("li",[_._v("相对路径：路径的最前面为一个点(代表当前路径)或两个点(代表当前路径的上一路径)， 如'./', '../static'等；")]),_._v(" "),t("li",[_._v("绝对路径：路径的最前面只为'/'，如'/root/static', '/home/user';")])]),_._v(" "),t("h2",{attrs:{id:"常用linux命令？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用linux命令？"}},[_._v("#")]),_._v(" 常用Linux命令？")]),_._v(" "),t("ul",[t("li",[_._v("ls 查看目录下包含的文件或目录；")]),_._v(" "),t("li",[_._v("pwd 在终端打印当前 目录；")]),_._v(" "),t("li",[_._v("cd 切换路径；")]),_._v(" "),t("li",[_._v("mkdir 创建目录；")]),_._v(" "),t("li",[_._v("touch 创建文件")]),_._v(" "),t("li",[_._v("rm 删除文件或目录，删除目录时需要加 -rf 参数；")]),_._v(" "),t("li",[_._v("mv 移动文件或目录，在当前目录下移动时为 修改名字；")]),_._v(" "),t("li",[_._v("ssh 登录远程服务器；")]),_._v(" "),t("li",[_._v("npm install 安装node项目依赖；")]),_._v(" "),t("li",[_._v("git pull 从远程仓库 拉取最新代码；")]),_._v(" "),t("li",[_._v("man 超级命令 去查看的有关命令的介绍。")])]),_._v(" "),t("p",[_._v("linux系统自带和可安装使用的终端命令很多很多，本节我们只介绍了最常用的几个命令，其他命令用到时去查即可。")]),_._v(" "),t("p",[_._v("好了，Linux有关的知识就讲解到这，下节我们将正式开始搭建网站，欢迎继续学习。")])])}),[],!1,null,null,null);v.default=a.exports}}]);