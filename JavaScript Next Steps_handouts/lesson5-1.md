![](headings/5.1.png)

# Lesson Introduction

In this lesson, I'm going to take you beyond **iteration**. We've all used loops before as part of our JavaScript programming. I introduced you to a lot of those loops in the beginning JavaScript class.

# How Loops Work

I want to take another look at how loops work and maybe see if there are some better approaches. To refresh your memories, we know a number of ways to iterate through data, and JavaScript provides a lot of options. They let you go through all of the items in an array or an object and even perform operations on those items while you're going through them.

Some of the ones that we're probably most familiar with are the `for` statement, the "do while" statement, the `while` statement and even the "for in" statement. If any of these feel unfamiliar to you,it's probably a good idea to go back and double check that beginning JavaScript course just to make sure you're familiar with the basics.

All of these looping systems are very convenient, but they also have some limitations. Some looping statements produce unexpected results and some of them don't work exactly the way that you'd expect them to or the way that you would want them to in certain situations.

For example, `for` statements require you to define a lot of variables, because they require a lot of variables in order to work properly. "do while" statements perform an operation before doing any checks, and sometimes that's what you want, and sometimes that's not what you want. `while` statements test a condition that may not even be related to the operation. "for in" statements can produce unexpected results with arrays. And label, break, and continue encourage you to write code that can be confusing and difficult to follow.