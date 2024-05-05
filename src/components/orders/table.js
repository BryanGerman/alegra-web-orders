import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types'


export const Table = ({ columns, rows }) => {
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 30]}
      />
    </>
  )
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
}