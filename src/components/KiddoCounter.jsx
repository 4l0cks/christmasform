import React from "react";
import { Box, Button, Typography } from "@mui/material";

const KiddoCounter = ({ kiddoCount, setKiddoCount }) => {
    const handleIncrease = () => setKiddoCount(kiddoCount + 1);
    const handleDecrease = () => setKiddoCount(kiddoCount > 0 ? kiddoCount - 1 : 0);

    return (
        <Box mt={3}>
            <Typography variant="subtitle1" mb={1}>
                Number of kiddos:
            </Typography>
            <Box display="flex" alignItems="center">
                <Button variant="outlined" onClick={handleDecrease}>-</Button>
                <Typography mx={2}>{kiddoCount}</Typography>
                <Button variant="outlined" onClick={handleIncrease}>+</Button>
            </Box>
        </Box>
    );
};

export default KiddoCounter;
