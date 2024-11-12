
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

const IncomeCard = ({income}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{income.title}</Typography>
                <Typography>{income.monthly}</Typography>
            </CardContent>
        </Card>
    )
}

export default IncomeCard