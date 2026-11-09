export function observeVisibility(
  element: Element,
  onVisibilityChange: (isVisible: boolean) => void,
  options: IntersectionObserverInit = {},
): IntersectionObserver {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === element) onVisibilityChange(entry.isIntersecting)
    }
  }, options)

  observer.observe(element)
  return observer
}
