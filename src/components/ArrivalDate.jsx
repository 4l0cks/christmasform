import { Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const DateRangePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
    return (
        <Stack direction="row" spacing={2} alignItems="center" sx={{ my: 2 }}>
            <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => {
                    setStartDate(newValue);
                    if (endDate && newValue && newValue.isAfter(endDate)) {
                        setEndDate(null);
                    }
                }}
            />

            <Typography variant="body1">to</Typography>

            <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newValue) => {
                    if (!startDate || newValue.isAfter(startDate) || newValue.isSame(startDate)) {
                        setEndDate(newValue);
                    }
                }}
                minDate={startDate || dayjs()}
            />
        </Stack>
    );
};

export default DateRangePicker;
