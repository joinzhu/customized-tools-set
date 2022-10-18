```
import { tryCatch } from '@wise/tools'
/**
 * asyncFunction: 返回promise的异步函数
 * params： 单独调用asyncFunction所需的实参
 */
let [err, res] = await tryCatch(asyncFunction, params)
```

如：

```
getUserInfo(userId).then(res => {}).catch(err => {})
```

改为

```
let [err, res] = await tryCatch(getUserInfo, userId)
```
