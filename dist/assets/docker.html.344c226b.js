import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as c,c as s,a as e,b as a,e as i,d as t}from"./app.4aed7fa9.js";const l={},d=i('<h3 id="\u5173\u4E8E-docker" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-docker" aria-hidden="true">#</a> \u5173\u4E8E Docker</h3><p>Docker \u662F\u7528 go \u8BED\u8A00\u7F16\u5199\u7684\uFF0C\u8FD9\u4E5F\u662F go \u8BED\u8A00\u8FD1\u4E9B\u5E74\u8D8A\u6765\u8D8A\u706B\u7684\u539F\u56E0\u4E4B\u4E00\u3002\u5173\u4E8E Docker\uFF0C\u6709 3 \u4E2A\u91CD\u8981\u7684\u6982\u5FF5\u9700\u8981\u4E86\u89E3\u4E0B\uFF1A</p><ul><li>image\uFF1A\u955C\u50CF\uFF0C\u4E00\u4E2A\u6587\u4EF6\uFF0C\u7528\u6765\u521B\u5EFA\u5BB9\u5668\uFF1B\u5982\u679C\u4F60\u6709 Windows \u88C5\u673A\u7ECF\u5386\uFF0C\u90A3\u53EF\u4EE5\u5F88\u597D\u7406\u89E3\u955C\u50CF\u8FD9\u4E2A\u8BCD\u7684\u542B\u4E49\uFF0C\u53CD\u6B63\u6211\u5E74\u5C11\u7684\u65F6\u5019\u6CA1\u5C11\u628A Windows \u955C\u50CF\u523B\u76D8\u91CD\u88C5\u7CFB\u7EDF\u3002</li><li>container\uFF1A\u5BB9\u5668\uFF0C\u4E00\u4E2A\u53EF\u8FD0\u884C\u7684\u955C\u50CF\u5B9E\u4F8B\uFF0C\u91CC\u9762\u8FD0\u884C\u7740\u4E00\u4E2A\u5B8C\u6574\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u505A\u4E00\u5207\u4F60\u5F53\u524D\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u4EE5\u505A\u7684\u4E8B\u60C5\u3002</li><li>Dockerfile\uFF1A\u955C\u50CF\u6784\u5EFA\u7684\u6A21\u677F\uFF0C\u63CF\u8FF0\u955C\u50CF\u6784\u5EFA\u7684\u6B65\u9AA4\u3002</li></ul><p>\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u662F\uFF0C\u901A\u8FC7 Dockerfile \u6784\u5EFA\u51FA\u955C\u50CF\uFF0C\u7136\u540E\u901A\u8FC7\u955C\u50CF\u6784\u5EFA\u5BB9\u5668\uFF0C\u5BB9\u5668\u91CC\u53EF\u4EE5\u8DD1\u7A0B\u5E8F\u3002\u53E6\u5916\uFF0C\u4E00\u4E2A\u955C\u50CF\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u5BB9\u5668\uFF0C\u6BCF\u4E2A\u5BB9\u5668\u4E4B\u95F4\u662F\u76F8\u4E92\u9694\u79BB\u7684\u3002</p><p>\u5BF9\u4E8E\u6211\u4EEC\u5F00\u53D1\u4EBA\u5458\u6765\u8BF4\uFF0CDocker \u53EF\u4EE5\u505A\u5230\uFF1A</p><ul><li>\u7F16\u5199\u672C\u5730\u4EE3\u7801</li><li>\u4F7F\u7528 Docker \u5C06\u7A0B\u5E8F\u63A8\u9001\u5230\u6D4B\u8BD5\u73AF\u5883</li><li>\u53D1\u73B0 bug \u540E\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u4FEE\u590D\uFF0C\u91CD\u65B0\u90E8\u7F72\u5230\u6D4B\u8BD5\u73AF\u5883\u6D4B\u8BD5</li><li>\u6D4B\u8BD5\u5B8C\u6210\u540E\uFF0C\u63A8\u9001\u5230\u751F\u4EA7\u73AF\u5883</li></ul><p>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0CDocker \u63D0\u4F9B\u7684\u662F\u5F00\u53D1\u73AF\u5883\u3001\u6D4B\u8BD5\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u7684\u4E00\u81F4\u6027\uFF0C\u7EC6\u7EC6\u60F3\u4E00\u4E0B\uFF0C\u662F\u4E0D\u662F\u633A\u6050\u6016\u7684\u3002\u3002\u3002\u3002\u3002</p><p>\u4EE5\u540E\u6211\u4EEC\u5F00\u53D1\u4EBA\u5458\u518D\u8BF4\u4EC0\u4E48\u201C\u6211\u672C\u5730\u8FD0\u884C\u7684\u597D\u597D\u7684\u5440\u201D\u5C31\u7529\u4E0D\u4E86\u9505\u4E86\uFF0C\u54C8\u54C8\u3002</p><p>Java \u7A0B\u5E8F\u5458\u5E94\u8BE5\u5BF9 Docker \u8FD9\u53E5\u5BA3\u4F20\u8BED\u5F88\u719F\u6089\uFF1A</p><blockquote><p>Build\u2002once\uFF0CRun\u2002anywhere\uFF08\u642D\u5EFA\u4E00\u6B21\uFF0C\u5230\u5904\u80FD\u7528\uFF09</p></blockquote><p>Docker \u91C7\u7528\u7684\u662F CS \u67B6\u6784\uFF0C\u5BA2\u6237\u7AEF\u4E0E Docker \u5B88\u62A4\u8FDB\u7A0B\u4EA4\u4E92\uFF0C\u540E\u8005\u8D1F\u8D23\u6784\u5EFA\u3001\u8FD0\u884C\u548C\u5206\u53D1 Docker \u5BB9\u5668\u7684\u5DE5\u4F5C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-5583604e-5ef8-4187-b29b-ff8527829141.png" alt=""></p><p>Docker \u7684\u5E94\u7528\u573A\u666F\u975E\u5E38\u4E30\u5BCC\uFF0C\u6BD4\u5982\u8BF4\uFF1A</p><ul><li>\u81EA\u52A8\u6253\u5305\u548C\u90E8\u7F72\u5E94\u7528</li><li>\u521B\u5EFA\u8F7B\u91CF\u3001\u79C1\u6709\u7684PaaS\u73AF\u5883</li><li>\u81EA\u52A8\u5316\u6D4B\u8BD5\u548C\u6301\u7EED\u96C6\u6210/\u90E8\u7F72</li><li>\u90E8\u7F72\u5E76\u6269\u5C55Web\u5E94\u7528\u3001\u6570\u636E\u5E93\u548C\u540E\u7AEF\u670D\u52A1\u5668</li><li>\u521B\u5EFA\u5B89\u5168\u6C99\u76D2</li><li>\u8F7B\u91CF\u7EA7\u7684\u684C\u9762\u865A\u62DF\u5316</li></ul><h3 id="\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-docker" aria-hidden="true">#</a> \u5B89\u88C5 Docker</h3><p>Docker Engine\uFF08\u5F15\u64CE\uFF09\u9700\u8981\u5B89\u88C5\u5728 64 \u4F4D\u7684 Linux \u670D\u52A1\u5668\u4E0A\uFF0832 \u4F4D\u4E0D\u652F\u6301\uFF09\uFF0C\u5E76\u4E14\u9700\u8981\u4E00\u4E9B\u5148\u51B3\u6761\u4EF6\uFF08\u9488\u5BF9 CentOS \u7CFB\u7EDF\uFF09\uFF1A</p>',16),p=t("PS\uFF1ALinux \u793E\u533A\u5DF2\u4E0D\u518D\u7EF4\u62A4 CentOS 8\uFF0C\u5BFC\u81F4 yum \u6E90\u9700\u8981"),u={href:"https://help.aliyun.com/document_detail/405635.htm",target:"_blank",rel:"noopener noreferrer"},g=t("\u5207\u6362"),b=t("\uFF0C\u540E\u9762\u6253\u7B97\u628A\u7CFB\u7EDF\u5207\u6362\u4E3A Anolis\u6216Alinux"),v=e("li",null,"\u5FC5\u987B\u662F CentOS 7 \u6216\u8005 8\u7248\u672C\uFF0C\u4EE5\u4E0B\u7248\u672C\u4E0D\u652F\u6301",-1),m=e("li",null,"centos-extras \u5B58\u50A8\u5E93\u5FC5\u987B\u662F\u542F\u7528\u7684\uFF0C\u4E00\u822C\u662F\u542F\u7528\u7684\uFF0C\u5982\u679C\u6CA1\u542F\u7528\u7684\u8BDD\uFF0C\u9700\u8981\u624B\u52A8\u542F\u7528",-1),k=t("\u63A8\u8350\u4F7F\u7528 overlay2\uFF08\u6233"),h={href:"https://www.cnblogs.com/FengZeng666/p/14173906.html",target:"_blank",rel:"noopener noreferrer"},_=t("\u94FE\u63A5"),f=t("\u4E86\u89E3\uFF09\u5B58\u50A8\u9A71\u52A8"),j=i(`<p>\u6211\u7684\u4E91\u670D\u52A1\u5668\u5B89\u88C5\u7684\u662F CentOS \u7CFB\u7EDF\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u4EE5 CentOS \u4F5C\u4E3A\u6F14\u793A\u73AF\u5883\u3002\u6211\u4E2A\u4EBA\u66F4\u559C\u6B22 RPM\uFF08Red-Hat Package Manager\uFF0C\u7EA2\u5E3D\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\uFF09\u5B89\u88C5\u5305\u7684\u65B9\u5F0F\uFF0C\u7B80\u5355\u9AD8\u6548\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u5B89\u88C5 yum-utils \u5DE5\u5177\u5305\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u4F7F\u7528 yum-utils \u63D0\u4F9B\u7684 yum-config-manager \u5DE5\u5177\u914D\u7F6E Docker \u7684\u5B89\u88C5\u4ED3\u5E93\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum-config-manager \\
    --add-repo \\
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u6B65\uFF0C\u5B89\u88C5 Docker \u5F15\u64CE\uFF08\u5305\u62EC Docker Engine, containerd, \u548C Docker Compose\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B2C\u56DB\u6B65\uFF0C\u542F\u52A8 Docker\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B2C\u4E94\u6B65\uFF0C\u9A8C\u8BC1 Docker \u662F\u5426\u6B63\u786E\u5B89\u88C5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u51FA\u73B0\u4EE5\u4E0B\u63D0\u793A\u4FE1\u606F\uFF0C\u5C31\u8868\u660E Docker \u5B89\u88C5\u6210\u529F\u4E86\uFF01</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-e1443e64-810b-46e3-9c1c-f144cdca1a35.png" alt=""></p><p>\u4EE5\u4E0A\u662F Docker \u5B98\u65B9\u63D0\u4F9B\u7684\u5B89\u88C5\u65B9\u5F0F\uFF0C\u7A0D\u663E\u590D\u6742\uFF0C\u5176\u5B9E\u6211\u4EEC\u53EF\u4EE5\u7528\u66F4\u7B80\u6D01\u7684\u65B9\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9996\u5148\u5B89\u88C5 Docker
yum -y install docker

# \u7136\u540E\u542F\u52A8 Docker \u670D\u52A1
service docker start

# \u6D4B\u8BD5\u5B89\u88C5\u662F\u5426\u6210\u529F
docker -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Docker \u9488\u5BF9 Windows \u548C macOS \u7CFB\u7EDF\u90FD\u63D0\u4F9B\u4E86\u684C\u9762\u7248\uFF0C\u53EF\u4EE5\u5230\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u5305\u3002</p>`,16),x=t("Docker \u4E0B\u8F7D\u5730\u5740\uFF1A"),D={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},y=t("https://docs.docker.com/get-docker/"),q=i(`<p>\u6211\u8FD9\u91CC\u4EE5 macOS \u4E3A\u4F8B\uFF0CM1 \u82AF\u7247\u53EF\u4EE5\u9009\u62E9 Apple Chip\u3002\u4E0B\u8F7D\u5B8C\u6210\u540E\u76F4\u63A5\u50BB\u74DC\u5F0F\u5B89\u88C5\u5C31\u53EF\u4EE5\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-f4cd508b-c77b-44a1-979f-b4e9e7ff82ef.png" alt=""></p><p>\u5B89\u88C5\u5E76\u542F\u52A8\u6210\u529F\u540E\u7684\u754C\u9762\u5982\u4E0B\u6240\u793A:</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-c78c5bea-aa4c-472f-aa69-20854211fd02.png" alt=""></p><p>\u6309\u7167\u63D0\u793A\uFF0C\u5728\u7EC8\u7AEF\u8F93\u5165\u547D\u4EE4 <code>docker run -d -p 80:80 docker/getting-started</code>\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-9d04a0e6-7e74-4a36-bc39-7abc0079ff16.png" alt=""></p><p>\u518D\u6B21\u56DE\u5230 Docker \u684C\u9762\u7248\uFF0C\u53EF\u4EE5\u770B\u5230\u521A\u521A\u901A\u8FC7 80 \u7AEF\u53E3\u5728 Docker \u4E2D\u8DD1\u8D77\u6765\u7684 Docker \u6559\u7A0B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-36708add-535a-41d3-bbcf-68e2750e5f16.png" alt=""></p><p>\u70B9\u51FB\u300Copen in browser\u300D\u56FE\u6807\u5C31\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u6253\u5F00\u6559\u7A0B\u6587\u6863\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-209a79c6-294f-4f0d-9fe1-1ab62190d4ef.png" alt=""></p><p>Windows \u7528\u6237\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6211\u4E4B\u524D\u63A8\u8350\u7684 chocolatey \u547D\u4EE4\u884C\u5DE5\u5177\u5B89\u88C5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-4ef004a5-5b96-41eb-8621-65edfbe64f14.png" alt=""></p><p>\uFF08Windows \u7684\u5B89\u88C5\u7B49\u4E0B\u4E00\u6B21\u62FF\u5230\u5C0F\u7C73\u7684\u7B14\u8BB0\u672C\u540E\uFF0C\u6211\u88C5\u4E00\u4E2A\u628A\u8FD9\u90E8\u5206\u8865\u5145\u5B8C\u6574\uFF09</p><h3 id="\u5F00\u542F-docker-\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-docker-\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650" aria-hidden="true">#</a> \u5F00\u542F Docker \u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650</h3><p>\u4E3A\u4E86\u5C06\u6211\u4EEC\u672C\u5730\u7684\u5E94\u7528\u7A0B\u5E8F\u90E8\u7F72\u5230 Docker \u670D\u52A1\u5668\u4E0A\uFF0C\u6211\u4EEC\u9700\u8981\u5F00\u542F\u4E00\u4E0B Docker \u7684\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6253\u5F00 Docker \u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /usr/lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u5728 service \u8282\u70B9\u4E0B\u7F16\u8F91 ExecStart \u5C5E\u6027\uFF0C\u589E\u52A0 <code>-H tcp://0.0.0.0:2375</code></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-a1be68f4-cb1b-45b1-ab6a-b39259a3ef39.png" alt=""></p><p>\u8FD9\u6837\u5C31\u76F8\u5F53\u4E8E\u5BF9\u5916\u5F00\u653E\u4E86 2375 \u7AEF\u53E3\uFF0C\u5982\u679C\u4F60\u5B89\u88C5\u4E86\u5B9D\u5854\u9762\u677F\uFF0C\u8BB0\u5F97\u5728\u5B89\u5168\u9875\u653E\u884C\u8BE5\u7AEF\u53E3\uFF0C\u540C\u65F6\uFF0C\u4E91\u670D\u52A1\u5668\u7684\u9632\u706B\u5899\u4E5F\u8981\u653E\u5F00\u8BE5\u7AEF\u53E3\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-9bddcf0e-c6a7-414d-82ef-7881009ea6c9.png" alt=""></p><p>\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u91CD\u542F Docker\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload 
systemctl restart docker 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165 <code>http://ip:2375/version</code> \u6D4B\u8BD5\u4E00\u4E0B\u662F\u5426\u751F\u6548\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-29852364-5b55-43b4-a7fa-6a9c4a592606.png" alt=""></p><p>\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728 Intellij IDEA \u4E2D\u914D\u7F6E\u4E00\u4E0B Docker \u7684 TCP socket\uFF0C\u5982\u679C\u51FA\u73B0 connection successful \u5C31\u8868\u660E\u94FE\u63A5\u6210\u529F\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-a6e42514-8740-48ac-8baf-b97f49cb1818.png" alt=""></p><h3 id="\u4F7F\u7528-docker-\u90E8\u7F72-spring-boot" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-docker-\u90E8\u7F72-spring-boot" aria-hidden="true">#</a> \u4F7F\u7528 Docker \u90E8\u7F72 Spring Boot</h3><p>\u7B2C\u4E00\u6B65\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684 Spring Boot \u9879\u76EE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-3f748cc6-2efe-487d-9799-f02794145aec.png" alt=""></p><p>\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684 Web \u9879\u76EE\uFF0C\u53EA\u6709\u4E00\u4E2A\u63A7\u5236\u5668\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DockerController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Docker\uFF0C\u6211\u544A\u8BC9\u4F60\uFF0C\u6C89\u9ED8\u738B\u4E8C\u662F\u6C99\u96D5&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@RequestMapping\u3001@RestController \u6CE8\u89E3\u6211\u4EEC\u5728\u524D\u51E0\u4E2A\u7AE0\u8282\u4ECB\u7ECD\u8FC7\u4E86\uFF0C\u4E5F\u5C31\u662F\u8868\u660E\u6211\u4EEC\u8FD9\u662F\u4E00\u4E2A SpringMVC \u7684\u9879\u76EE\uFF0C<code>/</code> \u8DEF\u5F84\u610F\u5473\u7740\u6211\u4EEC\u53EA\u8981\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165 <code>localhost:8080</code> \u5C31\u53EF\u4EE5\u53D1\u9001\u8BF7\u6C42\u4E86\uFF0C\u54CD\u5E94\u7ED3\u679C\u4E3A \u201CDocker\uFF0C\u6211\u544A\u8BC9\u4F60\uFF0C\u6C89\u9ED8\u738B\u4E8C\u662F\u6C99\u96D5\u201D\u3002</p><p>\u542F\u52A8\u670D\u52A1\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 Intellij IDEA \u7684 HTTP Client \u9A8C\u8BC1\u4E00\u4E0B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-78c3e7e5-e208-417e-9b9f-4fc97643f4da.png" alt=""></p><p>OK\uFF0C\u9879\u76EE\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u3002</p><p>\u7B2C\u4E8C\u6B65\uFF0C\u6784\u5EFA Spring Boot \u9879\u76EE\u7684 Docker \u955C\u50CF\u6587\u4EF6 Dockerfile\u3002</p><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA Dockerfile \u6587\u4EF6\uFF0C\u89C1\u4E0B\u56FE\u4F4D\u7F6E\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-08d6ce30-8192-4a7e-8bdc-95adb91c7c74.png" alt=""></p><p>\u5177\u4F53\u5185\u5BB9\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY \${JAR_FILE} app.jar
ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>FROM openjdk:8-jdk-alpine</code>\uFF1A\u8868\u793A\u4F7F\u7528 JDK8 \u4E3A\u57FA\u7840\u955C\u50CF\u3002</li><li><code>ARG JAR_FILE=target/*.jar</code>\uFF1A\u8868\u793A\u5B9A\u4E49\u4E00\u4E2A\u53C2\u6570\u540D\u4E3A JAR_FILE\uFF0C\u503C\u4E3A <code>target/*.jar</code> \u7684\u6784\u5EFA\u53C2\u6570</li><li><code>COPY \${JAR_FILE} app.jar</code>\uFF1A\u8868\u793A\u628A target \u76EE\u5F55\u4E0B\u7684 jar \u6587\u4EF6\u590D\u5236\u4E00\u4EFD\u65B0\u7684\u5230\u955C\u50CF\u5185\u7684 app.jar \u6587\u4EF6</li><li><code>ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/app.jar&quot;]</code>\uFF1A\u8868\u793A\u901A\u8FC7 <code>java -jar</code> \u7684\u5F62\u5F0F\u8FD0\u884C <code>app.jar</code>\uFF0CENTRYPOINT \u7528\u6765\u914D\u7F6E\u5BB9\u5668\u542F\u52A8\u65F6\u7684\u8FD0\u884C\u547D\u4EE4\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8FD0\u884C\u547D\u4EE4\uFF0C\u540E\u9762\u662F\u4E00\u4E2A\u4E00\u4E2A\u53C2\u6570\u3002</li></ul><p>\u7B2C\u4E09\u6B65\uFF0C\u5728 pom.xml \u6587\u4EF6\u4E2D\u6DFB\u52A0 Maven \u7684 Docker \u63D2\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;plugin&gt;
    &lt;groupId&gt;com.spotify&lt;/groupId&gt;
    &lt;artifactId&gt;docker-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;1.2.2&lt;/version&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;id&gt;build-image&lt;/id&gt;
            &lt;phase&gt;package&lt;/phase&gt;
            &lt;goals&gt;
                &lt;goal&gt;build&lt;/goal&gt;
            &lt;/goals&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
    &lt;configuration&gt;
        &lt;dockerHost&gt;http://ip:2375&lt;/dockerHost&gt;
        &lt;imageName&gt;itwanger/\${project.artifactId}&lt;/imageName&gt;
        &lt;imageTags&gt;
            &lt;imageTag&gt;\${project.version}&lt;/imageTag&gt;
        &lt;/imageTags&gt;
        &lt;forceTags&gt;true&lt;/forceTags&gt;
        &lt;dockerDirectory&gt;\${project.basedir}&lt;/dockerDirectory&gt;
        &lt;resources&gt;
            &lt;resource&gt;
                &lt;targetPath&gt;/&lt;/targetPath&gt;
                &lt;directory&gt;\${project.build.directory}&lt;/directory&gt;
                &lt;include&gt;\${project.build.finalName}.jar&lt;/include&gt;
            &lt;/resource&gt;
        &lt;/resources&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728 <code>executions</code> \u8282\u70B9\u4E0B\u6DFB\u52A0 docker:build\uFF0C\u8868\u793A\u5728\u6267\u884C mvn:package \u6253\u5305\u7684\u65F6\u5019\u987A\u5E26\u6784\u5EFA\u4E00\u4E0B Docker \u955C\u50CF\u3002</li><li>\u5728 <code>configuration</code> \u8282\u70B9\u4E0B\u6DFB\u52A0 Docker \u4E3B\u673A\u7684\u5730\u5740\u3001\u955C\u50CF\u7684\u540D\u5B57\u3001\u955C\u50CF\u7684\u7248\u672C\u3001\u955C\u50CF\u6587\u4EF6\u7684\u76EE\u5F55\u3001\u4EE5\u53CA resources \u8282\u70B9\u4E0B\u914D\u7F6E\u7684 jar \u5305\u4F4D\u7F6E\u548C\u540D\u79F0\u7B49\u3002</li></ul><p>\u914D\u7F6E\u641E\u5B9A\u540E\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u5BF9\u9879\u76EE\u8FDB\u884C\u6253\u5305\uFF0C\u53EF\u4EE5\u76F4\u63A5\u70B9\u51FB Maven \u9762\u677F\u4E2D\u7684 package \u8FDB\u884C\u6253\u5305\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-1932f285-bb8d-4225-af6e-014ed2c9104b.png" alt=""></p><p>\u9996\u6B21\u6253\u5305\u9700\u8981\u4E0B\u8F7D\u4E00\u4E9B\u57FA\u7840\u955C\u50CF\uFF0C\u6253\u5305\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u5728 Docker \u5BB9\u5668\u4E2D\u67E5\u770B\u6211\u4EEC\u521A\u521A\u6253\u5305\u597D\u7684\u955C\u50CF\uFF0C\u547D\u4EE4 <code>docker images</code>\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-730b4f5b-d556-4f73-9dfc-b22152d86f08.png" alt=""></p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u542F\u52A8\u8FD9\u4E2A\u955C\u50CF\u7684\u5BB9\u5668\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d --name itwanger -p 8080:8080 itwanger/springboot-docker:0.0.1-SNAPSHOT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-d</code>: \u540E\u53F0\u8FD0\u884C\u5BB9\u5668\uFF0C\u5E76\u8FD4\u56DE\u5BB9\u5668ID\uFF1B</li><li><code>--name</code>: \u4E3A\u5BB9\u5668\u6307\u5B9A\u4E00\u4E2A\u540D\u79F0 itwanger\uFF1B</li><li><code>-p</code>: \u6307\u5B9A\u7AEF\u53E3\u6620\u5C04\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u4E3B\u673A(\u5BBF\u4E3B)\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3</li></ul><p>\u7136\u540E\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE 8080 \u7AEF\u53E3\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u7684\u5E94\u7528\u7A0B\u5E8F\u5728 Docker \u4E0A\u6210\u529F\u8FD0\u884C\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-79a760b1-c084-4a5c-adc0-911b2e44ae7a.png" alt=""></p><p>\u5F53\u5229\u7528 <code>docker run</code> \u6765\u521B\u5EFA\u5BB9\u5668\u65F6\uFF0CDocker \u5728\u540E\u53F0\u8FD0\u884C\u7684\u6807\u51C6\u64CD\u4F5C\u5305\u62EC\uFF1A</p><ul><li>\u68C0\u67E5\u672C\u5730\u662F\u5426\u5B58\u5728\u6307\u5B9A\u7684\u955C\u50CF\uFF0C\u4E0D\u5B58\u5728\u5C31\u4ECE\u4ED3\u5E93\u4E0B\u8F7D</li><li>\u5229\u7528\u955C\u50CF\u521B\u5EFA\u5E76\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668</li><li>\u5206\u914D\u4E00\u4E2A\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5E76\u5728\u53EA\u8BFB\u7684\u955C\u50CF\u5C42\u5916\u9762\u6302\u8F7D\u4E00\u5C42\u53EF\u8BFB\u5199\u5C42</li><li>\u4ECE\u5BBF\u4E3B\u4E3B\u673A\u914D\u7F6E\u7684\u7F51\u6865\u63A5\u53E3\u4E2D\u6865\u63A5\u4E00\u4E2A\u865A\u62DF\u63A5\u53E3\u5230\u5BB9\u5668\u4E2D\u53BB</li><li>\u4ECE\u5730\u5740\u6C60\u914D\u7F6E\u4E00\u4E2A ip \u5730\u5740\u7ED9\u5BB9\u5668</li><li>\u6267\u884C\u7528\u6237\u6307\u5B9A\u7684\u5E94\u7528\u7A0B\u5E8F</li><li>\u6267\u884C\u5B8C\u6BD5\u540E\u5BB9\u5668\u88AB\u7EC8\u6B62</li></ul><h3 id="intellij-idea-\u76F4\u8FDE-docker" tabindex="-1"><a class="header-anchor" href="#intellij-idea-\u76F4\u8FDE-docker" aria-hidden="true">#</a> Intellij IDEA \u76F4\u8FDE Docker</h3><p>\u65B0\u7248\u7684 Intellij IDEA \u4E2D\u5DF2\u7ECF\u9ED8\u8BA4\u7EE7\u627F\u4E86 Docker\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 services \u9762\u677F\u6253\u5F00 Docker\uFF0C\u76F4\u63A5\u8FDB\u884C\u64CD\u4F5C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/docker-6b4fbbb0-3986-403b-9d7e-7e50cf27b499.png" alt=""></p><hr>`,60),w=t("\u66F4\u591A\u5185\u5BB9\uFF0C\u53EA\u9488\u5BF9\u300AJava \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\u300B\u661F\u7403\u7528\u6237\u5F00\u653E\uFF0C\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5"),I={href:"https://tobebetterjavaer.com/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},R=t("\u6233\u94FE\u63A5\u{1F517}"),S=t("\u52A0\u5165\u6211\u4EEC\u7684\u661F\u7403\uFF0C\u4E00\u8D77\u5B66\u4E60\uFF0C\u4E00\u8D77\u5377\u3002\u3002"),E=e("strong",null,"\u7F16\u7A0B\u55B5",-1),C=t("\u{1F431}\u662F\u4E00\u4E2A Spring Boot+Vue \u7684\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE\uFF0C\u878D\u5408\u4E86\u5E02\u9762\u4E0A\u7EDD\u5927\u591A\u6570\u6D41\u884C\u7684\u6280\u672F\u8981\u70B9\u3002\u901A\u8FC7\u5B66\u4E60\u5B9E\u6218\u9879\u76EE\uFF0C\u4F60\u53EF\u4EE5\u5C06\u6240\u5B66\u7684\u77E5\u8BC6\u901A\u8FC7\u5B9E\u8DF5\u8FDB\u884C\u68C0\u9A8C\u3001\u4F60\u53EF\u4EE5\u62D3\u5BBD\u81EA\u5DF1\u7684\u6280\u672F\u8FB9\u754C\uFF0C\u4F60\u53EF\u4EE5\u638C\u63E1\u4E00\u4E2A\u771F\u6B63\u7684\u5B9E\u6218\u9879\u76EE\u662F\u5982\u4F55\u4ECE 0 \u5230 1 \u7684\u3002"),T=e("h3",{id:"\u6E90\u7801\u8DEF\u5F84",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6E90\u7801\u8DEF\u5F84","aria-hidden":"true"},"#"),t(" \u6E90\u7801\u8DEF\u5F84\uFF1A")],-1),O=t("\u7F16\u7A0B\u55B5\uFF1A"),A={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},N=t("https://github.com/itwanger/coding-more"),P=t("codingmore-docker\uFF1A"),M={href:"https://github.com/itwanger/codingmore-learning/tree/main/springboot-docker",target:"_blank",rel:"noopener noreferrer"},L=t("https://github.com/itwanger/codingmore-learning"),B=e("hr",null,null,-1),F=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function J(W,$){const n=r("ExternalLinkIcon");return c(),s("div",null,[d,e("blockquote",null,[e("p",null,[p,e("a",u,[g,a(n)]),b])]),e("ul",null,[v,m,e("li",null,[k,e("a",h,[_,a(n)]),f])]),j,e("blockquote",null,[e("p",null,[x,e("a",D,[y,a(n)])])]),q,e("p",null,[w,e("a",I,[R,a(n)]),S,E,C]),T,e("blockquote",null,[e("ul",null,[e("li",null,[O,e("a",A,[N,a(n)])]),e("li",null,[P,e("a",M,[L,a(n)])])])]),B,F])}var Y=o(l,[["render",J],["__file","docker.html.vue"]]);export{Y as default};
