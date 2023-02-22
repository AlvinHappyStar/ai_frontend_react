import React from 'react';
import { Box, Button, Input } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';

import { addImage } from "../../redux/features/imageSlice";

import { useDispatch } from "react-redux";

function InputArea() {

    const dispatch = useDispatch();

    const handleGenerate = () => {
        console.log("handleGenerate")

        dispatch(addImage("./images/1.jpg"));
    }
    
    return (
        <Box sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
                marginTop: '30px',
                width: '100%',
            }
        }}>

            <Input
                placeholder='Enter your promt...'
                sx={{
                    borderRadius: '5px',
                    marginBottom: '10px',
                    backgroundColor: '#FFFFFF',
                    padding: '20px',
                    fontSize: '25pt',
                    textAlign: 'left',
                    height: 'auto',
                    outline: 'none',
                    border: 'none',
                    lineHeight: '1.5rem',
                    color: '#111111',
                    '&::before': {
                        display: 'none',
                    },
                    '&::after': {
                        display: 'none',
                    },
                }} />

            <Box sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                    gap: '10px',
                }
            }}>
                <Button
                    startIcon={<LocalHospitalIcon />}
                    sx={{
                        ...{
                            padding: '0rem 0px',
                            height: '60px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            border: 'none',
                            cursor: 'pointer',
                            background: '#0073c7',
                            color: '#ffffff',
                            borderRadius: '5px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '30%',
                            '&:hover': {
                                backgroundColor: '#0768af',
                            },
                        }
                    }}>
                </Button>

                <Button
                    startIcon={<AutoFixHighIcon />}
                    sx={{
                        ...{
                            padding: '0rem 0px',
                            height: '60px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            border: 'none',
                            cursor: 'pointer',
                            background: '#0073c7',
                            color: '#ffffff',
                            borderRadius: '5px',
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textTransform: 'none',
                            width: '70%',
                            '&:hover': {
                                backgroundColor: '#0768af',
                            },
                        }
                    }}
                    onClick={handleGenerate}
                >
                    Generate image
                </Button>
            </Box>
        </Box>

    )
}

export default InputArea;