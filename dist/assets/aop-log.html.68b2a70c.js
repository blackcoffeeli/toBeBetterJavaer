import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c as o,a as n,b as c,e as i,d as s}from"./app.4aed7fa9.js";const l={},u=i(`<h1 id="spring-aop-\u626B\u76F2" tabindex="-1"><a class="header-anchor" href="#spring-aop-\u626B\u76F2" aria-hidden="true">#</a> Spring AOP \u626B\u76F2</h1><p>AOP \u662F Spring \u4F53\u7CFB\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E24\u4E2A\u6982\u5FF5\u4E4B\u4E00\uFF08\u53E6\u5916\u4E00\u4E2A\u662F IoC\uFF09\uFF0C\u4ECA\u5929\u8FD9\u7BC7\u6587\u7AE0\u5C31\u6765\u5E26\u5927\u5BB6\u901A\u8FC7\u5B9E\u6218\u7684\u65B9\u5F0F\uFF0C\u5728\u7F16\u7A0B\u732B SpringBoot \u9879\u76EE\u4E2D\u4F7F\u7528 AOP \u6280\u672F\u4E3A controller \u5C42\u6DFB\u52A0\u4E00\u4E2A\u5207\u9762\u6765\u5B9E\u73B0\u63A5\u53E3\u8BBF\u95EE\u7684\u7EDF\u4E00\u65E5\u5FD7\u8BB0\u5F55\u3002</p><h3 id="\u4E00\u3001\u5173\u4E8E-aop" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5173\u4E8E-aop" aria-hidden="true">#</a> \u4E00\u3001\u5173\u4E8E AOP</h3><p>AOP\uFF0C\u4E5F\u5C31\u662F Aspect-oriented Programming\uFF0C\u8BD1\u4E3A\u9762\u5411\u5207\u9762\u7F16\u7A0B\uFF0C\u662F\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\u7684\u4E00\u4E2A\u8BBE\u8BA1\u601D\u60F3\uFF0C\u65E8\u5728\u901A\u8FC7\u5207\u9762\u6280\u672F\u4E3A\u4E1A\u52A1\u4E3B\u4F53\u589E\u52A0\u989D\u5916\u7684\u901A\u77E5\uFF08Advice\uFF09\uFF0C\u4ECE\u800C\u5BF9\u58F0\u660E\u4E3A\u201C\u5207\u70B9\u201D\uFF08Pointcut\uFF09\u7684\u4EE3\u7801\u5757\u8FDB\u884C\u7EDF\u4E00\u7BA1\u7406\u548C\u88C5\u9970\u3002</p><p>\u8FD9\u79CD\u601D\u60F3\u975E\u5E38\u9002\u7528\u4E8E\uFF0C\u5C06\u90A3\u4E9B\u4E0E\u6838\u5FC3\u4E1A\u52A1\u4E0D\u90A3\u4E48\u5BC6\u5207\u5173\u8054\u7684\u529F\u80FD\u6DFB\u52A0\u5230\u7A0B\u5E8F\u4E2D\uFF0C\u5C31\u597D\u6BD4\u6211\u4EEC\u4ECA\u5929\u7684\u4E3B\u9898\u2014\u2014\u65E5\u5FD7\u529F\u80FD\uFF0C\u5C31\u662F\u4E00\u4E2A\u5178\u578B\u7684\u6848\u4F8B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/aop-log-1.png" alt=""></p><p>AOP \u662F\u5BF9\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF08Object-oriented Programming\uFF0C\u4FD7\u79F0 OOP\uFF09\u7684\u4E00\u79CD\u8865\u5145\uFF0COOP \u7684\u6838\u5FC3\u5355\u5143\u662F\u7C7B\uFF08class\uFF09\uFF0C\u800C AOP \u7684\u6838\u5FC3\u5355\u5143\u662F\u5207\u9762\uFF08Aspect\uFF09\u3002\u5229\u7528 AOP \u53EF\u4EE5\u5BF9\u4E1A\u52A1\u903B\u8F91\u7684\u5404\u4E2A\u90E8\u5206\u8FDB\u884C\u9694\u79BB\uFF0C\u4ECE\u800C\u964D\u4F4E\u8026\u5408\u5EA6\uFF0C\u63D0\u9AD8\u7A0B\u5E8F\u7684\u53EF\u91CD\u7528\u6027\uFF0C\u540C\u65F6\u4E5F\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u7684\u628A AOP \u7406\u89E3\u4E3A\u8D2F\u7A7F\u4E8E\u65B9\u6CD5\u4E4B\u4E2D\uFF0C\u5728\u65B9\u6CD5\u6267\u884C\u524D\u3001\u6267\u884C\u65F6\u3001\u6267\u884C\u540E\u3001\u8FD4\u56DE\u503C\u540E\u3001\u5F02\u5E38\u540E\u8981\u6267\u884C\u7684\u64CD\u4F5C\u3002</p><h3 id="\u4E8C\u3001aop-\u7684\u76F8\u5173\u672F\u8BED" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001aop-\u7684\u76F8\u5173\u672F\u8BED" aria-hidden="true">#</a> \u4E8C\u3001AOP \u7684\u76F8\u5173\u672F\u8BED</h3><p>\u6765\u770B\u4E0B\u9762\u8FD9\u5E45\u56FE\uFF0C\u8FD9\u662F\u4E00\u4E2A AOP \u7684\u6A21\u578B\u56FE\uFF0C\u5C31\u662F\u5728\u67D0\u4E9B\u65B9\u6CD5\u6267\u884C\u524D\u540E\u6267\u884C\u4E00\u4E9B\u901A\u7528\u7684\u64CD\u4F5C\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u7A0B\u5E8F\u672C\u8EAB\u7684\u8FD0\u884C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/aop-log-2.png" alt=""> \u6211\u4EEC\u4E86\u89E3\u4E0B AOP \u6D89\u53CA\u5230\u7684 5 \u4E2A\u5173\u952E\u672F\u8BED\uFF1A</p><p><strong>1\uFF09\u6A2A\u5207\u5173\u6CE8\u70B9</strong>\uFF0C\u4ECE\u6BCF\u4E2A\u65B9\u6CD5\u4E2D\u62BD\u53D6\u51FA\u6765\u7684\u540C\u4E00\u7C7B\u975E\u6838\u5FC3\u4E1A\u52A1</p><p><strong>2\uFF09\u5207\u9762\uFF08Aspect\uFF09</strong>\uFF0C\u5BF9\u6A2A\u5207\u5173\u6CE8\u70B9\u8FDB\u884C\u5C01\u88C5\u7684\u7C7B\uFF0C\u6BCF\u4E2A\u5173\u6CE8\u70B9\u4F53\u73B0\u4E3A\u4E00\u4E2A\u901A\u77E5\u65B9\u6CD5\uFF1B\u901A\u5E38\u4F7F\u7528 @Aspect \u6CE8\u89E3\u6765\u5B9A\u4E49\u5207\u9762\u3002</p><p><strong>3\uFF09\u901A\u77E5\uFF08Advice\uFF09</strong>\uFF0C\u5207\u9762\u5FC5\u987B\u8981\u5B8C\u6210\u7684\u5404\u4E2A\u5177\u4F53\u5DE5\u4F5C\uFF0C\u6BD4\u5982\u6211\u4EEC\u7684\u65E5\u5FD7\u5207\u9762\u9700\u8981\u8BB0\u5F55\u63A5\u53E3\u8C03\u7528\u524D\u540E\u7684\u65F6\u957F\uFF0C\u5C31\u9700\u8981\u5728\u8C03\u7528\u63A5\u53E3\u524D\u540E\u8BB0\u5F55\u65F6\u95F4\uFF0C\u518D\u53D6\u5DEE\u503C\u3002\u901A\u77E5\u7684\u65B9\u5F0F\u6709\u4E94\u79CD\uFF1A</p><ul><li>@Before\uFF1A\u901A\u77E5\u65B9\u6CD5\u4F1A\u5728\u76EE\u6807\u65B9\u6CD5\u8C03\u7528\u4E4B\u524D\u6267\u884C</li><li>@After\uFF1A\u901A\u77E5\u65B9\u6CD5\u4F1A\u5728\u76EE\u6807\u65B9\u6CD5\u8C03\u7528\u540E\u6267\u884C</li><li>@AfterReturning\uFF1A\u901A\u77E5\u65B9\u6CD5\u4F1A\u5728\u76EE\u6807\u65B9\u6CD5\u8FD4\u56DE\u540E\u6267\u884C</li><li>@AfterThrowing\uFF1A\u901A\u77E5\u65B9\u6CD5\u4F1A\u5728\u76EE\u6807\u65B9\u6CD5\u629B\u51FA\u5F02\u5E38\u540E\u6267\u884C</li><li>@Around\uFF1A\u628A\u6574\u4E2A\u76EE\u6807\u65B9\u6CD5\u5305\u88F9\u8D77\u6765\uFF0C\u5728\u88AB\u8C03\u7528\u524D\u548C\u8C03\u7528\u4E4B\u540E\u5206\u522B\u6267\u884C\u901A\u77E5\u65B9\u6CD5</li></ul><p><strong>4\uFF09\u8FDE\u63A5\u70B9\uFF08JoinPoint\uFF09</strong>\uFF0C\u901A\u77E5\u5E94\u7528\u7684\u65F6\u673A\uFF0C\u6BD4\u5982\u63A5\u53E3\u65B9\u6CD5\u88AB\u8C03\u7528\u65F6\u5C31\u662F\u65E5\u5FD7\u5207\u9762\u7684\u8FDE\u63A5\u70B9\u3002</p><p><strong>5\uFF09\u5207\u70B9\uFF08Pointcut\uFF09</strong>\uFF0C\u901A\u77E5\u529F\u80FD\u88AB\u5E94\u7528\u7684\u8303\u56F4\uFF0C\u6BD4\u5982\u672C\u7BC7\u65E5\u5FD7\u5207\u9762\u7684\u5E94\u7528\u8303\u56F4\u662F\u6240\u6709 controller \u7684\u63A5\u53E3\u3002\u901A\u5E38\u4F7F\u7528 @Pointcut \u6CE8\u89E3\u6765\u5B9A\u4E49\u5207\u70B9\u8868\u8FBE\u5F0F\u3002</p><p>\u5207\u5165\u70B9\u8868\u8FBE\u5F0F\u7684\u8BED\u6CD5\u683C\u5F0F\u89C4\u8303\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>execution(modifiers-pattern? ret-type-pattern declaring-type-pattern?
				name-pattern(param-pattern)
                throws-pattern?)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>modifiers-pattern?</code> \u4E3A\u8BBF\u95EE\u6743\u9650\u4FEE\u9970\u7B26</li><li><code>ret-type-pattern</code> \u4E3A\u8FD4\u56DE\u7C7B\u578B\uFF0C\u901A\u5E38\u7528 <code>*</code> \u6765\u8868\u793A\u4EFB\u610F\u8FD4\u56DE\u7C7B\u578B</li><li><code>declaring-type-pattern?</code> \u4E3A\u5305\u540D</li><li><code>name-pattern</code> \u4E3A\u65B9\u6CD5\u540D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>*</code> \u6765\u8868\u793A\u6240\u6709\uFF0C\u6216\u8005 <code>set*</code> \u6765\u8868\u793A\u6240\u6709\u4EE5 set \u5F00\u5934\u7684\u7C7B\u540D</li><li><code>param-pattern)</code> \u4E3A\u53C2\u6570\u7C7B\u578B\uFF0C\u591A\u4E2A\u53C2\u6570\u53EF\u4EE5\u7528 <code>,</code> \u9694\u5F00\uFF0C\u5404\u4E2A\u53C2\u4E0E\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>*</code> \u6765\u8868\u793A\u6240\u6709\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>(..)</code> \u8868\u793A\u96F6\u4E2A\u6216\u8005\u4EFB\u610F\u53C2\u6570</li><li><code>throws-pattern?</code> \u4E3A\u5F02\u5E38\u7C7B\u578B</li><li><code>?</code> \u8868\u793A\u524D\u9762\u7684\u4E3A\u53EF\u9009\u9879</li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;execution(public * com.codingmore.controller.*.*(..))&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8868\u793A <code>com.codingmore.controller</code> \u5305\u4E0B\u7684\u6240\u6709 public \u65B9\u6CD5\u90FD\u8981\u5E94\u7528\u5207\u9762\u7684\u901A\u77E5\u3002</p><h3 id="\u4E09\u3001\u5B9E\u64CD-aop-\u8BB0\u5F55\u63A5\u53E3\u8BBF\u95EE\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5B9E\u64CD-aop-\u8BB0\u5F55\u63A5\u53E3\u8BBF\u95EE\u65E5\u5FD7" aria-hidden="true">#</a> \u4E09\u3001\u5B9E\u64CD AOP \u8BB0\u5F55\u63A5\u53E3\u8BBF\u95EE\u65E5\u5FD7</h3><p>\u7B2C\u4E00\u6B65\uFF0C\u5728 Spring Boot \u9879\u76EE\u7684 pom.xml \u6587\u4EF6\u4E2D\u6DFB\u52A0 spring-boot-starter-aop \u4F9D\u8D56\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-aop&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u6DFB\u52A0\u65E5\u5FD7\u4FE1\u606F\u5C01\u88C5\u7C7B WebLog\uFF0C\u7528\u4E8E\u8BB0\u5F55\u4EC0\u4E48\u6837\u7684\u64CD\u4F5C\u3001\u64CD\u4F5C\u7684\u4EBA\u662F\u8C01\u3001\u5F00\u59CB\u65F6\u95F4\u3001\u82B1\u8D39\u7684\u65F6\u95F4\u3001\u64CD\u4F5C\u7684\u8DEF\u5F84\u3001\u64CD\u4F5C\u7684\u65B9\u6CD5\u540D\u3001\u64CD\u4F5C\u4E3B\u673A\u7684 IP\u3001\u8BF7\u6C42\u53C2\u6570\u3001\u8FD4\u56DE\u7ED3\u679C\u7B49\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Controller\u5C42\u7684\u65E5\u5FD7\u5C01\u88C5\u7C7B
 * Created by macro on 2018/4/26.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebLog</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> startTime<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> spendTime<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> basePath<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> uri<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> method<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ip<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> parameter<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> result<span class="token punctuation">;</span>
    <span class="token comment">//\u7701\u7565\u4E86getter,setter\u65B9\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u6B65\uFF0C\u6DFB\u52A0\u7EDF\u4E00\u65E5\u5FD7\u5904\u7406\u5207\u9762 WebLogAspect\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u7EDF\u4E00\u65E5\u5FD7\u5904\u7406\u5207\u9762
 * Created by \u77F3\u78CA
 */</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebLogAspect</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> LOGGER <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">WebLogAspect</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;execution(public * com.codingmore.controller.*.*(..))&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">webLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doBefore</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">,</span> returning <span class="token operator">=</span> <span class="token string">&quot;ret&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAfterReturning</span><span class="token punctuation">(</span><span class="token class-name">Object</span> ret<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">doAround</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u8BF7\u6C42\u5BF9\u8C61</span>
        <span class="token class-name">ServletRequestAttributes</span> attributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> attributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8BB0\u5F55\u8BF7\u6C42\u4FE1\u606F(\u901A\u8FC7Logstash\u4F20\u5165Elasticsearch)</span>
        <span class="token class-name">WebLog</span> webLog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Signature</span> signature <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MethodSignature</span> methodSignature <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodSignature</span><span class="token punctuation">)</span> signature<span class="token punctuation">;</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> methodSignature<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">ApiOperation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ApiOperation</span> log <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">ApiOperation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            webLog<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> urlStr <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRequestURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webLog<span class="token punctuation">.</span><span class="token function">setBasePath</span><span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">removeSuffix</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">,</span> <span class="token class-name">URLUtil</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webLog<span class="token punctuation">.</span><span class="token function">setIp</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getRemoteUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> logMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spendTime&quot;</span><span class="token punctuation">,</span>webLog<span class="token punctuation">.</span><span class="token function">getSpendTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">,</span>webLog<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        LOGGER<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>webLog<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u56DB\u6B65\uFF0C\u8FD0\u884C\u9879\u76EE\uFF0C\u5E76\u5BF9 controller \u4E0B\u7684\u67D0\u4E2A\u63A7\u5236\u5668\u8FDB\u884C\u6D4B\u8BD5\u3002</p><blockquote><p>Swagger knife4j \u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:9022/doc.html</p></blockquote><p>\u6267\u884C\u767B\u5F55\u7528\u6237\u67E5\u8BE2\u64CD\u4F5C\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/aop-log-3.png" alt=""></p><p>\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u65E5\u5FD7\u4FE1\u606F\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/aop-log-4.png" alt=""> \u6E90\u7801\u5730\u5740\uFF1A</p>`,36),r={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},k=s("https://github.com/itwanger/coding-more"),d=n("p",null,"\u53C2\u8003\u94FE\u63A5\uFF1A",-1),m=n("blockquote",null,[n("p",null,[s("\u4F5C\u8005 cxuan\uFF1Ahttps://www.cnblogs.com/cxuanBlog/p/13060510.html"),n("br"),s(" \u7070\u5C0F\u733F\uFF1Ahttps://bbs.huaweicloud.com/blogs/289045"),n("br"),s(" \u5C71\u9AD8\u6211\u4E3A\u5CF0\uFF1Ahttps://www.cnblogs.com/liaojie970/p/7883687.html"),n("br"),s(" macrozheng\uFF1Ahttps://github.com/macrozheng/mall")])],-1),v=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function g(b,h){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[k,c(a)])])]),d,m,v])}var y=t(l,[["render",g],["__file","aop-log.html.vue"]]);export{y as default};
