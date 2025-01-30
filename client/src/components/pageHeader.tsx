type PropsType = {
  title: string;
  className?: string;
  isDark?: boolean;
};

const PageHeader: React.FC<PropsType> = ({ title, className: additionalClass, isDark = false }) => {

  return (
    <h1 className={`${isDark ? '' : 'text-light'} ${additionalClass || ''}`}>
      {title}
    </h1>
  );
};

export default PageHeader;