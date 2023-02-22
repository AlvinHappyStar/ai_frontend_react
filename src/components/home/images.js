import { useState } from 'react';
import { autocompleteClasses, Box, Grid } from '@mui/material';
import { AspectRatio } from '@mui/joy'
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';

import { useAppSelector } from "../../redux/store"

function Images() {

    const images = useAppSelector((state) => state.imageState.images)

    return (
        <Grid container spacing={2}
            sx={{
                margin: '0x, -5px 0px -5px',
                width: '100%',
            }}>
            {images.map((item) => {
                return (
                    <Grid item xs={12} sm={4}
                        sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                justifyContent: 'center',
                            }
                        }}>
                        <AspectRatio ratio="1" sx={{ width: '100%' }}>
                            <img alt='' src={item} />
                        </AspectRatio>
                    </Grid>
                )
            })}
        </Grid>

    )
}

export default Images;