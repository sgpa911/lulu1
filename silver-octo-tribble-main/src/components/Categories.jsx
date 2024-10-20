import { Button, Card, CardMedia, Grid, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Dummy data
  const datas = [
    {
      id: 1,
      title: 'Navigation',
      img_url: 'https://images.squarespace-cdn.com/content/v1/64073c3afdb5c4737243d022/277c4047-7c06-4a75-b135-af645a3e13c6/designinternational-lulu+mall+trivandrum-thiruvananthapuram-india-plaza+people.jpg',
      EmpName: 'Navigation',
      designation: 'Navigate through the app',
      empId: 'NAV001'
    },
    {
      id: 2,
      title: 'Food',
      img_url: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg',
      EmpName: 'Food',
      designation: 'Explore food options',
      empId: 'FOOD002'
    }
  ];

  const handleButtonClick = (id) => {
    if (id === 1) {
      navigate('/shops');
    } else if (id === 2) {
      navigate('/explore');
    }
  };

  return (
    <Box sx={{ width: '100%', padding: '2%' }}>
      <Grid container spacing={3} justifyContent="center">
        {datas.map((data) => (
          <Grid item xs={12} sm={6} md={4} key={data.id}>
            <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3, borderRadius: 6  }}>
              <CardMedia
                component="img"
                image={data.img_url}
                alt={data.title}
                sx={{ height: 180}} // Reduced height and added borderRadius for rounded edges
              />
            </Card>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#33076B', color: 'white' }}
                onClick={() => handleButtonClick(data.id)}
              >
                {data.id === 1 ? 'Find Your Shop' : 'Explore Our Menu'}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
