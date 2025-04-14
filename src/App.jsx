import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ToggleAttendance from "./components/ToggleAttendance.jsx";
import ArrivalDate from "./components/ArrivalDate.jsx";
import GuestCounter from "./components/GuestCounter.jsx";
import InfoMessage from "./components/InfoMessage.jsx";

export default function App() {
    const [isComing, setIsComing] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [guest, setGuest] = useState(0);
    const [guestNames, setGuestNames] = useState([]);
    const [haveKiddos, setHaveKiddos] = useState(false);
    const [kiddoCount, setKiddoCount] = useState(0);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            isComing,
            startDate,
            endDate,
            guest,
            guestNames,
            haveKiddos,
            kiddoCount,
            message
        });
    };

    const handleGuestNameChange = (index, value) => {
        const updatedNames = [...guestNames];
        updatedNames[index] = value;
        setGuestNames(updatedNames);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                p={2}
                sx={{ backgroundColor: "#f9f9f9", borderRadius: "8px" }}
            >
                <Box
                    style={{ padding: 24, width: "100%", maxWidth: 600 }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <ToggleAttendance isComing={isComing} setIsComing={setIsComing} />

                    {isComing && (
                        <>
                            <ArrivalDate
                                startDate={startDate}
                                setStartDate={setStartDate}
                                endDate={endDate}
                                setEndDate={setEndDate}
                            />

                            <GuestCounter guest={guest} setGuest={setGuest} />

                            {Array.from({ length: guest }).map((_, index) => (
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    key={index}
                                    mt={2}
                                    width="100%"
                                >
                                    <TextField
                                        label={`Guest ${index + 1} Name`}
                                        value={guestNames[index] || ""}
                                        onChange={(e) => handleGuestNameChange(index, e.target.value)}
                                        fullWidth
                                        sx={{ marginBottom: 2 }}
                                    />
                                </Box>
                            ))}

                            {guestNames.length > 0 && (
                                <Box mt={3} width="100%">
                                    <Typography variant="subtitle1">Do you have kiddos?</Typography>
                                    <ToggleAttendance
                                        isComing={haveKiddos}
                                        setIsComing={setHaveKiddos}
                                        label="I have kiddos"
                                    />
                                </Box>
                            )}

                            {haveKiddos && (
                                <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                                    <Typography variant="subtitle1">Number of Kiddos</Typography>
                                    <Box display="flex" alignItems="center">
                                        <Button onClick={() => setKiddoCount(kiddoCount + 1)} sx={{ marginRight: 2 }}>
                                            +
                                        </Button>
                                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                                            {kiddoCount}
                                        </Typography>
                                        <Button
                                            onClick={() => setKiddoCount(kiddoCount - 1)}
                                            disabled={kiddoCount === 0}
                                        >
                                            -
                                        </Button>
                                    </Box>
                                </Box>
                            )}

                            <InfoMessage message={message} setMessage={setMessage} />
                        </>
                    )}

                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: 4 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </LocalizationProvider>
    );
}
