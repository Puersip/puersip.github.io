const t=JSON.parse('{"key":"v-1070c007","path":"/articles/QA%E5%AD%A6%E4%B9%A0%E5%BD%95/Exercise/Exercise3.html","title":"Exercise3","lang":"zh-CN","frontmatter":{"title":"Exercise3","shortTitle":"QA学习录","description":"Exercise","category":"QA","tag":"Exercise","sidebar":true,"toc":true,"breadcrumb":false,"editLink":false,"head":[["meta",{"property":"og:url","content":"https://puersip.github.io/articles/QA%E5%AD%A6%E4%B9%A0%E5%BD%95/Exercise/Exercise3.html"}],["meta",{"property":"og:site_name","content":"Hello Blog"}],["meta",{"property":"og:title","content":"Exercise3"}],["meta",{"property":"og:description","content":"Exercise"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-07T09:47:51.000Z"}],["meta",{"property":"article:author","content":"Mr.Puersip"}],["meta",{"property":"article:tag","content":"Exercise"}],["meta",{"property":"article:modified_time","content":"2023-12-07T09:47:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Exercise3\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-07T09:47:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Puersip\\",\\"url\\":\\"https://github.com/Puersip\\"}]}"]]},"headers":[],"git":{"createdTime":1701941788000,"updatedTime":1701942471000,"contributors":[{"name":"chentongsheng","email":"chentongshengshiwo@outlook.com","commits":2}]},"readingTime":{"minutes":1.63,"words":489},"filePathRelative":"articles/QA学习录/Exercise/Exercise3.md","localizedDate":"2023年12月7日","excerpt":"<ol>\\n<li>邮件系统发信限制条件：<br>\\na.每天不能超过20封<br>\\nb.每周不能超过50封<br>\\nc.每月不能超过200封<br>\\n给出该需求的测试用例，以决策表的方式。</li>\\n</ol>\\n<ul>\\n<li>决策表</li>\\n</ul>\\n<table>\\n<thead>\\n<tr>\\n<th>桩</th>\\n<th>规则1</th>\\n<th>规则2</th>\\n<th>规则3</th>\\n<th>规则4</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>c1: 每天发送超过20封邮件</td>\\n<td>T</td>\\n<td>F</td>\\n<td>F</td>\\n<td>F</td>\\n</tr>\\n<tr>\\n<td>c2: 每天发送超过20封邮件</td>\\n<td>-</td>\\n<td>T</td>\\n<td>F</td>\\n<td>F</td>\\n</tr>\\n<tr>\\n<td>c3: 每天发送超过20封邮件</td>\\n<td>-</td>\\n<td>-</td>\\n<td>T</td>\\n<td>F</td>\\n</tr>\\n<tr>\\n<td>a1: 每天发送超过20封邮件</td>\\n<td></td>\\n<td></td>\\n<td></td>\\n<td>X</td>\\n</tr>\\n<tr>\\n<td>a2: 每天发送超过20封邮件</td>\\n<td>X</td>\\n<td>X</td>\\n<td>X</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>"}');export{t as data};