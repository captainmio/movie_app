type propsType = {
  title: string;
  className?: string;
};

const pageHeader = (props: propsType): JSX.Element => {
  const { title, className: additionalClass } = props; // Rename to avoid confusion

  return (
    <h1 className={`text-light ${additionalClass || ''}`}>
      {title}
    </h1>
  );
};

export default pageHeader;