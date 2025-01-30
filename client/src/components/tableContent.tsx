/* eslint-disable @typescript-eslint/no-explicit-any */

import Table from 'react-bootstrap/Table';
import { capitalizeFirstLetter } from '../utils/helpers/stringUtils';
import { Button } from 'react-bootstrap';
import ConfirmModal from './confirmModal';


type propsType = {
  header?: Record<string, unknown>[],
  data?: Record<string, unknown>[],
  showAction?: boolean,
  editBtnConfig: {
    handleEdit?: (id: string | number) => void,
  },
  deleteBtnConfig: {
    title: string,
    message: string,
    label: string,
    handleDelete?: (id: string | number) => void
  }
};

const tableContent: React.FC<propsType> = ({header, data, showAction, editBtnConfig, deleteBtnConfig}) => {

  const { title, message, label, handleDelete } = deleteBtnConfig;
  const {handleEdit} = editBtnConfig;

  return (
  <Table responsive striped>
    {header && <thead>
      <tr>
        {
          header.map((head: Record<string, any>, index) => (<th key={index}>{capitalizeFirstLetter(head.label)}</th>))
        }
      </tr>
    </thead>}
    {data && (<tbody>
      {data.map((item: Record<string, any>, indexR: number) => {
        const id: string = item._id?.toString() ?? ''

        return ((
          <tr key={indexR}>
            {header?.map((head: any) => {
              const selectedItem: string = item[head.key];
              const thead: string = selectedItem ?? "";
              
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
                  {
                    handleDelete && (
                      <ConfirmModal 
                        title={title}
                        message={message}
                        btnLabel={label}
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
