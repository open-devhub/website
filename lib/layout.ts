import { Resource } from "@/content/site/resources";

export function layoutResourcesBento(items: Resource[]) {
  const featured = items.filter((i) => i.featured);
  const normal = items.filter((i) => !i.featured);
  const result: Resource[] = [];

  if (featured.length === 0) return normal;
  if (normal.length === 0) return featured;

  const pairedNormalCount = Math.min(featured.length, normal.length);
  const remainingNormal = normal.slice(pairedNormalCount);
  const pairedNormal = normal.slice(0, pairedNormalCount);
  const normalRows: Resource[][] = [];

  while (remainingNormal.length >= 3) {
    normalRows.push(remainingNormal.splice(0, 3));
  }

  const numFeatured = featured.length;
  const rowsPerFeatured = Math.floor(normalRows.length / numFeatured);
  let extraRows = normalRows.length % numFeatured;
  let nextFeaturedIsLeft = true;

  for (let i = 0; i < numFeatured; i++) {
    const rowsToInsert = rowsPerFeatured + (extraRows > 0 ? 1 : 0);

    if (extraRows > 0) extraRows--;

    for (let r = 0; r < rowsToInsert; r++) {
      if (normalRows.length > 0) {
        result.push(...normalRows.shift()!);
      }
    }

    if (pairedNormal.length > 0) {
      const fItem = featured[i];
      const nItem = pairedNormal.shift()!;

      if (nextFeaturedIsLeft) {
        result.push(fItem, nItem);
      } else {
        result.push(nItem, fItem);
      }

      nextFeaturedIsLeft = !nextFeaturedIsLeft;
    } else {
      result.push(featured[i]);
    }
  }

  while (normalRows.length > 0) {
    result.push(...normalRows.shift()!);
  }
  if (remainingNormal.length > 0) {
    result.push(...remainingNormal);
  }

  return result;
}
