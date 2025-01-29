import Table from 'react-bootstrap/Table';
import { capitalizeFirstLetter } from '../utils/helpers/stringUtils';
import { Button } from 'react-bootstrap';
import ConfirmModal from './confirmModal';

type propsType = {
  header?: string[];
  data?: never[];
  showAction?: boolean;
  handleEdit?: (id: string | number) => void; 
  handleDelete?: (id: string | number) => void;
};

type DynamicData = Record<string, never>

const tableContent = (props: propsType): JSX.Element => {
  const {header, data, showAction, handleEdit, handleDelete} = props;

  return (
  <Table responsive striped>
    {header && <thead>
      <tr>
        {
          header.map((head, index) => (<th key={index}>{capitalizeFirstLetter(head)}</th>))
        }
      </tr>
    </thead>}
    {data && (<tbody>
      {data.map((item: DynamicData, indexR: number) => (
        <tr key={indexR}>
          {/* If you want to display only specific keys based on the header: */}
          {header?.map((head) => (
            <td key={head}>
              {item[head]}
            </td>
          ))}

          {/* Conditionally render action buttons if showAction is true */}
          {showAction && (
            <td key={`action-${indexR}`}>
              <div className="d-flex justify-content-center">
                {
                  handleEdit && (
                    <Button type="button" className="btn btn-primary me-2" onClick={() => handleEdit(item._id)}>Edit</Button>
                  )
                }
                {/* <Button type="button" className="btn btn-danger" onClick={() => handleDelete && handleDelete(item._id)}>Delete</Button> */}
                {
                  handleDelete && (
                    <ConfirmModal 
                      title='Genre delete'
                      message='Are you sure you want to delete this?'
                      btnLabel='Delete'
                      btnClass='btn btn-danger'
                      value={item._id}
                      onConfirm={(id) => {
                        handleDelete(id ?? '')
                      }}
                    />
                  )
                }
              </div>
            </td>
          )}
        </tr>
      ))}
    </tbody>)}
  </Table>);
};

export default tableContent;
