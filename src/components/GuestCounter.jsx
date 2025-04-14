import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const GuestCounter = ({ guest, setGuest }) => {
    const increment = () => {
        setGuest((prev) => prev + 1);
    };

    const decrement = () => {
        setGuest((prev) => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            mt={2}
        >
            <IconButton onClick={decrement} color="primary" size="large">
                <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{guest}</Typography>
            <IconButton onClick={increment} color="primary" size="large">
                <AddIcon />
            </IconButton>
        </Box>
    );
};

export default GuestCounter;
