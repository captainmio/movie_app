export const capitalizeFirstLetter = (txt: string) => {
  return txt.replace(/^./, txt[0].toUpperCase())
}