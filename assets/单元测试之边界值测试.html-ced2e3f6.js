import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as t,d as m,a as s}from"./app-47ae9a40.js";const n={},i=m(`<h2 id="什么是单元测试" tabindex="-1"><a class="header-anchor" href="#什么是单元测试" aria-hidden="true">#</a> 什么是单元测试</h2><p>什么是单元？单元可是认为是编写代码的单位。</p><p>面向过程编程：单元可以是一个函数，也可以是一页代码。</p><p>面向对象编程：单元可以是一个对象，也可以是对象内的一个函数。</p><h2 id="单元测试的常用方法" tabindex="-1"><a class="header-anchor" href="#单元测试的常用方法" aria-hidden="true">#</a> 单元测试的常用方法</h2><h3 id="边界值测试" tabindex="-1"><a class="header-anchor" href="#边界值测试" aria-hidden="true">#</a> 边界值测试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序可以看作函数，程序的输入域测试（也叫边界值测试）是最常用的功能测试技术。

边界值测试的基本思想: 错误通常出现在输入变量的极值附近。

关于应用程序输入域测试分别有两个问题: 

1. 第一个问题是我们是否考虑变量的无效值:
仅考虑变量的有效性: 边界值分析
既考虑变量的有效性，又考虑变量的无效性: 稳健型测试

2. 第二个问题是是否要同可靠性理论一样做出单故障假设:
对于多变量输入的函数，假设多变量之间是独立的，故障是由于单变量的单故障引起的

根据上面的两点分析，会引申出下面四种不同的边界值测试。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>边界值分析</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 边界值分析技术的基本思想是利用输入变量的最小值、略大于最小值的值、正常值、略小于最大值的值，最大值，来验证程序。

2. 边界值分析的另一个要点基于一个十分重要的假设，这个假设在可靠性理论中被称作“单点故障假设”，即失效问题通常不会由两个（或多个）故障同时引发。

3. 基于上述两点，构造边界值测试用例的方法是: 仅让一个变量取极值，而让其他所有变量都取正常值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"{"),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"n")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"n"),s("mo",null,"+")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x"),s("mo",null,"−")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"n")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"n"),s("mo",null,"+")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x"),s("mo",null,"−")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",null,"<"),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"1"),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x")])]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"χ"),s("mrow",null,[s("mn",null,"2"),s("mi",null,"n"),s("mi",null,"o"),s("mi",null,"m")])]),s("mo",null,">"),s("mo",{separator:"true"},","),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"}," \\{ \\lt \\chi_{1nom}, \\chi_{2min} \\gt, \\lt \\chi_{1nom}, \\chi_{2min+} \\gt, \\lt \\chi_{1nom}, \\chi_{2nom} \\gt, \\lt \\chi_{1nom}, \\chi_{2max-} \\gt, \\lt \\chi_{1nom}, \\chi_{2max} \\gt, \\lt \\chi_{1min}, \\chi_{2nom} \\gt,\\lt \\chi_{1min+}, \\chi_{2nom} \\gt,\\lt \\chi_{1max-}, \\chi_{2nom} \\gt,\\lt \\chi_{1max}, \\chi_{2nom} \\gt, \\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"min")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7474em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"min"),s("span",{class:"mord mtight"},"+")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7474em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"ma"),s("span",{class:"mord mathnormal mtight"},"x"),s("span",{class:"mord mtight"},"−")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"ma"),s("span",{class:"mord mathnormal mtight"},"x")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"min")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7474em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"min"),s("span",{class:"mord mtight"},"+")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7474em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"ma"),s("span",{class:"mord mathnormal mtight"},"x"),s("span",{class:"mord mtight"},"−")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mord mathnormal mtight"},"ma"),s("span",{class:"mord mathnormal mtight"},"x")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">")]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mclose"},"}")])])])])],-1),p=s("ul",null,[s("li",null,[s("p",null,"健壮性测试")]),s("li",null,[s("p",null,"最坏情况测试")]),s("li",null,[s("p",null,"健壮最坏情况测试")])],-1),r=[i,e,p];function c(h,g){return l(),t("div",null,r)}const d=a(n,[["render",c],["__file","单元测试之边界值测试.html.vue"]]);export{d as default};
