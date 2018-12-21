---
id: api-join
title: join
sidebar_label: join
---

```
    join :: String -> [] -> String
```

Joins an array by turning it into a string and each element is seperated the seperator provided.

```
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    L.join("-")(fruits) // "Banana-Orange-Apple-Mango"
    L.join(".")(fruits) // "Banana.Orange.Apple.Mango"

```

See also [split](api-split)
