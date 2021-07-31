type ResponsiveImageProps = {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  imgClassName: string;
  alt: string;
};

function ResponsiveImage({
  image: { desktop, tablet, mobile },
  imgClassName,
  alt,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source media="(min-width: 1400px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img className={imgClassName} srcSet={desktop} alt={alt} />
    </picture>
  );
}

export default ResponsiveImage;
