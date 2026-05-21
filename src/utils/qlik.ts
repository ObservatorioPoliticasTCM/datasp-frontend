const QLIK_BASE_URL = 'https://qlik.tcm.sp.gov.br/jwt/single/'

export interface QlikUrlOptions {
  identity?: string
  select?: string
  showSelections?: boolean
}

export function buildQlikUrl(appid: string, sheet: string, options?: QlikUrlOptions): string {
  let url = `${QLIK_BASE_URL}?appid=${appid}&sheet=${sheet}&theme=card&opt=ctxmenu`
  if (options?.showSelections) url += ',currsel'
  if (options?.identity) url += `&identity=${encodeURIComponent(options.identity)}`
  if (options?.select) url += `&secret=${encodeURIComponent(options.select)}`
  return url
}
