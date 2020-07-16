// 根据 newChild 类型选择不同的 diff 函数处理
function reconcileChildFibers(
  returnFiber: Fiber,
  currentFirstChild: Fiber | null,
  newChild: any,
): Fiber | null {
  const isObject = typeof newChild === 'object' && newChild !== null

  if (isObject) {
    switch (newChild.$$typeof) {
      // object 类型，可能是 REACT_ELEMENT_TYPE 或 REACT_PORTAL_TYPE
      case REACT_ELEMENT_TYPE:
      // 调用 reconcileSingleElement 处理
      // 省略其他 case
    }
  }

  if (typeof newChild === 'string' || typeof newChild === 'number') {
    // 调用 reconcileSingleTextNode 处理
    // ... 省略
  }

  if (isArray(newChild)) {
    // 调用 reconcileSingleTextNode 处理
    // 省略其他 case
  }

  // 以上情况都没有命中，就走删除
  return deleteRemainingChildren(returnFiber, currentFirstChild)
}
