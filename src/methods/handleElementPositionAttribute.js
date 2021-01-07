// @ts-check
import '../types'

/**
 * Fix: some elements have to have a special position attribute for calculations
 * @param {Object} p
 * @param {CSSStyleDeclaration} p.computedStyle
 * @param {DSArea} p.node
 */
export default ({ computedStyle, node }) => {
  const position = computedStyle.position
  const isPositioned =
    position === 'absolute' || position === 'relative' || position === 'fixed'
  if (!(node instanceof HTMLDocument) && !isPositioned)
    node.style.position = 'relative'
}
