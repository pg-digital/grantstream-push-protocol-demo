import { AppFavions, AppMetadata } from "@/constants";

export function MetaTagsForFavicons() {
  return (
    <>
      {AppFavions.map(({ id, ...favicon }) => (
        <link key={id} {...favicon} />
      ))}
    </>
  );
}

export function MetaTagsForOpenGraph() {
  return (
    <>
      <meta key="meta_og-type" property="og:type" content="article" />
      <meta
        key="meta_og-title"
        property="og:title"
        content={AppMetadata.TitlePrefix}
      />
      <meta
        key="meta_og-description"
        property="og:description"
        content={AppMetadata.Description}
      />
      <meta
        key="meta_og-image"
        property="og:image"
        content={AppMetadata.Image}
      />
    </>
  );
}
