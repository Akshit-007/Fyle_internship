import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../Styles/Paging.css"

const Paging = ({ len, pages }) => {
    const [page, setPage] = React.useState(1);
    const handleChangePage = (event, newPage) => {
        // console.log(newPage);
        setPage(newPage);
        pages(newPage);
    };

    return (
        <div className="paging">
            <Stack spacing={2}>
                <Pagination count={parseInt(len)} variant="outlined" shape="rounded" page={page} onChange={handleChangePage} />
            </Stack>


        </div>
    );
}

export default Paging;
