---
title: Exercise2
shortTitle: QA学习录
description: Exercise
category: QA
tag: 学习
sidebar: true
toc: true
breadcrumb: false
editLink: false
---

## Exercise2

1. 将6.4三角形问题的等价类测试用例用Xmind思维导图模式组织，需子集划分清晰，层次分明。

![Alt](Exercise2/三角形问题等价类测试.png)

2. 课本P76 6.9习题第5题

```flow:preset
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```