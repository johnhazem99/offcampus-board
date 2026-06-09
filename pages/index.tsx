import { useState, useMemo } from 'react'
import { Box, TextField, Select, MenuItem, Typography, Container, Grid } from '@mui/material'
import { MOCK_DATA, Opportunity } from '../data/opportunities'
import OpportunityCard from '../components/OpportunityCard'

export default function Page() {
  const [search,setSearch] = useState("")
  const [category,setCategory] = useState("All")
  const filtered = useMemo( () => {
    return MOCK_DATA.filter(o=>{ if (category ==="All"){ return true} else{return o.category === category}}).filter(o=>{if(search===""){return true} else{ return o.title.toLowerCase().includes(search.toLowerCase())  || o.company.toLowerCase().includes(search.toLowerCase()) }})

  },[search, category])

  return <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingY: 4, paddingBottom: 6 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
        Opportunity Board
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center'}}>
        <TextField
        placeholder="Search by title or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>

          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Internship">Internship</MenuItem>
          <MenuItem value="Part-time">Part-time</MenuItem>
          <MenuItem value="Student Club">Student Club</MenuItem>

        </Select>
        
      </Box>
      <Grid container spacing={3}>
          {filtered.map(opportunity => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={opportunity.id}>
              <OpportunityCard opportunity={opportunity} />
            </Grid>
          ))}
        </Grid>

    </Container>
  </Box>
}