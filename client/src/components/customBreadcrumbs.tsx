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
  if (parts.length > 1) {
    // Iterate from the second element (index 1) to get child menus
    for (let i = 2; i < parts.length; i++) {
      childMenus.push(parts[i]);
    }
  }

  let currentPath = '';
  console.log(parentMenu, childMenus)
  
  return (
    <Breadcrumb>
      <BreadcrumbItem href={`/${parentMenu}`} linkProps={{ to: `/${parentMenu}` }}>
        {parentLabel}
      </BreadcrumbItem>
        {childMenus.map((name, index) => {
          currentPath += `/${name}`; // Build the path dynamically
          // const isLast = index === parentMenu.length - 1; // Check if it's the last item

          return (
            <BreadcrumbItem
              key={index}
              // active={isLast} // Mark the last item as active
              linkProps={{ to: currentPath }} // Add link only if not the last
            >
              {`${capitalizeFirstLetter(name)} ${parentLabel}`}
            </BreadcrumbItem>
          );
        })}
  </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
