export const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch (e) {
    return fallback
  }
}

export const save = (key, val) => {
  try {
    localStorage.setItem(key, JSON.stringify(val))
  } catch (e) {
    console.error('localStorage save error', e)
  }
}
