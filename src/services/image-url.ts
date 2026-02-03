import NoImage from "../assets/no-image-symbol-shadow-missing-available-icon-vector-43947478.avif";

const getCroppedImageUrl = (url: string | null | undefined) => {
  if (!url) return NoImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
