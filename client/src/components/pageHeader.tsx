type propsType = {
  title: string;
  className?: string;
  isDark?: boolean;
};

const pageHeader = (props: propsType): JSX.Element => {
  const { title, className: additionalClass, isDark = false } = props; // Rename to avoid confusion

  return (
    <h1 className={`${isDark ? '' : 'text-light'} ${additionalClass || ''}`}>
      {title}
    </h1>
  );
};

export default pageHeader;