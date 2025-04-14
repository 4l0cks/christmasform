import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const GuestList = ({ guest, guestNames, setGuestNames }) => {
    const handleChange = (index, value) => {
        const updated = [...guestNames];
        updated[index] = value;
        setGuestNames(updated);
    };

    React.useEffect(() => {
        setGuestNames((prev) => {
            const copy = [...prev];
            while (copy.length < guest) copy.push("");
            return copy.slice(0, guest);
        });
    }, [guest]);

    if (guest === 0) return null;

    return (
        <Box mt={3}>
            <Typography variant="subtitle1" mb={1}>
                Guest names:
            </Typography>
            {Array.from({ length: guest }).map((_, index) => (
                <TextField
                    key={index}
                    label={`Guest ${index + 1}`}
                    value={guestNames[index] || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                />
            ))}
        </Box>
    );
};

export default GuestList;
