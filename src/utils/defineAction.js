export const defineAction = (root, sufixes) =>
  sufixes.reduce((acc, sufix) =>
    Object.assign({}, acc, { [`${sufix}`]: `${root}::${sufix}` }),
  {});
