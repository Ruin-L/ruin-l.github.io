import{_ as l,C as n,c as i,o as r,aB as t,G as a}from"./chunks/framework.B_fJ6ASn.js";const v=JSON.parse('{"title":"兼容旧版浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"views/开发/前端/兼容旧版浏览器/index.md","filePath":"views/开发/前端/兼容旧版浏览器/index.md","lastUpdated":1758784023000}'),c={name:"views/开发/前端/兼容旧版浏览器/index.md"};function b(o,s,m,u,d,h){const e=n("NolebaseGitContributors"),p=n("NolebaseGitChangelog");return r(),i("div",null,[s[0]||(s[0]=t(`<h1 id="兼容旧版浏览器" tabindex="-1">兼容旧版浏览器 <a class="header-anchor" href="#兼容旧版浏览器" aria-label="Permalink to &quot;兼容旧版浏览器&quot;">​</a></h1><p>对于一些版本老旧的浏览器，我们使用高版本的 vite 打包生成的后的文件不一定兼容，此时可以使用@vitejs/plugin-legacy 包，给构建后的代码添加传统浏览器（通常是不支持现代 ES6+ 语法和 APIs 的旧版浏览器）兼容性支持。这个插件会自动将你的代码转换成老版本的 JavaScript，并且根据需要引入 polyfills。</p><h2 id="使用方法以-vite-为例" tabindex="-1">使用方法以 vite 为例 <a class="header-anchor" href="#使用方法以-vite-为例" aria-label="Permalink to &quot;使用方法以 vite 为例&quot;">​</a></h2><h4 id="下载依赖" tabindex="-1">下载依赖 <a class="header-anchor" href="#下载依赖" aria-label="Permalink to &quot;下载依赖&quot;">​</a></h4><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vitejs/plugin-legacy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="在入口文件-main-ts-里引入" tabindex="-1">在入口文件 main.ts 里引入 <a class="header-anchor" href="#在入口文件-main-ts-里引入" aria-label="Permalink to &quot;在入口文件 main.ts 里引入&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span>import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import legacy from &#39;@vitejs/plugin-legacy&#39;</span></span>
<span class="line"><span>// https://vitejs.dev/config/</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    vue(),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    legacy({</span></span>
<span class="line"><span>      targets: [</span></span>
<span class="line"><span>        &#39;defaults&#39;,</span></span>
<span class="line"><span>        &#39;not IE 11&#39;,</span></span>
<span class="line"><span>        &#39;chrome &gt;= 63&#39;,</span></span>
<span class="line"><span>        &#39;safari &gt;= 11.1&#39;,</span></span>
<span class="line"><span>        &#39;android &gt;= 5&#39;,</span></span>
<span class="line"><span>        &#39;ios &gt;= 10&#39;</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      additionalLegacyPolyfills: [&#39;regenerator-runtime/runtime&#39;],</span></span>
<span class="line"><span>      renderLegacyChunks: true,</span></span>
<span class="line"><span>      polyfills: [</span></span>
<span class="line"><span>        &#39;es.symbol&#39;,</span></span>
<span class="line"><span>        &#39;es.array.filter&#39;,</span></span>
<span class="line"><span>        &#39;es.promise&#39;,</span></span>
<span class="line"><span>        &#39;es.promise.finally&#39;,</span></span>
<span class="line"><span>        &#39;es/map&#39;,</span></span>
<span class="line"><span>        &#39;es/set&#39;,</span></span>
<span class="line"><span>        &#39;es.array.for-each&#39;,</span></span>
<span class="line"><span>        &#39;es.object.define-properties&#39;,</span></span>
<span class="line"><span>        &#39;es.object.define-property&#39;,</span></span>
<span class="line"><span>        &#39;es.object.get-own-property-descriptor&#39;,</span></span>
<span class="line"><span>        &#39;es.object.get-own-property-descriptors&#39;,</span></span>
<span class="line"><span>        &#39;es.object.keys&#39;,</span></span>
<span class="line"><span>        &#39;es.object.to-string&#39;,</span></span>
<span class="line"><span>        &#39;web.dom-collections.for-each&#39;,</span></span>
<span class="line"><span>        &#39;esnext.global-this&#39;,</span></span>
<span class="line"><span>        &#39;esnext.string.match-all&#39;</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    })]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,7)),a(e),a(p)])}const f=l(c,[["render",b]]);export{v as __pageData,f as default};
