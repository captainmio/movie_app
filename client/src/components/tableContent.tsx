/* eslint-disable @typescript-eslint/no-explicit-any */

import Table from 'react-bootstrap/Table';
import { capitalizeFirstLetter } from '../utils/helpers/stringUtils';
import { Button } from 'react-bootstrap';
import ConfirmModal from './confirmModal';


type propsType = {
  header?: string[];
  data?: Record<string, unknown>[];
  showAction?: boolean;
  handleEdit?: (id: string | number) => void; 
  handleDelete?: (id: string | number) => void;
};


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
      {data.map((item: Record<string, any>, indexR: number) => {
        const id: string = item._id?.toString() ?? ''

        return ((
          <tr key={indexR}>
            {header?.map((head: any) => {
              const selectedItem: string = item[head].toString();
              const thead: string = selectedItem.toString() ?? "";
              
              return ((
                <td key={thead}>
                  {thead}
                </td>
              ))

              
            })}
  
            {showAction && (
              <td key={`action-${indexR}`}>
                <div className="d-flex justify-content-center">
                  {
                    handleEdit && (
                      <Button type="button" className="btn btn-primary me-2" onClick={() => handleEdit(id)}>Edit</Button>
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
                        value={id}
                        onConfirm={(id) => {
                          handleDelete(id?.toString() ?? '')
                        }}
                      />
                    )
                  }
                </div>
              </td>
            )}
          </tr>
        ))

      })}
    </tbody>)}
  </Table>);
};

export default tableContent;
