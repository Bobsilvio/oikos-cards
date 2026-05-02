export function smoothPath(pts) {
  if (!pts || pts.length < 2) return ''
  if (pts.length === 2)
    return `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)} L ${pts[1].x.toFixed(2)},${pts[1].y.toFixed(2)}`

  let d = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[Math.max(0, i - 2)]
    const p1 = pts[i - 1]
    const p2 = pts[i]
    const p3 = pts[Math.min(pts.length - 1, i + 1)]
    const cp1x = (p1.x + (p2.x - p0.x) / 6).toFixed(2)
    const cp1y = (p1.y + (p2.y - p0.y) / 6).toFixed(2)
    const cp2x = (p2.x - (p3.x - p1.x) / 6).toFixed(2)
    const cp2y = (p2.y - (p3.y - p1.y) / 6).toFixed(2)
    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`
  }
  return d
}
