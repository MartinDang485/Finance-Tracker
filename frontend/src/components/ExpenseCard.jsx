import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

const ExpenseCard = ({expense}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{expense.title}</Typography>
                <Typography>{expense.cost}</Typography>
            </CardContent>
        </Card>
    )
}

export default ExpenseCard