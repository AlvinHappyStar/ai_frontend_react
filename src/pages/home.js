import React from 'react';
import { Box } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../style/default';


function Home() {
    return (
        <>
            <Box sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                    padding: '30px 50px 50px 50px',
                    marginBottom: '100px',
                    minHeight: '500px',
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
                        padding: '30px 50px 50px 50px',
                        marginBottom: '100px',
                        minHeight: '500px',
                    }
                }}>
                </Box>
            </Box>
        </>
    );
}

export default Home;