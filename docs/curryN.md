---
id: api-curryN
title: curryN
sidebar_label: curryN
---

```
    Number -> (* -> a) -> (* -> a)
```

Function requires an number representing the arity of the function passed to it.

```
    const subtract = (a, b) => a - b;

    const curriedSubtract = L.curryN(2, subtract)

    curriedSubtract(4)(2) // 2
    curriedSubtract(10)(5) // 5
    curriedSubtract(10, 5) // 5

```
