import React from 'react';
import { Box } from '@mui/material';
import TopBar from '../components/home/topBar';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../style/default';
import InputArea from '../components/home/inputArea';
import Images from '../components/home/images';


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
                <TopBar />
                
                <Box sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                        textAlign: 'left',
                        fontSize:'30px',
                        fontWeight: 'bold',
                        marginTop:'30px',
                        color:'#FFFFFF',
                    }
                }}>
                    AI generated images made from scratch
                </Box>

                <InputArea />

                <Box sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                        textTransform:'uppercase',
                        fontWeight:'600',
                        padding:'15px 0px 5px 0px',
                    }
                }}>
                    
                    
                </Box>

                <Images />

            </Box>
        </>
    );
}

export default Home;