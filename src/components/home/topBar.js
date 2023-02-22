import React from 'react';
import { Box, Button } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';

function TopBar() {
    return (
        <Box sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
                align: 'center',
                justifyContent: 'space-between',
                width: '100%'
            }
        }}>

            <Box>
                <img alt='' src='./images/distropic.png'
                    style={{
                        position: 'absolute',
                        width: '120px',
                        height: 'auto',
                    }} />
            </Box>

            <Box sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                    justifyContent: 'flex-end',
                    gap: '5px',
                }
            }}>
                <Button sx={{
                    ...{
                        background: '#666666',
                        color: '#FFFFFF',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '5px',
                        fontWeight: '400',
                        fontSize: '10pt',
                        gap: '5px',
                        '&:hover': {
                            backgroundColor: '#666666',
                        },
                    }
                }}>
                    My upvoted
                </Button>

                <Button sx={{
                    ...{
                        background: '#666666',
                        color: '#FFFFFF',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '5px',
                        fontWeight: '400',
                        fontSize: '10pt',
                        gap: '5px',
                        '&:hover': {
                            backgroundColor: '#666666',
                        },
                    }
                }}>
                    My images
                </Button>
            </Box>
        </Box>
        
    )
}

export default TopBar;