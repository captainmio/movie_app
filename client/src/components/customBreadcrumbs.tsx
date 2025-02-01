import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Location, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/helpers/stringUtils";

const CustomBreadcrumbs: React.FC = () => {
  const location:Location = useLocation();

  const pathname:string  = location.pathname
  const parts = pathname.split('/').filter(part => part !== '');
  let parentMenu: string | null = null
  let parentLabel: string = '';
  const childMenus: string[] = [];

  if (parts.length > 0) {
    parentMenu = `${parts[0]}/${parts[1]}`;
    parentLabel = capitalizeFirstLetter(parts[1])
  }

  if (parts.length > 2) {
    childMenus.push(parts[2])
  }

  let currentPath = '';
  
  return (
    <Breadcrumb>
      <BreadcrumbItem href={`/${parentMenu}`} linkProps={{ to: `/${parentMenu}`, style: {
          textDecoration: 'none',
          fontWeight: 'bold',
          color: 'black'
        } }}  >
        {parentLabel}
      </BreadcrumbItem>
        {childMenus.map((name, index) => {
          currentPath += `/${name}`; // Build the path dynamically
          return (
            <BreadcrumbItem
              key={index}
              linkProps={{ to: currentPath, style: {
                textDecoration: 'none',
                fontWeight: 'bold',
                color: 'black'
              } }} // Add link only if not the last
            >
              {`${capitalizeFirstLetter(name)}`}
            </BreadcrumbItem>
          );
        })}
  </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
