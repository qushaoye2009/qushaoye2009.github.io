(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{264:function(t,n,e){"use strict";e.r(n);var o=e(28),s=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuerouter-源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuerouter-源码"}},[t._v("#")]),t._v(" VueRouter 源码")]),t._v(" "),e("p",[t._v("路由的作用就是根据不同的路径映射到不同的视图，Vue 是一个渐进式 JavaScript 框架，本身的核心是解决视图渲染的问题，其它的能力就通过插件的方式来解决。")]),t._v(" "),e("h2",{attrs:{id:"如何使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),e("p",[t._v("vue官方提供Vue-Router 这个插件来帮我们解决路由的问题，支持 hash、history、abstract 3 种路由方式，提供了 router-link 和 router-view 2 种组件，还提供了简单的路由配置和一系列好用的 API。")]),t._v(" "),e("p",[t._v("Vue 提供了 Vue.use 的全局 API 来注册这些插件，定义在 vue/src/core/global-api/use.js ：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export function initUse (Vue: GlobalAPI) {\n  Vue.use = function (plugin: Function | Object) {\n    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))\n    if (installedPlugins.indexOf(plugin) > -1) {\n      return this\n    }\n\n    const args = toArray(arguments, 1)\n    args.unshift(this)\n    if (typeof plugin.install === 'function') {\n      plugin.install.apply(plugin, args)\n    } else if (typeof plugin === 'function') {\n      plugin.apply(null, args)\n    }\n    installedPlugins.push(plugin)\n    return this\n  }\n}\n")])])]),e("p",[t._v("Vue.use 接受一个 plugin 参数，并且维护了一个 _installedPlugins 数组，它存储所有注册过的 plugin；接着又会判断 plugin 有没有定义 install 方法，如果有的话则调用该方法，并且该方法执行的第一个参数是 Vue；最后把 plugin 存储到 installedPlugins 中。")]),t._v(" "),e("p",[t._v("每个插件都需要实现一个静态的 install 方法，当我们执行 Vue.use 注册插件的时候，就会执行这个 install 方法，并且在这个 install 方法的第一个参数我们可以拿到 Vue 对象。")]),t._v(" "),e("h2",{attrs:{id:"vue-router-的入口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-的入口"}},[t._v("#")]),t._v(" Vue-Router 的入口")]),t._v(" "),e("p",[t._v("入口在src/index.js，其中定义了 VueRouter 类，也实现了 install 的静态方法：VueRouter.install = install，定义在 src/install.js 中：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export let _Vue\nexport function install (Vue) {\n  if (install.installed && _Vue === Vue) return\n  install.installed = true\n\n  _Vue = Vue\n\n  const isDef = v => v !== undefined\n\n  const registerInstance = (vm, callVal) => {\n    let i = vm.$options._parentVnode\n    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {\n      i(vm, callVal)\n    }\n  }\n\n  Vue.mixin({\n    beforeCreate () {\n      if (isDef(this.$options.router)) {\n        this._routerRoot = this\n        this._router = this.$options.router\n        this._router.init(this)\n        Vue.util.defineReactive(this, '_route', this._router.history.current)\n      } else {\n        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this\n      }\n      registerInstance(this, this)\n    },\n    destroyed () {\n      registerInstance(this)\n    }\n  })\n\n  Object.defineProperty(Vue.prototype, '$router', {\n    get () { return this._routerRoot._router }\n  })\n\n  Object.defineProperty(Vue.prototype, '$route', {\n    get () { return this._routerRoot._route }\n  })\n\n  Vue.component('RouterView', View)\n  Vue.component('RouterLink', Link)\n\n  const strats = Vue.config.optionMergeStrategies\n  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created\n}\n")])])]),e("p",[t._v("当用户执行 Vue.use(VueRouter) 的时候，实际上就是在执行 install 函数，为了确保 install 逻辑只执行一次，用了 install.installed 变量做已安装的标志位。")]),t._v(" "),e("p",[t._v("Vue-Router 安装最重要的一步就是利用 Vue.mixin 去把 beforeCreate 和 destroyed 钩子函数注入到每一个组件中。Vue.mixin 的定义，在 vue/src/core/global-api/mixin.js 中：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export function initMixin (Vue: GlobalAPI) {\n  Vue.mixin = function (mixin: Object) {\n    this.options = mergeOptions(this.options, mixin)\n    return this\n  }\n}\n")])])]),e("p",[t._v("把要混入的对象通过 mergeOption 合并到 Vue 的 options 中，由于每个组件的构造函数都会在 extend 阶段合并 Vue.options 到自身的 options 中，所以也就相当于每个组件都定义了 mixin 定义的选项。")]),t._v(" "),e("p",[t._v("回到 Vue-Router 的 install 方法，先看混入的 beforeCreate 钩子函数，对于根 Vue 实例而言，执行该钩子函数时定义了 this._routerRoot 表示它自身；this._router 表示 VueRouter 的实例 router，它是在 new Vue 的时候传入的；另外执行了 this._router.init() 方法初始化 router，这个逻辑之后介绍，然后用 defineReactive 方法把 this._route 变成响应式对象，这个作用我们之后会介绍。")]),t._v(" "),e("p",[t._v("而对于子组件而言，由于组件是树状结构，在遍历组件树的过程中，它们在执行该钩子函数的时候 this._routerRoot 始终指向的是根 Vue 实例。")]),t._v(" "),e("p",[t._v("接着给 Vue 原型上定义了 $router 和 $route 2 个属性的 get 方法，这就是为什么我们可以在组件实例上可以访问 this.$router 以及 this.$route。")]),t._v(" "),e("p",[t._v("接着又通过 Vue.component 方法定义了全局的 router-link 和 router-view 2 个组件，最后定义了路由中的钩子函数的合并策略，和普通的钩子函数一样。")]),t._v(" "),e("p",[t._v("总之，Vue-Router 的 install 方法会给每一个组件注入 beforeCreate 和 destoryed 钩子函数，在 beforeCreate 做一些私有属性定义和路由初始化工作。")]),t._v(" "),e("h2",{attrs:{id:"vuerouter-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuerouter-对象"}},[t._v("#")]),t._v(" VueRouter 对象")]),t._v(" "),e("p",[t._v("VueRouter 的实现是一个类，我们先对它做一个简单地分析，它的定义在 src/index.js 中：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export default class VueRouter {\n  static install: () => void;\n  static version: string;\n\n  app: any;\n  apps: Array<any>;\n  ready: boolean;\n  readyCbs: Array<Function>;\n  options: RouterOptions;\n  mode: string;\n  history: HashHistory | HTML5History | AbstractHistory;\n  matcher: Matcher;\n  fallback: boolean;\n  beforeHooks: Array<?NavigationGuard>;\n  resolveHooks: Array<?NavigationGuard>;\n  afterHooks: Array<?AfterNavigationHook>;\n\n  constructor (options: RouterOptions = {}) {\n    this.app = null\n    this.apps = []\n    this.options = options\n    this.beforeHooks = []\n    this.resolveHooks = []\n    this.afterHooks = []\n    this.matcher = createMatcher(options.routes || [], this)\n\n    let mode = options.mode || 'hash'\n    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false\n    if (this.fallback) {\n      mode = 'hash'\n    }\n    if (!inBrowser) {\n      mode = 'abstract'\n    }\n    this.mode = mode\n\n    switch (mode) {\n      case 'history':\n        this.history = new HTML5History(this, options.base)\n        break\n      case 'hash':\n        this.history = new HashHistory(this, options.base, this.fallback)\n        break\n      case 'abstract':\n        this.history = new AbstractHistory(this, options.base)\n        break\n      default:\n        if (process.env.NODE_ENV !== 'production') {\n          assert(false, `invalid mode: ${mode}`)\n        }\n    }\n  }\n\n  match (\n    raw: RawLocation,\n    current?: Route,\n    redirectedFrom?: Location\n  ): Route {\n    return this.matcher.match(raw, current, redirectedFrom)\n  }\n\n  get currentRoute (): ?Route {\n    return this.history && this.history.current\n  }\n\n  init (app: any) {\n    process.env.NODE_ENV !== 'production' && assert(\n      install.installed,\n      `not installed. Make sure to call \\`Vue.use(VueRouter)\\` ` +\n      `before creating root instance.`\n    )\n\n    this.apps.push(app)\n\n    if (this.app) {\n      return\n    }\n\n    this.app = app\n\n    const history = this.history\n\n    if (history instanceof HTML5History) {\n      history.transitionTo(history.getCurrentLocation())\n    } else if (history instanceof HashHistory) {\n      const setupHashListener = () => {\n        history.setupListeners()\n      }\n      history.transitionTo(\n        history.getCurrentLocation(),\n        setupHashListener,\n        setupHashListener\n      )\n    }\n\n    history.listen(route => {\n      this.apps.forEach((app) => {\n        app._route = route\n      })\n    })\n  }\n\n  beforeEach (fn: Function): Function {\n    return registerHook(this.beforeHooks, fn)\n  }\n\n  beforeResolve (fn: Function): Function {\n    return registerHook(this.resolveHooks, fn)\n  }\n\n  afterEach (fn: Function): Function {\n    return registerHook(this.afterHooks, fn)\n  }\n\n  onReady (cb: Function, errorCb?: Function) {\n    this.history.onReady(cb, errorCb)\n  }\n\n  onError (errorCb: Function) {\n    this.history.onError(errorCb)\n  }\n\n  push (location: RawLocation, onComplete?: Function, onAbort?: Function) {\n    this.history.push(location, onComplete, onAbort)\n  }\n\n  replace (location: RawLocation, onComplete?: Function, onAbort?: Function) {\n    this.history.replace(location, onComplete, onAbort)\n  }\n\n  go (n: number) {\n    this.history.go(n)\n  }\n\n  back () {\n    this.go(-1)\n  }\n\n  forward () {\n    this.go(1)\n  }\n\n  getMatchedComponents (to?: RawLocation | Route): Array<any> {\n    const route: any = to\n      ? to.matched\n        ? to\n        : this.resolve(to).route\n      : this.currentRoute\n    if (!route) {\n      return []\n    }\n    return [].concat.apply([], route.matched.map(m => {\n      return Object.keys(m.components).map(key => {\n        return m.components[key]\n      })\n    }))\n  }\n\n  resolve (\n    to: RawLocation,\n    current?: Route,\n    append?: boolean\n  ): {\n    location: Location,\n    route: Route,\n    href: string,\n    normalizedTo: Location,\n    resolved: Route\n  } {\n    const location = normalizeLocation(\n      to,\n      current || this.history.current,\n      append,\n      this\n    )\n    const route = this.match(location, current)\n    const fullPath = route.redirectedFrom || route.fullPath\n    const base = this.history.base\n    const href = createHref(base, fullPath, this.mode)\n    return {\n      location,\n      route,\n      href,\n      normalizedTo: location,\n      resolved: route\n    }\n  }\n\n  addRoutes (routes: Array<RouteConfig>) {\n    this.matcher.addRoutes(routes)\n    if (this.history.current !== START) {\n      this.history.transitionTo(this.history.getCurrentLocation())\n    }\n  }\n}\nVueRouter 定义了一些属性和方法，我们先从它的构造函数看，当我们执行 new VueRouter 的时候做了哪些事情。\n\nconstructor (options: RouterOptions = {}) {\n  this.app = null\n  this.apps = []\n  this.options = options\n  this.beforeHooks = []\n  this.resolveHooks = []\n  this.afterHooks = []\n  this.matcher = createMatcher(options.routes || [], this)\n\n  let mode = options.mode || 'hash'\n  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false\n  if (this.fallback) {\n    mode = 'hash'\n  }\n  if (!inBrowser) {\n    mode = 'abstract'\n  }\n  this.mode = mode\n\n  switch (mode) {\n    case 'history':\n      this.history = new HTML5History(this, options.base)\n      break\n    case 'hash':\n      this.history = new HashHistory(this, options.base, this.fallback)\n      break\n    case 'abstract':\n      this.history = new AbstractHistory(this, options.base)\n      break\n    default:\n      if (process.env.NODE_ENV !== 'production') {\n        assert(false, `invalid mode: ${mode}`)\n      }\n  }\n}\n")])])]),e("p",[t._v("构造函数定义了一些属性，其中 this.app 表示根 Vue 实例，this.apps 保存持有 $options.router 属性的 Vue 实例，this.options 保存传入的路由配置，this.beforeHooks、 this.resolveHooks、this.afterHooks 表示一些钩子函数，this.matcher 表示路由匹配器，this.fallback 表示在浏览器不支持 history.pushState 的情况下，根据传入的 fallback 配置参数，决定是否回退到hash模式，this.mode 表示路由创建的模式，this.history 表示路由历史的具体的实现实例，它是根据 this.mode 的不同实现不同，它有 History 基类，然后不同的 history 实现都是继承 History。")]),t._v(" "),e("p",[t._v("在组件的初始化阶段，执行到 beforeCreate 钩子函数的时候会执行 router.init 方法，然后又会执行 history.transitionTo 方法做路由过渡。实例化 VueRouter 后会返回它的实例 router，我们在 new Vue 的时候会把 router 作为配置的属性传入：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("beforeCreate() {\n  if (isDef(this.$options.router)) {\n    // ...\n    this._router = this.$options.router\n    this._router.init(this)\n    // ...\n  }\n}  \n")])])]),e("p",[t._v("所以组件在执行 beforeCreate 钩子函数的时候，如果传入了 router 实例，都会执行 router.init 方法：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("init (app: any) {\n  process.env.NODE_ENV !== 'production' && assert(\n    install.installed,\n    `not installed. Make sure to call \\`Vue.use(VueRouter)\\` ` +\n    `before creating root instance.`\n  )\n\n  this.apps.push(app)\n\n  if (this.app) {\n    return\n  }\n\n  this.app = app\n\n  const history = this.history\n\n  if (history instanceof HTML5History) {\n    history.transitionTo(history.getCurrentLocation())\n  } else if (history instanceof HashHistory) {\n    const setupHashListener = () => {\n      history.setupListeners()\n    }\n    history.transitionTo(\n      history.getCurrentLocation(),\n      setupHashListener,\n      setupHashListener\n    )\n  }\n\n  history.listen(route => {\n    this.apps.forEach((app) => {\n      app._route = route\n    })\n  })\n}\n")])])]),e("p",[t._v("init 的逻辑很简单，它传入的参数是 Vue 实例，然后存储到 this.apps 中；只有根 Vue 实例会保存到 this.app 中，并且会拿到当前的 this.history，根据它的不同类型来执行不同逻辑。")])])}),[],!1,null,null,null);n.default=s.exports}}]);