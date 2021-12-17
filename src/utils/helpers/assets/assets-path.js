import getConfig from "next/config"

export const getDynamicAssetsFilePath = (filepath) => {
  if (!filepath) return;

  const keyword = "assets";
  const config = getConfig()
  if (!config?.publicRuntimeConfig)
    return filepath;

  if (filepath.includes(keyword))
    return filepath.replace(keyword, config.publicRuntimeConfig?.assetPrefix).replace("//", "/");
  return `${ config.publicRuntimeConfig?.assetPrefix }/${ filepath }`.replace("//", "/");
}
