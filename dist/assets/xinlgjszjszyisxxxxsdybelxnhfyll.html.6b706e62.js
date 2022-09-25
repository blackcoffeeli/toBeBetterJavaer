import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as c,c as a,a as e,b as i,e as r,d as n}from"./app.4aed7fa9.js";const d={},o=r(`<p>\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u7ECF\u5E38\u8981\u5728\u7C7B\u4E2D\u5B9A\u4E49\u5E03\u5C14\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u6BD4\u5982\u5728\u7ED9\u5916\u90E8\u7CFB\u7EDF\u63D0\u4F9B\u4E00\u4E2ARPC\u63A5\u53E3\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E00\u822C\u4F1A\u5B9A\u4E49\u4E00\u4E2A\u5B57\u6BB5\u8868\u793A\u672C\u6B21\u8BF7\u6C42\u662F\u5426\u6210\u529F\u7684\u3002</p><p>\u5173\u4E8E\u8FD9\u4E2A\u201D\u672C\u6B21\u8BF7\u6C42\u662F\u5426\u6210\u529F\u201D\u7684\u5B57\u6BB5\u7684\u5B9A\u4E49\uFF0C\u6211\u89C1\u8FC7\u5F88\u591A\u4E0D\u540C\u7684\u5F00\u53D1\u8005\uFF0C\u5B9A\u4E49\u7684\u65B9\u5F0F\u90FD\u4E0D\u540C\uFF0C\u5C24\u5176\u662F\u5728\u5C5E\u6027\u7684\u547D\u540D\u4E0A\uFF0C\u6709\u4EBA\u7528 success\uFF0C\u6709\u4EBA\u7528 isSuccess \u8868\u793A\u3002</p><p>\u4ECE\u8BED\u4E49\u4E0A\u9762\u6765\u8BB2\uFF0C\u4E24\u79CD\u547D\u540D\u65B9\u5F0F\u90FD\u53EF\u4EE5\u8BB2\u7684\u901A\uFF0C\u5E76\u4E14\u4E5F\u90FD\u6CA1\u6709\u6B67\u4E49\u3002\u90A3\u4E48\u8FD8\u6709\u4EC0\u4E48\u539F\u5219\u53EF\u4EE5\u53C2\u8003\u6765\u8BA9\u6211\u4EEC\u505A\u9009\u62E9\u5462\u3002</p><p>\u6839\u636EJavaBeans Specification\u89C4\u5B9A\uFF0C\u5982\u679C\u662F\u666E\u901A\u7684\u53C2\u6570propertyName\uFF0C\u8981\u4EE5\u4EE5\u4E0B\u65B9\u5F0F\u5B9A\u4E49\u5176setter/getter\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public &lt;PropertyType&gt; get&lt;PropertyName&gt;();
public void set&lt;PropertyName&gt;(&lt;PropertyType&gt; a);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u5E03\u5C14\u7C7B\u578B\u7684\u53D8\u91CFpropertyName\u5219\u662F\u5355\u72EC\u5B9A\u4E49\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public boolean is&lt;PropertyName&gt;();
public void set&lt;PropertyName&gt;(boolean m);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>success\u65B9\u6CD5\u7684 getter \u5E94\u8BE5\u662FisSuccess/getSuccess\uFF0C\u800CisSuccess\u7684getter \u5E94\u8BE5\u662FisIsSuccess/getIsSuccess\u3002</p><p>\u4F46\u662F\u5F88\u591A\u4EBA\uFF0C\u5728\u4F7F\u7528isSuccess\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684\u65F6\u5019\uFF0C\u8FD8\u662F\u4F1A\u91C7\u7528isSuccess/getSuccess\u4F5C\u4E3A getter \u65B9\u6CD5\u540D\uFF0C<strong>\u5C24\u5176\u662F\u73B0\u5728\u7684\u5F88\u591A IDE \u5728\u9ED8\u8BA4\u751F\u6210 getter \u7684\u65F6\u5019\u4E5F\u662F\u4F1A\u751F\u6210isSuccess\u3002</strong></p><p>\u5728\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5176\u5B9E\u662F\u6CA1\u6709\u5F71\u54CD\u7684\u3002\u4F46\u662F\u6709\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\u5C31\u4F1A\u6709\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u53D1\u751F\u5E8F\u5217\u5316\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u5BFC\u81F4\u53C2\u6570\u8F6C\u6362\u5F02\u5E38\u3002</p><p>\u6211\u4EEC\u5148\u6765\u5B9A\u4E49\u4E00\u4E2A JavaBean\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Model implements Serializable {
   private static final long serialVersionUID = 1836697963736227954L;
   private boolean isSuccess;
   public boolean isSuccess() {
       return isSuccess;
   }
   public void setSuccess(boolean success) {
       isSuccess = success;
   }
   public String getHollis(){
       return &quot;hollischuang&quot;;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A JavaBean \u4E2D\uFF0C\u6709\u4E00\u4E2A\u6210\u5458\u53D8\u91CFisSuccess\uFF0C\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u5206\u522B\u662FIDE\u5E2E\u6211\u4EEC\u81EA\u52A8\u751F\u6210\u7684isSuccess\u548CsetSuccess\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F\u4F5C\u8005\u81EA\u5DF1\u589E\u52A0\u7684\u4E00\u4E2A\u7B26\u5408getter\u547D\u540D\u89C4\u8303\u7684\u65B9\u6CD5\u3002</p><p>\u6211\u4EEC\u5206\u522B\u4F7F\u7528\u4E0D\u540C\u7684 JSON \u5E8F\u5217\u5316\u5DE5\u5177\u6765\u5BF9\u8FD9\u4E2A\u7C7B\u7684\u5BF9\u8C61\u8FDB\u884C\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class BooleanMainTest {
     public static void main(String[] args) throws IOException {
         //\u5B9A\u4E00\u4E2AModel\u7C7B\u578B
         Model model = new Model();
         model.setSuccess(true);
         //\u4F7F\u7528fastjson(1.2.16)\u5E8F\u5217\u5316model\u6210\u5B57\u7B26\u4E32\u5E76\u8F93\u51FA
         System.out.println(&quot;Serializable Result With fastjson :&quot; + JSON.toJSONString(model));
         //\u4F7F\u7528Gson(2.8.5)\u5E8F\u5217\u5316model\u6210\u5B57\u7B26\u4E32\u5E76\u8F93\u51FA
         Gson gson =new Gson();
         System.out.println(&quot;Serializable Result With Gson :&quot; +gson.toJson(model));
         //\u4F7F\u7528jackson(2.9.7)\u5E8F\u5217\u5316model\u6210\u5B57\u7B26\u4E32\u5E76\u8F93\u51FA
         ObjectMapper om = new ObjectMapper();
         System.out.println(&quot;Serializable Result With jackson :&quot; +om.writeValueAsString(model));
     }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Serializable Result With fastjson :{&quot;hollis&quot;:&quot;hollischuang&quot;,&quot;success&quot;:true}
Serializable Result With Gson :{&quot;isSuccess&quot;:true}
Serializable Result With jackson :{&quot;success&quot;:true,&quot;hollis&quot;:&quot;hollischuang&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728fastjson\u548Cjackson\u7684\u7ED3\u679C\u4E2D\uFF0C\u539F\u6765\u7C7B\u4E2D\u7684isSuccess\u5B57\u6BB5\u88AB\u5E8F\u5217\u5316\u6210success\uFF0C\u5E76\u4E14\u5176\u4E2D\u8FD8\u5305\u542Bhollis\u503C\u3002\u800CGson\u4E2D\u53EA\u6709isSuccess\u5B57\u6BB5\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u7ED3\u8BBA\uFF1Afastjson\u548Cjackson\u5728\u628A\u5BF9\u8C61\u5E8F\u5217\u5316\u6210json\u5B57\u7B26\u4E32\u7684\u65F6\u5019\uFF0C\u662F\u901A\u8FC7\u53CD\u5C04\u904D\u5386\u51FA\u8BE5\u7C7B\u4E2D\u7684\u6240\u6709getter\u65B9\u6CD5\uFF0C\u5F97\u5230getHollis\u548CisSuccess\uFF0C\u7136\u540E\u6839\u636EJavaBeans\u89C4\u5219\uFF0C\u4ED6\u4F1A\u8BA4\u4E3A\u8FD9\u662F\u4E24\u4E2A\u5C5E\u6027hollis\u548Csuccess\u7684\u503C\u3002\u76F4\u63A5\u5E8F\u5217\u5316\u6210json:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\u201Chollis\u201D:\u201Dhollischuang\u201D,\u201Dsuccess\u201D:true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F46\u662FGson\u5E76\u4E0D\u662F\u8FD9\u4E48\u505A\u7684\uFF0C\u4ED6\u662F\u901A\u8FC7\u53CD\u5C04\u904D\u5386\u8BE5\u7C7B\u4E2D\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u5E76\u628A\u5176\u503C\u5E8F\u5217\u5316\u6210json:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\u201CisSuccess\u201D:true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<strong>\u7531\u4E8E\u4E0D\u540C\u7684\u5E8F\u5217\u5316\u5DE5\u5177\uFF0C\u5728\u8FDB\u884C\u5E8F\u5217\u5316\u7684\u65F6\u5019\u4F7F\u7528\u5230\u7684\u7B56\u7565\u662F\u4E0D\u4E00\u6837\u7684</strong>\uFF0C\u6240\u4EE5\uFF0C\u5BF9\u4E8E\u540C\u4E00\u4E2A\u7C7B\u7684\u540C\u4E00\u4E2A\u5BF9\u8C61\u7684\u5E8F\u5217\u5316\u7ED3\u679C\u53EF\u80FD\u662F\u4E0D\u540C\u7684\u3002\u90A3\u4E48\uFF0C\u5982\u679C\u6211\u4EEC\u628A\u4E00\u4E2A\u5BF9\u8C61\u4F7F\u7528fastjson\u8FDB\u884C\u5E8F\u5217\u5316\uFF0C\u518D\u4F7F\u7528Gson\u53CD\u5E8F\u5217\u5316\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public class BooleanMainTest {
     public static void main(String[] args) throws IOException {
         Model model = new Model();
         model.setSuccess(true);
         Gson gson =new Gson();
         System.out.println(gson.fromJson(JSON.toJSONString(model),Model.class));
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\uFF0C\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Model[isSuccess=false]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u548C\u6211\u4EEC\u9884\u671F\u7684\u7ED3\u679C\u5B8C\u5168\u76F8\u53CD\uFF0C\u539F\u56E0\u662F\u56E0\u4E3AJSON\u6846\u67B6\u901A\u8FC7\u626B\u63CF\u6240\u6709\u7684getter\u540E\u53D1\u73B0\u6709\u4E00\u4E2AisSuccess\u65B9\u6CD5\uFF0C\u7136\u540E\u6839\u636EJavaBeans\u7684\u89C4\u8303\uFF0C\u89E3\u6790\u51FA\u53D8\u91CF\u540D\u4E3Asuccess\uFF0C\u628Amodel\u5BF9\u8C61\u5E8F\u5217\u5316\u57CE\u5B57\u7B26\u4E32\u540E\u5185\u5BB9\u4E3A{&quot;success&quot;:true}\u3002</p><p>\u6839\u636E{&quot;success&quot;:true}\u8FD9\u4E2Ajson\u4E32\uFF0CGson\u6846\u67B6\u5728\u901A\u8FC7\u89E3\u6790\u540E\uFF0C\u901A\u8FC7\u53CD\u5C04\u5BFB\u627EModel\u7C7B\u4E2D\u7684success\u5C5E\u6027\uFF0C\u4F46\u662FModel\u7C7B\u4E2D\u53EA\u6709isSuccess\u5C5E\u6027\uFF0C\u6240\u4EE5\uFF0C\u6700\u7EC8\u53CD\u5E8F\u5217\u5316\u540E\u7684Model\u7C7B\u7684\u5BF9\u8C61\u4E2D\uFF0CisSuccess\u5219\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503Cfalse\u3002</p><p>\u4F46\u662F\uFF0C\u4E00\u65E6\u4EE5\u4E0A\u4EE3\u7801\u53D1\u751F\u5728\u751F\u4EA7\u73AF\u5883\uFF0C\u8FD9\u7EDD\u5BF9\u662F\u4E00\u4E2A\u81F4\u547D\u7684\u95EE\u9898\u3002</p><p>\u6240\u4EE5\uFF0C\u4F5C\u4E3A\u5F00\u53D1\u8005\uFF0C\u6211\u4EEC\u5E94\u8BE5\u60F3\u529E\u6CD5\u5C3D\u91CF\u907F\u514D\u8FD9\u79CD\u95EE\u9898\u7684\u53D1\u751F\u3002</p><p>\u6240\u4EE5\uFF0C<strong>\u5EFA\u8BAE\u5927\u5BB6\u4F7F\u7528success\u800C\u4E0D\u662F isSuccess \u8FD9\u79CD\u5F62\u5F0F\u3002</strong> \u8FD9\u6837\uFF0C\u8BE5\u7C7B\u91CC\u9762\u7684\u6210\u5458\u53D8\u91CF\u65F6success\uFF0Cgetter\u65B9\u6CD5\u662FisSuccess\uFF0C\u8FD9\u662F\u5B8C\u5168\u7B26\u5408JavaBeans\u89C4\u8303\u7684\u3002\u65E0\u8BBA\u54EA\u79CD\u5E8F\u5217\u5316\u6846\u67B6\uFF0C\u6267\u884C\u7ED3\u679C\u90FD\u4E00\u6837\u3002\u5C31\u4ECE\u6E90\u5934\u907F\u514D\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002</p><hr><p><strong>\u5FAE\u4FE18.0\u5C06\u597D\u53CB\u653E\u5F00\u5230\u4E86\u4E00\u4E07\uFF0C\u5C0F\u4F19\u4F34\u53EF\u4EE5\u52A0\u6211\u5927\u53F7\u4E86\uFF0C\u5148\u5230\u5148\u5F97\uFF0C\u518D\u6EE1\u5C31\u771F\u6CA1\u4E86</strong></p><p><strong>\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u5373\u53EF\u52A0\u6211\u5FAE\u4FE1\u5566\uFF0C<code>2022\uFF0C\u62B1\u56E2\u53D6\u6696\uFF0C\u4E00\u8D77\u725B\u903C\u3002</code></strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-xinlgjszjszyisxxxxsdybelxnhfyll-26b896af-468d-471e-a742-5233d276b555.jpg" alt=""></p><h2 id="\u63A8\u8350\u9605\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u9605\u8BFB" aria-hidden="true">#</a> \u63A8\u8350\u9605\u8BFB</h2>`,36),u={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247497256&idx=1&sn=39ae99dc47facc4132c79fe6f7271a53&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},p=n("Spring Boot 3.0 M1 \u53D1\u5E03\uFF0C\u6B63\u5F0F\u5F03\u7528 Java 8\uFF0C\u6700\u4F4E\u8981\u6C42 Java 17\u3002\u3002\u3002"),v={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247497242&idx=1&sn=f433ff14184980096fbb8cc8ff41fe68&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},m=n("\u8FD8\u5728\u7528HttpUtil\uFF1F\u8BD5\u8BD5\u8FD9\u6B3E\u4F18\u96C5\u7684HTTP\u5BA2\u6237\u7AEF\u5DE5\u5177\u5427\uFF0C\u8DDFSpringBoot\u7EDD\u914D\uFF01"),b={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247497214&idx=1&sn=1c49bbd259abb57ba9639f6f24bb5c63&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},g=n("MySQL\u6A21\u7CCA\u67E5\u8BE2\u518D\u4E5F\u7528\u4E0D\u7740 like+% \u4E86\uFF01"),h={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247497088&idx=1&sn=27a964ad3ec145693d661b697830aee0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},x=n("\u518D\u89C1 Typora \uFF01\u8FD9\u6B3E\u5F00\u6E90\u7684 Markdown \u795E\u5668\u754C\u9762\u66F4\u70AB\u9177\uFF0C\u903C\u683C\u66F4\u9AD8\uFF01"),_={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247496969&idx=1&sn=f1f4e9d3cbc6f98ee445545c255b77f7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},f=n("5\u5206\u949F\u641E\u5B9A\uFF01\u8FD9\u6B3E\u989C\u503C\u7206\u8868\u7684\u6570\u636E\u53EF\u89C6\u5316\u5DE5\u5177\uFF0C\u4F60\u503C\u5F97\u62E5\u6709\uFF01"),S={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247496869&idx=1&sn=fb4ecfd5bf48fddc143edd6858b0d532&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},q=n("SpringBoot \u5B9E\u73B0 Excel \u5BFC\u5165\u5BFC\u51FA\uFF0C\u6027\u80FD\u7206\u8868\uFF0C\u7528\u8D77\u6765\u591F\u4F18\u96C5\uFF01"),z={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486684&idx=1&sn=807fd808adac8019eb2095ba088efe54&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},j=n("40K+Star\uFF01Mall\u7535\u5546\u5B9E\u6218\u9879\u76EE\u5F00\u6E90\u56DE\u5FC6\u5F55\uFF01"),w={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486362&idx=1&sn=fb6d71d328e8eee34976a86135dc6a7d&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},y=n("mall-swarm \u5FAE\u670D\u52A1\u7535\u5546\u9879\u76EE\u53D1\u5E03\u91CD\u5927\u66F4\u65B0\uFF0C\u6253\u9020Spring Cloud\u6700\u4F73\u5B9E\u8DF5\uFF01"),M={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486362&idx=1&sn=fb6d71d328e8eee34976a86135dc6a7d&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-xinlgjszjszyisxxxxsdybelxnhfyll-888ea0e6-4ace-468b-892d-a0ddd65130dd.jpg",alt:""})],-1);function k(J,B){const s=l("ExternalLinkIcon");return c(),a("div",null,[o,e("ul",null,[e("li",null,[e("a",u,[p,i(s)])]),e("li",null,[e("a",v,[m,i(s)])]),e("li",null,[e("a",b,[g,i(s)])]),e("li",null,[e("a",h,[x,i(s)])]),e("li",null,[e("a",_,[f,i(s)])]),e("li",null,[e("a",S,[q,i(s)])]),e("li",null,[e("a",z,[j,i(s)])]),e("li",null,[e("a",w,[y,i(s)])])]),e("p",null,[e("a",M,[i(s)])]),N])}var O=t(d,[["render",k],["__file","xinlgjszjszyisxxxxsdybelxnhfyll.html.vue"]]);export{O as default};
