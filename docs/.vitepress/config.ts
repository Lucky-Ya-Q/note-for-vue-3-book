import {defineConfig} from 'vitepress'

export default defineConfig({
    title: 'Vue.js设计与实现',
    titleTemplate: '《Vue.js设计与实现》阅读笔记',
    markdown: {
        lineNumbers: true
    },
    lastUpdated: true,
    themeConfig: {
        nav: [
            {text: '框架设计概览', link: '/one/1.1命令式和声明式', activeMatch: '/one/'},
            {text: '响应系统', link: '/two/4.1响应式数据与副作用函数', activeMatch: '/two/'},
            {text: '渲染器', link: '/three/7.1渲染器与响应系统的结合', activeMatch: '/three/'},
            {text: '组件化', link: '/four/12.1渲染组件', activeMatch: '/four/'},
            {text: '编译器', link: '/five/15.1模板DSL的编译器', activeMatch: '/five/'},
            {text: '服务端渲染', link: '/six/18.1CSR、SSR以及同构渲染', activeMatch: '/six/'}
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Lucky-Ya-Q/note-for-vue-3-book'}
        ],
        sidebar: {
            '/one/': one(),
            '/two/': two(),
            '/three/': three(),
            '/four/': four(),
            '/five/': five(),
            '/six/': six()
        },
        editLink: {
            pattern: 'https://github.com/Lucky-Ya-Q/note-for-vue-3-book/edit/master/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        lastUpdatedText: '最近更新时间',
        docFooter: {prev: '上一页', next: '下一页'},
        footer: {
            copyright: 'Copyright © 2022-present <a href="https://www.shanyexia.top">山野下</a>'
        }
    }
})

function one() {
    return [
        {
            text: '第1章 权衡的艺术',
            collapsible: true,
            items: [
                {text: '命令式和声明式', link: '/one/1.1命令式和声明式'},
                {text: '性能与可维护性的权衡', link: '/one/1.2性能与可维护性的权衡'},
                {text: '虚拟 DOM 的性能到底如何', link: '/one/1.3虚拟DOM的性能到底如何'},
                {text: '运行时和编译时', link: '/one/1.4运行时和编译时'},
                {text: '总结', link: '/one/1.5总结'}
            ]
        },
        {
            text: '第2章 框架设计的核心要素',
            collapsible: true,
            items: [
                {text: '提升用户的开发体验', link: '/one/2.1提升用户的开发体验'},
                {text: '控制框架代码的体积', link: '/one/2.2控制框架代码的体积'},
                {text: '框架要做到良好的 Tree-Shaking', link: '/one/2.3框架要做到良好的Tree-Shaking'},
                {text: '框架应该输出怎样的构建产物', link: '/one/2.4框架应该输出怎样的构建产物'},
                {text: '特性开关', link: '/one/2.5特性开关'},
                {text: '错误处理', link: '/one/2.6错误处理'},
                {text: '良好的 TypeScript 类型支持', link: '/one/2.7良好的TypeScript类型支持'},
                {text: '总结', link: '/one/2.8总结'}
            ]
        },
        {
            text: '第3章 Vue.js 3的设计思路',
            collapsible: true,
            items: [
                {text: '声明式地描述 UI', link: '/one/3.1声明式地描述UI'},
                {text: '初识渲染器', link: '/one/3.2初识渲染器'},
                {text: '组件的本质', link: '/one/3.3组件的本质'},
                {text: '模板的工作原理', link: '/one/3.4模板的工作原理'},
                {text: 'Vue.js 是各个模块组成的有机整体', link: '/one/3.5Vue.js是各个模块组成的有机整体'},
                {text: '总结', link: '/one/3.6总结'}
            ]
        }
    ]
}

function two() {
    return [
        {
            text: '第4章 响应系统的作用与实现',
            collapsible: true,
            items: [
                {text: '响应式数据与副作用函数', link: '/two/4.1响应式数据与副作用函数'},
                {text: '响应式数据的基本实现', link: '/two/4.2响应式数据的基本实现'},
                {text: '设计一个完善的响应系统', link: '/two/4.3设计一个完善的响应系统'},
                {text: '分支切换与 cleanup', link: '/two/4.4分支切换与cleanup'},
                {text: '嵌套的 effect 与 effect 栈', link: '/two/4.5嵌套的effect与effect栈'},
                {text: '避免无限递归循环', link: '/two/4.6避免无限递归循环'},
                {text: '调度执行', link: '/two/4.7调度执行'},
                {text: '计算属性 computed 与 lazy', link: '/two/4.8计算属性computed与lazy'},
                {text: 'watch 的实现原理', link: '/two/4.9watch的实现原理'},
                {text: '立即执行的 watch 与回调执行时机', link: '/two/4.10立即执行的watch与回调执行时机'},
                {text: '过期的副作用', link: '/two/4.11过期的副作用'},
                {text: '总结', link: '/two/4.12总结'}
            ]
        },
        {
            text: '第5章 非原始值的响应式方案',
            collapsible: true,
            items: [
                {text: '理解 Proxy 和 Reflect', link: '/two/5.1理解Proxy和Reflect'},
                {text: 'JavaScript 对象及 Proxy 的工作原理', link: '/two/5.2JavaScript对象及Proxy的工作原理'},
                {text: '如何代理 Object', link: '/two/5.3如何代理Object'},
                {text: '合理地触发响应', link: '/two/5.4合理地触发响应'},
                {text: '浅响应与深响应', link: '/two/5.5浅响应与深响应'},
                {text: '只读和浅只读', link: '/two/5.6只读和浅只读'},
                {text: '代理数组', link: '/two/5.7代理数组'},
                {text: '代理 Set 和 Map', link: '/two/5.8代理Set和Map'},
                {text: '总结', link: '/two/5.9总结'}
            ]
        },
        {
            text: '第6章 原始值的响应式方案',
            collapsible: true,
            items: [
                {text: '引入 ref 的概念', link: '/two/6.1引入ref的概念'},
                {text: '响应丢失问题', link: '/two/6.2响应丢失问题'},
                {text: '自动脱 ref', link: '/two/6.3自动脱ref'},
                {text: '总结', link: '/two/6.4总结'}
            ]
        }
    ]
}

function three() {
    return [
        {
            text: '第7章 渲染器的设计',
            collapsible: true,
            items: [
                {text: '渲染器与响应系统的结合', link: '/three/7.1渲染器与响应系统的结合'},
                {text: '渲染器的基本概念', link: '/three/7.2渲染器的基本概念'},
                {text: '自定义渲染器', link: '/three/7.3自定义渲染器'},
                {text: '总结', link: '/three/7.4总结'}
            ]
        },
        {
            text: '第8章 挂载与更新',
            collapsible: true,
            items: [
                {text: '挂载子节点和元素的属性', link: '/three/8.1挂载子节点和元素的属性'},
                {text: 'HTML Attributes 与 DOM Properties', link: '/three/8.2HTMLAttributes与DOMProperties'},
                {text: '正确地设置元素属性', link: '/three/8.3正确地设置元素属性'},
                {text: 'class 的处理', link: '/three/8.4class的处理'},
                {text: '卸载操作', link: '/three/8.5卸载操作'},
                {text: '区分 vnode 的类型', link: '/three/8.6区分vnode的类型'},
                {text: '事件的处理', link: '/three/8.7事件的处理'},
                {text: '事件冒泡与更新时机问题', link: '/three/8.8事件冒泡与更新时机问题'},
                {text: '更新子节点', link: '/three/8.9更新子节点'},
                {text: '文本节点和注释节点', link: '/three/8.10文本节点和注释节点'},
                {text: 'Fragment', link: '/three/8.11Fragment'},
                {text: '总结', link: '/three/8.12总结'}
            ]
        },
        {
            text: '第9章 简单 Diff 算法',
            collapsible: true,
            items: [
                {text: '减少 DOM 操作的性能开销', link: '/three/9.1减少DOM操作的性能开销'},
                {text: 'DOM 复用与 key 的作用', link: '/three/9.2DOM复用与key的作用'},
                {text: '找到需要移动的元素', link: '/three/9.3找到需要移动的元素'},
                {text: '如何移动元素', link: '/three/9.4如何移动元素'},
                {text: '添加新元素', link: '/three/9.5添加新元素'},
                {text: '移除不存在的元素', link: '/three/9.6移除不存在的元素'},
                {text: '总结', link: '/three/9.7总结'}
            ]
        },
        {
            text: '第10章 双端 Diff 算法',
            collapsible: true,
            items: [
                {text: '双端比较的原理', link: '/three/10.1双端比较的原理'},
                {text: '双端比较的优势', link: '/three/10.2双端比较的优势'},
                {text: '非理想状况的处理方式', link: '/three/10.3非理想状况的处理方式'},
                {text: '添加新元素', link: '/three/10.4添加新元素'},
                {text: '移除不存在的元素', link: '/three/10.5移除不存在的元素'},
                {text: '总结', link: '/three/10.6总结'}
            ]
        },
        {
            text: '第11章 快速 Diff 算法',
            collapsible: true,
            items: [
                {text: '相同的前置元素和后置元素', link: '/three/11.1相同的前置元素和后置元素'},
                {text: '判断是否需要进行 DOM 移动操作', link: '/three/11.2判断是否需要进行DOM移动操作'},
                {text: '如何移动元素', link: '/three/11.3如何移动元素'},
                {text: '总结', link: '/three/11.4总结'}
            ]
        }
    ]
}

function four() {
    return [
        {
            text: '第12章 组件的实现原理',
            collapsible: true,
            items: [
                {text: '渲染组件', link: '/four/12.1渲染组件'},
                {text: '组件状态与自更新', link: '/four/12.2组件状态与自更新'},
                {text: '组件实例与组件的生命周期', link: '/four/12.3组件实例与组件的生命周期'},
                {text: 'props 与组件的被动更新', link: '/four/12.4props与组件的被动更新'},
                {text: 'setup 函数的作用与实现', link: '/four/12.5setup函数的作用与实现'},
                {text: '组件事件与 emit 的实现', link: '/four/12.6组件事件与emit的实现'},
                {text: '插槽的工作原理与实现', link: '/four/12.7插槽的工作原理与实现'},
                {text: '注册生命周期', link: '/four/12.8注册生命周期'},
                {text: '总结', link: '/four/12.9总结'}
            ]
        },
        {
            text: '第13章 异步组件与函数式组件',
            collapsible: true,
            items: [
                {text: '异步组件要解决的问题', link: '/four/13.1异步组件要解决的问题'},
                {text: '异步组件的实现原理', link: '/four/13.2异步组件的实现原理'},
                {text: '函数式组件', link: '/four/13.3函数式组件'},
                {text: '总结', link: '/four/13.4总结'}
            ]
        },
        {
            text: '第14章 内建组件和模块',
            collapsible: true,
            items: [
                {text: 'KeepAlive 组件的实现原理', link: '/four/14.1KeepAlive组件的实现原理'},
                {text: 'Teleport 组件的实现原理', link: '/four/14.2Teleport组件的实现原理'},
                {text: 'Transition 组件的实现原理', link: '/four/14.3Transition组件的实现原理'},
                {text: '总结', link: '/four/14.4总结'}
            ]
        }
    ]
}

function five() {
    return [
        {
            text: '第15章 编译器核心技术概览',
            collapsible: true,
            items: [
                {text: '模板 DSL 的编译器', link: '/five/15.1模板DSL的编译器'},
                {text: 'parser 的实现原理与状态机', link: '/five/15.2parser的实现原理与状态机'},
                {text: '构造 AST', link: '/five/15.3构造AST'},
                {text: 'AST 的转换与插件化架构', link: '/five/15.4AST的转换与插件化架构'},
                {text: '将模板 AST 转为 JavaScript AST', link: '/five/15.5将模板AST转为JavaScriptAST'},
                {text: '代码生成', link: '/five/15.6代码生成'},
                {text: '总结', link: '/five/15.7总结'}
            ]
        },
        {
            text: '第16章 解析器',
            collapsible: true,
            items: [
                {text: '文本模式及其对解析器的影响', link: '/five/16.1文本模式及其对解析器的影响'},
                {text: '递归下降算法构造模板 AST', link: '/five/16.2递归下降算法构造模板AST'},
                {text: '状态机的开启与停止', link: '/five/16.3状态机的开启与停止'},
                {text: '解析标签节点', link: '/five/16.4解析标签节点'},
                {text: '解析属性', link: '/five/16.5解析属性'},
                {text: '解析文本与解码 HTML 实体', link: '/five/16.6解析文本与解码HTML实体'},
                {text: '解析插值与注释', link: '/five/16.7解析插值与注释'},
                {text: '总结', link: '/five/16.8总结'}
            ]
        },
        {
            text: '第17章 编译优化',
            collapsible: true,
            items: [
                {text: '动态节点收集与补丁标志', link: '/five/17.1动态节点收集与补丁标志'},
                {text: 'Block 树', link: '/five/17.2Block树'},
                {text: '静态提升', link: '/five/17.3静态提升'},
                {text: '预字符串化', link: '/five/17.4预字符串化'},
                {text: '缓存内联事件处理函数', link: '/five/17.5缓存内联事件处理函数'},
                {text: 'v-once', link: '/five/17.6v-once'},
                {text: '总结', link: '/five/17.7总结'}
            ]
        }
    ]
}

function six() {
    return [
        {
            text: '第18章 同构渲染',
            collapsible: true,
            items: [
                {text: 'CSR、SSR 以及同构渲染', link: '/six/18.1CSR、SSR以及同构渲染'},
                {text: '将虚拟 DOM 渲染为 HTML 字符串', link: '/six/18.2将虚拟DOM渲染为HTML字符串'},
                {text: '将组件渲染为 HTML 字符串', link: '/six/18.3将组件渲染为HTML字符串'},
                {text: '客户端激活的原理', link: '/six/18.4客户端激活的原理'},
                {text: '编写同构的代码', link: '/six/18.5编写同构的代码'},
                {text: '总结', link: '/six/18.6总结'}
            ]
        }
    ]
}
