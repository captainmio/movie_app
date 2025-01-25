import Table from 'react-bootstrap/Table';
import { capitalizeFirstLetter } from '../utils/helpers/stringUtils';


type propsType = {
  header?: string[];
  data?: never[];
};


const tableContent = (props: propsType): JSX.Element => {
  const {header, data} = props;

  return (
  <Table responsive striped>
    {header && <thead>
      <tr>
        {
          header.map((head, index) => (<th key={index}>{capitalizeFirstLetter(head)}</th>))
        }
      </tr>
    </thead>}
    {data && <tbody>
     {
      data.map((item: object, indexR: number) => {
        return (
          <tr key={indexR}>
            {Object.values(item).map((text: string, indexT: number) => (
              <td key={indexT}>{text}</td>
            ))}
          </tr>
        );
      })
     }
    </tbody>}
  </Table>);
};

export default tableContent;
