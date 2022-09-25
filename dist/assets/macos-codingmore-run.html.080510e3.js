import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as i,c as s,a as e,b as a,e as r,d as t}from"./app.4aed7fa9.js";const d={},b=r('<h2 id="\u524D\u7F6E\u73AF\u5883\u7684\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u73AF\u5883\u7684\u51C6\u5907" aria-hidden="true">#</a> \u524D\u7F6E\u73AF\u5883\u7684\u51C6\u5907</h2><ul><li>\u4E00\u53F0\u53EF\u4EE5\u5F00\u673A\u7684\u7535\u8111</li><li>JDK 8</li><li>Maven</li><li>Intellij IDEA\uFF08\u975E\u5FC5\u987B\uFF0C\u53EF\u7528 Eclipse\uFF09</li><li>Visual Studio Code\uFF08\u975E\u5FC5\u987B\uFF0C\u53EF\u7528 hbuilderx\uFF09</li><li>MySQL</li><li>Redis\uFF08\u975E\u5FC5\u987B\uFF0C\u4F1A\u62A5\u9519\uFF0C\u4F46\u4E0D\u5F71\u54CD\u8DD1\uFF09</li><li>OSS\uFF08\u975E\u5FC5\u987B\uFF0C\u4E0A\u4F20\u56FE\u7247\u65F6\u62A5\u9519\uFF0C\u4F46\u4E0D\u5F71\u54CD\u8DD1\uFF09</li></ul><p>\u5BF9\uFF0C\u7F16\u7A0B\u55B5 \u{1F431}\uFF08Spring Boot+Vue \u7684\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE\uFF09\u8981\u60F3\u5728\u672C\u5730\u8DD1\u8D77\u6765\uFF0C\u9700\u8981\u8FD9 8 \u4E2A\u524D\u7F6E\u73AF\u5883\u3002</p><p>\u7B2C\u4E00\u4E2A\u6761\u4EF6\uFF0C\u4E00\u53F0\u53EF\u4EE5\u5F00\u673A\u7684\u7535\u8111\uFF0C\u663E\u7136\u6211\u76F8\u4FE1\u5927\u5BB6\u90FD\u662F\u6709\u7684\u3002\u4E0D\u7136\u600E\u4E48\u5B66\u7F16\u7A0B\u662F\u5427\uFF1F\u77A7\u6211\u8FD9\u5E9F\u8BDD\u771F\u591A\u3002</p><p>\u8FD9\u7BC7\u5148\u4EE5 macOS \u4E3A\u4F8B\uFF0CWindows \u7684\u8BDD\uFF0C\u6211\u53E6\u5F00\u4E00\u7BC7\u3002\u4E0B\u56FE\u662F\u6211\u7684\u4E3B\u529B\u673A iMac \u7684\u914D\u7F6E\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-d98d5c3c-24a9-4d69-a11d-0b323f0c6bb5.png" alt=""></p>',6),p=t("\u7B2C\u4E8C\u4E2A\u6761\u4EF6\uFF0CJDK 8\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),m={href:"https://brew.sh/index_zh-cn",target:"_blank",rel:"noopener noreferrer"},g=t("homebrew"),l=t("\uFF08macOS \u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\uFF09\u5B89\u88C5\uFF0C\u975E\u5E38\u65B9\u9762\uFF0C\u7136\u540E\u7528 "),h={href:"https://www.jenv.be/",target:"_blank",rel:"noopener noreferrer"},u=t("jenv"),_=t(" \u6765\u7BA1\u7406 Java \u7248\u672C\u3002"),v=r(`<p>\u6267\u884C <code>brew -v</code> \u53EF\u4EE5\u67E5\u770B homebrew \u7248\u672C</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-ac4ffa12-4b90-459b-a548-bd91e105f531.png" alt=""></p><p>\u6267\u884C <code>brew install java</code> \u53EF\u4EE5\u5B89\u88C5\u6700\u65B0\u7248 JDK\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-c80146c8-24f0-40ee-ab6b-696bc4a6589d.png" alt=""></p><p>\u6267\u884C <code>brew install adoptopenjdk/openjdk/adoptopenjdk8 --cask</code> \u53EF\u4EE5\u5B89\u88C5\u6700 JDK 8\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-6a46e999-b309-4adc-9567-ade05f55f174.png" alt=""></p><p>\u6267\u884C <code>ls /Library/Java/JavaVirtualMachines/</code> \u53EF\u4EE5\u67E5\u770B\u672C\u673A\u6240\u6709\u5B89\u88C5\u8FC7\u7684 JDK \u5305\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-7b8ee4ad-db7d-4cc6-a9bc-323083eb319c.png" alt=""></p><p>\u901A\u8FC7 <code>jenv add adoptopenjdk-8.jdk/Contents/Home/</code> \u53EF\u4EE5\u5C06\u5B89\u88C5\u8FC7\u7684 JDK \u52A0\u5165\u5230 jenv \u7248\u672C\u5E93\u4E2D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-f34a88d5-6c50-4eec-8343-77518aaf9a4f.png" alt=""></p><p>\u6267\u884C <code>jenv global openjdk64-1.8.0.292</code> \u53EF\u4EE5\u6307\u5B9A\u5F53\u524D\u7684 JDK \u7248\u672C\u3002\u518D\u6267\u884C <code>jenv versions</code> \u53EF\u4EE5\u67E5\u770B\u9ED8\u8BA4\u4F7F\u7528\u7684 JDK \u7248\u672C\uFF08\u5E26<code>*</code>\u7684\uFF09</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-05d7d17f-d214-40c7-98d8-e67083ed38fb.png" alt=""></p><p>\u6267\u884C <code>java -version</code> \u53EF\u4EE5\u67E5\u770B\u5F53\u524D JDK \u7248\u672C</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-a1bb43ca-b3b8-4681-b290-6ddbdf2bc1fc.png" alt=""></p><p>\u7B2C\u4E09\u4E2A\u6761\u4EF6\uFF0CMaven\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 <code>brew install maven</code> \u6765\u5B8C\u6210\u5B89\u88C5\u3002\u901A\u8FC7 <code>mvn -v</code> \u6765\u67E5\u770B\u7248\u672C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-9b4dab03-c720-4f23-8a1e-90fa55130c73.png" alt=""></p><p>\u4E3A\u4E86\u52A0\u5FEB\u9879\u76EE\u4F9D\u8D56\u5305\u7684\u4E0B\u8F7D\u901F\u5EA6\uFF0C\u6211\u4EEC\u9700\u8981\u914D\u7F6E Maven \u7684\u56FD\u5185\u955C\u50CF\u6E90\u3002</p><p>\u627E\u5230 Maven Home\uFF08<code>/Users/yourpath/save/apache-maven-3.8.3</code>\uFF09\uFF0C\u590D\u5236\u4E00\u4EFD settings.xml\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-7743fabc-1a49-44a6-8862-1f31c94b0633.png" alt=""></p><p>\u5230 <code>/Users/you/.m2</code> \u8DEF\u5F84\u4E0B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-31580aab-9990-4553-9557-41dbd748f361.png" alt=""></p><p>\u5728 mirrors \u8282\u70B9\u4E0B\u6DFB\u52A0\u963F\u91CC\u4E91\u955C\u50CF\u5730\u5740\uFF0C\u5E76\u4FDD\u5B58\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;mirror&gt;
  &lt;id&gt;alimaven&lt;/id&gt;
  &lt;name&gt;aliyun maven&lt;/name&gt;
&lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;
  &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
&lt;/mirror&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u56DB\u4E2A\u6761\u4EF6\uFF0CIntellij IDEA\uFF0CJava \u540E\u7AEF\u5F00\u53D1\u5FC5\u5907\u795E\u5668\uFF0C\u53EF\u4EE5\u5B89\u88C5\u793E\u533A\u7248\uFF0C\u4E5F\u53EF\u4EE5\u5B89\u88C5\u65D7\u8230\u7248\u3002</p>`,24),f={href:"https://www.jetbrains.com/zh-cn/idea/download/#section=mac",target:"_blank",rel:"noopener noreferrer"},j=t("https://www.jetbrains.com/zh-cn/idea/download/#section=mac"),w=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-556c70fd-c3bc-46af-9d20-d52783ecc1f5.png",alt:""})],-1),k=e("p",null,"\u7B2C\u4E94\u4E2A\u6761\u4EF6\uFF0CVisual Studio Code\uFF0C\u5728\u7F16\u5199\u524D\u7AEF\u4EE3\u7801\uFF08vue\u3001JavaScript\u3001css \u7B49\uFF09\u65F6\uFF0C\u6BD4 Intellij IDEA \u66F4\u503C\u5F97\u4FE1\u8D56\u3002",-1),y={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},S=t("https://code.visualstudio.com/"),x=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-8b2d3562-09ec-4a93-b40d-9a06816aa46c.png",alt:""})],-1),M=t("\u7B2C\u516D\u4E2A\u6761\u4EF6\uFF0CMySQL\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),D={href:"https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html",target:"_blank",rel:"noopener noreferrer"},I=t("MySQL \u5B98\u7F51"),J=t("\u4E0B\u8F7D\u5B89\u88C5\u5305\u3002"),K=r('<p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u9762\u677F\u770B\u5230 MySQL \u670D\u52A1\uFF08\u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-79175773-ef00-4333-86eb-b2e24dd1c38b.png" alt=""></p><p>\u70B9\u8FDB\u53BB\u53EF\u4EE5\u67E5\u770B MySQL \u8FD0\u884C\u72B6\u6001\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-fc93c46b-2868-4400-8c47-b51a901d38cc.png" alt=""></p><p>\u7B2C\u4E03\u4E2A\u6761\u4EF6\uFF0CRedis\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 <code>brew install redis</code> \u6765\u5B8C\u6210\u5B89\u88C5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-e1b42515-b750-4b74-8d05-832aa0ab1601.png" alt=""></p><p>\u6267\u884C <code>redis-server</code> \u5C31\u53EF\u4EE5\u542F\u52A8 Redis \u670D\u52A1\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-fc207f85-16b8-4943-986f-fb9e20fc8891.png" alt=""></p><p>\u7B2C\u516B\u4E2A\u6761\u4EF6\uFF0COSS\uFF0C\u4E3B\u8981\u7528\u6765\u4FDD\u5B58\u56FE\u7247\uFF0C\u53EF\u4EE5\u901A\u8FC7\u963F\u91CC\u4E91\u5B98\u65B9\u53BB\u8D2D\u4E70\u670D\u52A1\uFF0C\u5E76\u4E14\u521B\u5EFA Bucket\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-996b9d40-b2da-4fdc-9190-b7992b9a880e.png" alt=""></p><p>\u7136\u540E\u914D\u7F6E AccessKey\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-ad8efde7-a420-4fe9-922d-fb63b650e535.png" alt=""></p>',12),V=t("\u9488\u5BF9"),B={href:"https://tobebetterjavaer.com/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},L=t("\u661F\u7403\u7528\u6237"),E=t("\uFF0C\u6211\u4F1A\u5F00\u653E\u81EA\u5DF1\u7684 accessKeyId \u548C accessKeySecret\uFF0C\u8BF7\u52FF\u5916\u6CC4\uFF0C\u514D\u5F97\u88AB\u6076\u610F\u653B\u51FB\u3002"),q=e("h2",{id:"\u4E0B\u8F7D\u7F16\u7A0B\u55B5-codingmore-\u6E90\u7801",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E0B\u8F7D\u7F16\u7A0B\u55B5-codingmore-\u6E90\u7801","aria-hidden":"true"},"#"),t(" \u4E0B\u8F7D\u7F16\u7A0B\u55B5\uFF08codingmore\uFF09\u6E90\u7801")],-1),A=e("p",null,"\u7F16\u7A0B\u55B5\u4E00\u5171\u6709\u4E09\u4E2A\u4ED3\u5E93\uFF0C\u5206\u522B\u662F\uFF1A",-1),C=t("coding-more\uFF1A\u7F16\u7A0B\u55B5 admin \u540E\u7AEF + Web \u524D\u540E\u7AEF\uFF0C\u5730\u5740\uFF1A"),z={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},O=t("https://github.com/itwanger/coding-more"),R=t("codingmore-admin-web\uFF1A\u7F16\u7A0B\u55B5 admin \u524D\u7AEF\uFF0C\u5730\u5740\uFF1A"),Q={href:"https://github.com/itwanger/codingmore-admin-web",target:"_blank",rel:"noopener noreferrer"},H=t("https://github.com/itwanger/codingmore-admin-web"),N=t("codingmore-learning\uFF1A\u7F16\u7A0B\u55B5\u5B66\u4E60\u6559\u7A0B\uFF08\u624B\u628A\u624B\uFF09\uFF0C\u5730\u5740\uFF1A"),W={href:"https://github.com/itwanger/codingmore-learning",target:"_blank",rel:"noopener noreferrer"},P=t("https://github.com/itwanger/codingmore-learning"),U=r('<p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-649fffb0-e21b-4562-8632-b8c05f8d3557.png" alt=""></p><p>\u7F16\u7A0B\u55B5 \u{1F431} \u662F\u4E00\u4E2A\u975E\u5E38\u7EAF\u7CB9\u7684\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE\uFF0C\u540E\u7AEF\u7528\u5230\u7684\u6280\u672F\u5305\u62EC\uFF1A</p><ul><li>Spring Boot \u5BB9\u5668+MVC \u6846\u67B6</li><li>SpringSecurity \u8BA4\u8BC1\u548C\u6388\u6743\u6846\u67B6</li><li>MyBatis ORM \u6846\u67B6</li><li>MyBatis-Plus MyBatis \u589E\u5F3A\u5DE5\u5177</li><li>Nginx \u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</li><li>Druid \u6570\u636E\u5E93\u8FDE\u63A5\u6C60</li><li>OSS \u5BF9\u8C61\u5B58\u50A8</li><li>Redis \u7F13\u5B58\u4E2D\u95F4\u4EF6</li><li>MySQL \u5173\u7CFB\u578B\u6570\u636E\u5E93</li><li>Swagger-UI \u6587\u6863\u751F\u6210\u5DE5\u5177</li><li>Knife4j Swagger \u7F8E\u5316\u589E\u5F3A\u5DE5\u5177</li><li>Hibernator-Validator \u9A8C\u8BC1\u6846\u67B6</li><li>Logback \u65E5\u5FD7\u6846\u67B6</li><li>Lombok \u7B80\u5316\u5BF9\u8C61\u5C01\u88C5\u5DE5\u5177</li><li>Hutool Java \u5DE5\u5177\u7C7B\u5E93</li></ul><p>\u524D\u7AEF\u7528\u5230\u7684\u6280\u672F\u5305\u62EC\uFF1A</p><ul><li>Vue \u524D\u7AEF\u6846\u67B6</li><li>Vue-router \u8DEF\u7531\u6846\u67B6</li><li>Vuex \u5168\u5C40\u72B6\u6001\u7BA1\u7406\u6846\u67B6</li><li>Element \u524D\u7AEF UI \u6846\u67B6</li><li>Axios \u524D\u7AEF HTTP \u6846\u67B6</li><li>Js-cookie cookie \u7BA1\u7406\u5DE5\u5177</li><li>nprogress \u8FDB\u5EA6\u6761\u63A7\u4EF6</li></ul>',5),T=e("strong",null,"\u7B2C\u4E00\u6B65\uFF0C\u4E0B\u8F7D coding-more \u6E90\u7801",-1),G=t("\uFF0C\u6233"),F={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},X=t("\u94FE\u63A5 \u{1F517}"),Y=t("\u8FDB\u5165\u5230\u8BE5\u9875\u9762\u3002"),Z=r('<p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-53a249f7-2de2-4ed2-95e5-5836fbda8d48.png" alt=""></p><p>\u7B2C\u4E8C\u6B65\uFF0C\u5982\u679C\u5B89\u88C5\u6709 GitHub \u684C\u9762\u7248\u7684\u8BDD\uFF0C\u53EF\u4EE5\u70B9\u51FB\u300Copen with GitHub desktop\u300D\uFF0C\u5982\u679C\u6CA1\u6709\u5B89\u88C5\u7684\u8BDD\uFF0C\u53EF\u4EE5\u70B9\u51FB\u300Cdownload zip\u300D</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-f8fb39a5-74a3-4558-a827-db8a106b3f7c.png" alt=""></p><p>\u70B9\u51FB\u300Cshow in finder\u300D\u5C31\u53EF\u4EE5\u770B\u5230\u7F16\u7A0B\u55B5\u7684\u6E90\u7801\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-0d9acadb-9129-4a6a-897f-62eb5f20ce0b.png" alt=""></p><p>\u7B2C\u4E09\u6B65\uFF0C\u901A\u8FC7 Intellij IDEA \u5BFC\u5165\u5C31\u53EF\u4EE5\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-b6f49fde-ca3e-46a3-a6ac-d8bc8d5ce6cc.png" alt=""></p><p>\u7B2C\u4E00\u6B21\u6253\u5F00\u7684\u8BDD\uFF0C\u9700\u8981\u7A0D\u7B49\u7247\u523B\uFF0C\u7B49\u5F85 Maven \u53BB\u4E0B\u8F7D\u4F9D\u8D56\u5305\u3002Maven \u4E0B\u8F7D\u5B8C\u6BD5\u540E\uFF0C\u9879\u76EE\u7684\u7ED3\u6784\u56FE\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-637a7780-8516-46b6-824a-5b07a218ecda.png" alt=""></p>',9),$=t("\u7B2C\u56DB\u6B65\uFF0C\u4E0B\u8F7D codingmore-admin-web \u6E90\u7801\uFF0C\u6233"),ee={href:"https://github.com/itwanger/codingmore-admin-web",target:"_blank",rel:"noopener noreferrer"},te=t("\u94FE\u63A5 \u{1F517}"),oe=t("\u8FDB\u5165\u5230\u8BE5\u9875\u9762\u3002"),ae=r('<p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-5e753b8d-2542-4a6d-bb6d-bdc6313655ad.png" alt=""></p><p>\u6E90\u7801\u4E0B\u8F7D\u5B8C\u6BD5\u540E\uFF0C\u5EFA\u8BAE\u901A\u8FC7 VS Code \u5BFC\u5165\u9879\u76EE\uFF0CVS Code \u5BF9\u524D\u7AEF\u9879\u76EE\u6BD4 Intellij IDEA \u66F4\u52A0\u53CB\u597D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-78d0c9e4-9b36-4544-bc3a-896e2ab05fc0.png" alt=""></p><h2 id="\u90E8\u7F72\u7F16\u7A0B\u55B5-codingmore-\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u7F16\u7A0B\u55B5-codingmore-\u6E90\u7801" aria-hidden="true">#</a> \u90E8\u7F72\u7F16\u7A0B\u55B5\uFF08codingmore\uFF09\u6E90\u7801</h2><h3 id="_01\u3001mysql" tabindex="-1"><a class="header-anchor" href="#_01\u3001mysql" aria-hidden="true">#</a> 01\u3001MySQL</h3><p>\u7B2C\u4E00\u6B65\uFF0C\u5B89\u88C5 Navicat\uFF0C\u8FD9\u662F\u4E00\u4E2A\u56FE\u5F62\u5316\u754C\u9762\u7684\u6570\u636E\u5E93\u7BA1\u7406\u5DE5\u5177\u3002</p><p>\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u8F93\u5165 MySQL \u6570\u636E\u5E93\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u5EFA\u7ACB\u672C\u5730\u8FDE\u63A5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-95ba1a08-171a-4ac7-a4e9-c9b7e19f2d84.png" alt=""></p><p>\u7B2C\u4E8C\u6B65\uFF0C\u6253\u5F00\u94FE\u63A5\uFF0C\u65B0\u5EFA\u6570\u636E\u5E93 codingmore\uFF0C\u5BFC\u5165\u7F16\u7A0B\u55B5\u7684 DB \u6587\u4EF6\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-a18bfb6a-ac2f-4160-8421-964235c21824.png" alt=""></p><p>DB \u6587\u4EF6\u653E\u5728 coding-more/doc \u76EE\u5F55\u4E0B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-1117b32b-ab11-4065-8529-6ceb29bfa7b9.png" alt=""></p><p>\u5BFC\u5165\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u76EE\u524D codingmore \u6240\u7528\u5230\u7684 27 \u4E2A\u6570\u636E\u5E93\u6587\u4EF6\uFF0C\u5176\u4E2D qrtz \u5F00\u5934\u7684\u662F\u5B9A\u65F6\u4EFB\u52A1\u7684\u6301\u4E45\u5316\u8868\uFF0C\u5269\u4F59\u662F\u7F16\u7A0B\u55B5\u7684\u6570\u636E\u5E93\u8868\u6587\u4EF6\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-e9af58ff-d7b0-4494-ab5b-e9fde3e55f9f.png" alt=""></p><p>\u7136\u540E\uFF0C\u4FEE\u6539 <code>codingmore-admin/src/main/resources/application-dev.yml</code> \u6587\u4EF6\u4E2D\u7684 spring.datasource.username\u3001password\u3001url \u7B49\uFF0C\u8BE5\u4E3A\u4F60\u672C\u5730\u7684\u7528\u6237\u540D\u3001\u5BC6\u7801\u548C\u6570\u636E\u5E93\u94FE\u63A5\u5730\u5740\uFF08Web \u7BA1\u7406\u7AEF\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-0d1e490c-97e1-45af-80f2-40b0421eed92.png" alt=""></p><p>\u4FEE\u6539 <code>codingmore-web/src/main/resources/application-dev.yml</code> \u6587\u4EF6\u4E2D\u7684 spring.datasource.username\u3001password\u3001url \u7B49\uFF0C\u8BE5\u4E3A\u4F60\u672C\u5730\u7684\u7528\u6237\u540D\u3001\u5BC6\u7801\u548C\u6570\u636E\u5E93\u94FE\u63A5\u5730\u5740\uFF08Web \u524D\u7AEF\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-bfb6a10d-6899-40cf-8e28-4da74e3e5d14.png" alt=""></p><h3 id="_02\u3001redis" tabindex="-1"><a class="header-anchor" href="#_02\u3001redis" aria-hidden="true">#</a> 02\u3001Redis</h3><p>\u6267\u884C <code>redis-server</code> \u542F\u52A8 Redis \u670D\u52A1\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u914D\u7F6E\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-05a36a7d-449b-49a9-a8da-dc44395b1e66.png" alt=""></p><p>\u8BB0\u4F4F PID\uFF0C\u5982\u679C\u60F3\u5173\u95ED\u7684\u8BDD\uFF0C\u4F7F\u7528 <code>kill -9 PID</code> \u5927\u6CD5\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u7136\u540E\uFF0C\u4FEE\u6539 <code>codingmore-admin/src/main/resources/application-dev.yml</code> \u6587\u4EF6\u4E2D\u7684 spring.redis.host\u3001database\u3001port\u3001password\u3001timeout \u7B49\uFF0C\u8BE5\u4E3A\u4F60\u672C\u5730\u7684 Redis \u94FE\u63A5\u4FE1\u606F\uFF0C\u4E00\u822C\u9ED8\u8BA4\u5C31\u597D\uFF08Web \u7BA1\u7406\u7AEF\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-f4270304-8666-4185-a271-cf803527e08e.png" alt=""></p><p>\u4FEE\u6539 <code>codingmore-web/src/main/resources/application-dev.yml</code> \u6587\u4EF6\u4E2D\u7684 spring.redis.host\u3001database\u3001port\u3001password\u3001timeout \u7B49\uFF0C\u8BE5\u4E3A\u4F60\u672C\u5730\u7684 Redis \u94FE\u63A5\u4FE1\u606F\uFF0C\u4E00\u822C\u9ED8\u8BA4\u5C31\u597D\uFF08Web \u524D\u7AEF\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-325ec5ae-a9ab-445a-a9e7-2446a79e6b23.png" alt=""></p><h3 id="_03\u3001oss" tabindex="-1"><a class="header-anchor" href="#_03\u3001oss" aria-hidden="true">#</a> 03\u3001OSS</h3>',27),re=t("\u975E"),ne={href:"https://tobebetterjavaer.com/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},ce=t("\u661F\u7403\u7528\u6237"),ie=t("\u9700\u8981\u81EA\u5DF1\u8D2D\u4E70\u963F\u91CC\u4E91\u7684 OSS \u670D\u52A1\u548C CDN \u670D\u52A1\u3002"),se={href:"https://tobebetterjavaer.com/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},de=t("\u661F\u7403\u7528\u6237"),be=t("\u53EF\u4EE5\u76F4\u63A5\u79C1\u4FE1\u6211\u83B7\u53D6 accessKeyId \u548C accessKeySecret\u3002"),pe=r('<p>\u7136\u540E\u4FEE\u6539 <code>codingmore-admin/src/main/resources/application-dev.yml</code> \u6587\u4EF6\u4E2D\u7684 aliyun.cdn\u3001oss \u7B49\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-fc8d8cf3-a03f-42cb-ac75-e0909337c8e7.png" alt=""></p><h3 id="_04\u3001codingmore-admin" tabindex="-1"><a class="header-anchor" href="#_04\u3001codingmore-admin" aria-hidden="true">#</a> 04\u3001codingmore-admin</h3><p>\u5728 Intellij IDEA \u4E2D\u8FD0\u884C CodingmoreAdminBootstrap \u4E3B\u7C7B\uFF0C\u542F\u52A8\u7BA1\u7406\u7AEF\u540E\u53F0\u670D\u52A1\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-2a95c98a-2d6e-451e-a732-3633b36245c2.png" alt=""></p><p>\u5982\u679C\u542F\u52A8\u5931\u8D25\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5728 Maven \u9762\u677F\u4E2D\u9009\u62E9 codingmore-admin \u53CC\u51FB\u8FD0\u884C clean \u6E05\u9664\u7F13\u5B58\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-bec7e7f4-57ca-4ece-8b85-97c567ed4e56.png" alt=""></p><h3 id="_05\u3001codingmore-web" tabindex="-1"><a class="header-anchor" href="#_05\u3001codingmore-web" aria-hidden="true">#</a> 05\u3001codingmore-web</h3><p>\u5728 Intellij IDEA \u4E2D\u8FD0\u884C CodingmoreAdminBootstrap \u4E3B\u7C7B\uFF0C\u542F\u52A8\u7BA1\u7406\u7AEF\u540E\u53F0\u670D\u52A1\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-ae72896f-4968-4f66-bbcd-3aadbe610581.png" alt=""></p><p>\u5982\u679C\u542F\u52A8\u5931\u8D25\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5728 Maven \u9762\u677F\u4E2D\u9009\u62E9 codingmore-web \u53CC\u51FB\u8FD0\u884C clean \u6E05\u9664\u7F13\u5B58\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-ef0a5c64-875f-41a5-8060-552aedc245a6.png" alt=""></p><p>\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165 <code>http://localhost:8081</code> \u8BBF\u95EE Web \u524D\u7AEF\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-6da911d2-e510-4dc2-b884-02f08f43cfba.png" alt=""></p><h3 id="_06\u3001codingmore-admin-web" tabindex="-1"><a class="header-anchor" href="#_06\u3001codingmore-admin-web" aria-hidden="true">#</a> 06\u3001codingmore-admin-web</h3><p>\u6253\u5F00\u7EC8\u7AEF\uFF0C\u6267\u884C <code>yarn install</code> \u6DFB\u52A0\u9879\u76EE\u4F9D\u8D56\uFF08yarn \u662F Facebook \u4E3A node.js \u8FD0\u884C\u65F6\u73AF\u5883\u5F00\u53D1\u8F6F\u4EF6\u6253\u5305\u5DE5\u5177\uFF0C\u662F npm \u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u7684\u66FF\u4EE3\u54C1\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-5f93f909-f671-4363-b64c-72e702af3715.png" alt=""></p><p>\u4E4B\u540E\u6267\u884C <code>yarn run dev</code> \u7F16\u8BD1 admin \u524D\u7AEF\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-3a0b8906-d3cd-4771-9f0c-28fe2f8046a9.png" alt=""></p><p>\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165 <code>http://localhost:8080</code> \u5C31\u53EF\u4EE5\u8BBF\u95EE\u5230\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-d2afa887-ebbe-4107-8106-9effcdf15e85.png" alt=""></p><p>\u53EF\u4EE5\u70B9\u51FB\u300C\u83B7\u53D6\u4F53\u9A8C\u8D26\u53F7\u300D\u7684\u65B9\u5F0F\u83B7\u53D6\u767B\u5F55\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002\u5F53\u7136\u4E86\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728 users \u8868\u4E0A\u66B4\u529B\u7834\u89E3\u5BC6\u7801\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-10a4a4f6-a18b-4394-8e9d-ba107f37cb69.png" alt=""></p>',23),me={href:"https://tobebetterjavaer.com/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},ge=t("\u661F\u7403\u7528\u6237"),le=t("\u53EF\u4EE5\u76F4\u63A5\u79C1\u4FE1\u6211\u83B7\u53D6\u8D85\u7EA7\u7BA1\u7406\u5458\u7684\u5BC6\u7801\u3002\u767B\u5F55\u540E\u5C31\u53EF\u4EE5\u770B\u5230\u6587\u7AE0\u5217\u8868\u5566\u3002"),he=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-fc38e67c-05a0-4895-a761-391465986797.png",alt:""})],-1),ue=e("p",null,"\u8FD9\u662F\u6587\u7AE0\u7F16\u8F91\u9875\uFF0C\u662F\u4E0D\u662F\u975E\u5E38\u6E05\u723D\uFF1F",-1),_e=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/macos-codingmore-run-b00a46e0-2537-4dd4-a107-c4632886a430.png",alt:""})],-1),ve=e("p",null,"\u597D\u4E86\uFF0CMac \u7248\u5982\u4F55\u4E0B\u8F7D\u7F16\u7A0B\u55B5\u6E90\u7801\uFF0C\u5982\u4F55\u5728\u672C\u5730\u8DD1\u8D77\u6765\u7F16\u7A0B\u55B5\u7684\u670D\u52A1\u5C31\u544A\u4E00\u6BB5\u843D\u8FA3\uFF0C\u6211\u4EEC\u56DE\u5934\u89C1\uFF01",-1),fe=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function je(we,ke){const o=c("ExternalLinkIcon");return i(),s("div",null,[b,e("p",null,[p,e("a",m,[g,a(o)]),l,e("a",h,[u,a(o)]),_]),v,e("blockquote",null,[e("p",null,[e("a",f,[j,a(o)])])]),w,k,e("blockquote",null,[e("p",null,[e("a",y,[S,a(o)])])]),x,e("p",null,[M,e("a",D,[I,a(o)]),J]),K,e("p",null,[V,e("a",B,[L,a(o)]),E]),q,A,e("blockquote",null,[e("ul",null,[e("li",null,[C,e("a",z,[O,a(o)])]),e("li",null,[R,e("a",Q,[H,a(o)])]),e("li",null,[N,e("a",W,[P,a(o)])])])]),U,e("p",null,[T,G,e("a",F,[X,a(o)]),Y]),Z,e("p",null,[$,e("a",ee,[te,a(o)]),oe]),ae,e("p",null,[re,e("a",ne,[ce,a(o)]),ie,e("a",se,[de,a(o)]),be]),pe,e("p",null,[e("a",me,[ge,a(o)]),le]),he,ue,_e,ve,fe])}var xe=n(d,[["render",je],["__file","macos-codingmore-run.html.vue"]]);export{xe as default};
