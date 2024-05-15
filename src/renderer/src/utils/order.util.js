export function reorderLeft(order, which) {
  const idx = order.indexOf(which)
  if (idx === 0) return order
  let arr = [...order]
  arr[idx - 1] = which
  arr[idx] = order[idx - 1]
  return arr
}

export function reorderRight(order, which) {
  const idx = order.indexOf(which)
  if (idx === order.length - 1) return order
  let arr = [...order]
  arr[idx + 1] = which
  arr[idx] = order[idx +  1]
  return arr
}
