---
id: api-compose
title: compose
sidebar_label: compose
---

```
    Compose:: (...(a -> b)) => a => b
```

Takes an N number of functions and returns a function which takes an argument and all the functions previously passed will be called from right to left to the argument given.

```
    const add4 = L.add(4);
    const add10 = L.add(10);

    const add14 = compose(
        add10,
        add4
    )

    add14(2) // 16
    add14(20) // 34

```
