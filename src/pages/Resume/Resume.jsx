import React from 'react'

import './Resume.css'
import {Container, Grid2} from "@mui/material";

const Resume = () => {
    return (
        <div>
            <Container className="main_container">
                <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5 }}>
                    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4}}>
                    </Grid2>
                    <Grid2 item size='grow'>
                    </Grid2>
                </Grid2>
            </Container>
            Resume page
        </div>
    )
}
export default Resume;