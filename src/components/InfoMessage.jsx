import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const InfoMessage = ({ message, setMessage }) => {
    return (
        <Box mt={3}>
            <Typography variant="subtitle1" mb={1}>
                Any message you'd like to leave?
            </Typography>
            <TextField
                label="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                fullWidth
            />
        </Box>
    );
};

export default InfoMessage;
