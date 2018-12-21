---
id: api-split
title: split
sidebar_label: split
---

```
    split :: (String | RegExp) -> String -> [String]
```

Splits a string into an array of strings based on the separator provided.

```
    L.split(" ")("Hello World") // ["Hello", "World"]
    L.split(".")("a.b.c.d.e) // ["a", "b", "c", "d", "e"]

```

See also [join]("api-join")
