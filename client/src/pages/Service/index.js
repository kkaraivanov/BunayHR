
import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Service = () => {
    return (
        <Box sx={{ my: 2 }}>
            <Typography>
            Welcome from Service page
            </Typography>
            <Typography variant="body1">
                {[...new Array(5)]
                    .map(
                        () =>
                            `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
            </Typography>
        </Box>
    )
}

export default Service