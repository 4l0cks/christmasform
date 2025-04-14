import { FormControlLabel, Switch, Typography } from '@mui/material';

const ToggleAttendance = ({ isComing, setIsComing }) => {
    const handleChange = (event) => {
        setIsComing(event.target.checked);
    };

    return (
        <div style={{ marginBottom: 20 }}>
            <FormControlLabel
                control={
                    <Switch
                        checked={isComing}
                        onChange={handleChange}
                        color="primary"
                    />
                }
                label={
                    <Typography variant="body1">
                        {isComing ? "I'm coming" : "I'm not coming"}
                    </Typography>
                }
            />
        </div>
    );
};

export default ToggleAttendance;
