import { Card, CardContent, Typography, Chip, Box , Button} from '@mui/material'
import { Opportunity } from '../data/opportunities'
import Image from 'next/image'

interface Props {
  opportunity: Opportunity
}

export default function OpportunityCard({opportunity}: Props){
    return(
    <Card sx={{
  borderRadius: 3,
  boxShadow: 3,
  height: '100%',
  width: '100%',
  transition: '0.3s',
  '&:hover': {boxShadow: 8,transform: 'translateY(-4px)'}}}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', flexGrow: 1 }}>
           
            <Box>
                <Image src={`/logos/${opportunity.company.toLowerCase().replace(/ /g, '_')}.png`} 
                alt={opportunity.company} 
                width={50} 
                height={50} 
                style={{ borderRadius: '50%', objectFit: 'contain' }}
                />
            </Box>
            <Typography variant="body2" color="text.secondary">
                {opportunity.company}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {opportunity.title}
            </Typography>
            <Box>
                <Chip label={opportunity.category}/>
                <Chip label={opportunity.location}/>
                <Chip label={opportunity.isPaid? 'Paid' : 'Unpaid'}/>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
  {opportunity.description}
            </Typography>

            <Button 
            variant="contained" 
            fullWidth 
            sx={{ 
            marginTop: 'auto',
            borderRadius: 2,
            backgroundColor: 'black',
            '&:hover': { backgroundColor: '#333' }
            }}>
                Apply Now
            </Button>

        </CardContent>
    </Card>
    )   
}