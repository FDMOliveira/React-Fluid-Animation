/* eslint-disable react-hooks/rules-of-hooks */
import { useGlobalContext } from "@/contexts/globalContext.context"

export const getHeaderInfo = () => {
  const { context } = useGlobalContext()
  return context?.header
}

export const getFooterInfo = () => {
  const { context } = useGlobalContext()
  return context?.footer
}

export const getSocialNetworks = () => {
  const { context } = useGlobalContext()
  return context.social
}

export const getSEO = () => {
  const { context } = useGlobalContext()
  return context?.seo
}

export const getSettingsInfo = () => {
  const { context } = useGlobalContext()
  return context?.settings
}

export const getPageInfo = () => {
  const { context } = useGlobalContext()
  return context?.page
}