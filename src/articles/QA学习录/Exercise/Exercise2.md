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
st=>start: 开始
e=>end: 结束
op1=>operation: 春季夏时令转换
op2=>operation: 秋季夏时令转转
op3=>operation: 通话时间横跨时令变化
op4=>operation: 通话时长x超过20分钟
cond=>condition: Yes or No?
io1=>operation: 通话时间=结束-开始-1
io2=>operation: 通话时间=结束-开始+1
res1=>operation: 通话费用=1+(x-20)*0.1
res2=>operation: 通话费用=0.05*x


st->op1->cond
cond(yes, left)->op3
cond(no, right)->op2
op3->cond
cond(yes, left)->io1->op4
cond(no, right)->op4
op4->cond
cond(yes, left)->res1
cond(no, right)->res2
op2->cond 
cond(yes, right)->op3
cond(no, buttom)->op4 
op3->cond
cond(yes, right)->io2->op4
cond(no, buttom)->op4

```