/* eslint-disable import/no-nodejs-modules */
// eslint-disable-next-line import/no-nodejs-modules
export interface CountdownRibbonProps {
  dueDateTime?: string
  active?: boolean
  text?: string
  buttonURI?: URI
  buttonText?: string
  intl: any
}

export interface ExpressPromotionProps {
  buttonImage: string
  skuId?: number
  title?: string
  active?: boolean
  endDate: Date
  startDate: Date
  intl: any
}
