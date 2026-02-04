import{d as M,p as O,aC as m,c as v,o as p,aB as r,j as a,t as f,_ as h,C as c,G as i}from"./chunks/framework.B_fJ6ASn.js";const T={class:"container"},C={class:"code-block"},N=M({__name:"PlayDom",setup(g){const o=O(""),l={tag:"div",props:{className:"content"},children:[{tag:"h1",children:["原始标题"]},{tag:"p",children:["原始内容"]}]},e={tag:"div",props:{className:"content"},children:[{tag:"h1",children:["更新后的标题"]},{tag:"p",children:["更新后的内容"]},{tag:"span",children:["新增的内容"]}]};function s(){const n=document.getElementById("result");n.innerHTML=`当前虚拟DOM结构：
${JSON.stringify(l,null,2)}

这是一个JavaScript对象，代表了DOM的结构。
相比真实DOM，它在内存中操作，速度更快！`}function D(){const n=document.getElementById("result");n.innerHTML=`更新后的虚拟DOM：
${JSON.stringify(e,null,2)}

注意：我们只是在内存中修改了JavaScript对象，
还没有操作真实的DOM，这个过程非常快！`}function u(){const n=document.getElementById("result");n.innerHTML=`差异对比分析：

🔍 找到的差异：
1. h1标签内容：'原始标题' → '更新后的标题'
2. p标签内容：'原始内容' → '更新后的内容'  
3. 新增了span标签：'新增的内容'

⚡ 更新策略：
- 只更新变化的文本内容
- 新增span元素
- 不需要重新创建整个DOM树

这就是虚拟DOM的精髓：最小化DOM操作！`}console.log("=== 虚拟DOM vs 真实DOM性能对比 ===");const _=performance.now(),b=performance.now();return m(()=>{o.value=`
// 1. 创建虚拟DOM（JavaScript对象）
const virtualDOM = {
    tag: 'div',
    props: { id: 'container' },
    children: [
        {
            tag: 'h1',
            children: ['Hello World']
        },
        {
            tag: 'p',
            children: ['这是一个虚拟DOM示例']
        }
    ]
}

// 2. 真实DOM（如果直接操作，会很慢）
// document.getElementById('container').innerHTML = '...'

// 3. 虚拟DOM的优势：快速比较差异
function diff(oldVDOM, newVDOM) {
    // 比较两个虚拟DOM，找出差异
    // 只更新变化的部分到真实DOM
    console.log('正在比较差异...')
}
    `}),console.log(`创建1000个虚拟DOM元素耗时: ${(b-_).toFixed(2)}ms`),console.log("虚拟DOM在内存中操作，速度非常快！"),(n,t)=>(p(),v("div",null,[t[5]||(t[5]=r("",3)),a("div",T,[t[3]||(t[3]=a("h3",null,"🔧 简单代码示例：",-1)),a("div",C,f(o.value),1),a("button",{onClick:t[0]||(t[0]=d=>s())},"查看虚拟DOM结构"),a("button",{onClick:t[1]||(t[1]=d=>D())},"模拟更新虚拟DOM"),a("button",{onClick:t[2]||(t[2]=d=>u())},"显示差异对比"),t[4]||(t[4]=a("div",{id:"result",class:"code-block",style:{"margin-top":"20px","min-height":"100px"}}," 点击按钮查看效果... ",-1))]),t[6]||(t[6]=r("",1))]))}}),S=h(N,[["__scopeId","data-v-7ca677b7"]]),y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"views/开发/八股文/虚拟dom/index.md","filePath":"views/开发/八股文/虚拟dom/index.md","lastUpdated":1765250267000}'),V={name:"views/开发/八股文/虚拟dom/index.md"},w=Object.assign(V,{setup(g){return(o,l)=>{const e=c("NolebaseGitContributors"),s=c("NolebaseGitChangelog");return p(),v("div",null,[i(S),i(e),i(s)])}}});export{y as __pageData,w as default};
