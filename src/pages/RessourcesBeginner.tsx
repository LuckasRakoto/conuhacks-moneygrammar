import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

interface IRessource {
    id:number
    title: string
    link: string
}

const ressources: IRessource[] = [
    {id:1,title:"Smartest things you can do for your finances",
    link:"https://www.sunlife.ca/en/tools-and-resources/money-and-finances/saving-for-retirement/20-smart-money-moves/"},
    {id:2,title:"Make Financial work plan",
    link:"https://www.sunlife.ca/en/tools-and-resources/money-and-finances/managing-your-money/how-to-make-your-financial-plan-work-for-you/"},
    {id:3,title:"Cutting back on non-essential spending",
    link:"https://www.sunlife.ca/en/tools-and-resources/money-and-finances/managing-your-money/how-to-cut-back-on-non-essential-spending/"},
    {id:4,title:"Beating inflation",
    link:"https://www.sunlife.ca/en/tools-and-resources/money-and-finances/managing-your-money/10-ways-to-beat-inflation/"}

]

const RessourcesPage = () => {
    let navigate = useNavigate()

    const routeChange = () =>{ 
        let path = "quiz1"; 
        navigate(path);
      }

    return (<div>
        <p>This is the ressources page</p>
        
        <Box sx={{ flexDirection: 'row' }}>
        {ressources.map((ressource) => {
            return (<div key={ressource.id}>
                <Card style={{display: 'inline-block'}}>
                <CardContent>
                    <Typography variant="h4" component="div" >{ressource.title}</Typography>
                    <Button size="small" href={ressource.link} target="_blank"  >
                    Learn more
                    </Button>
                </CardContent>
            </Card>
            </div>)
        })}
        
        </Box>
        <Button variant="outlined" onClick={routeChange}>Take Test</Button>
        </div>)
    
}

export default RessourcesPage