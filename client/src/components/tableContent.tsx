import Table from 'react-bootstrap/Table';
type propsType = {
  header?: string[];
  data: [];
};


const tableContent = (props: propsType): JSX.Element => {
  const {header, data} = props;

  return (
  <Table responsive striped>
    {header && <thead>
      <tr>
        {
          header.map((head) => (<th>{head}</th>))
        }
      </tr>
    </thead>}
    {data && <tbody>
      <tr>
        {
          data.map((d) => (<th>{d}</th>))
        }
      </tr>
    </tbody>}
  </Table>);
};

export default tableContent;
