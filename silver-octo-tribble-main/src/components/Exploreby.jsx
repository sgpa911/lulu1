import { Button, Card, CardMedia, Grid, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Dummy data
  const datas = [
    {
      id: 1,
      title: 'Explore by Restaurant',
      img_url: 'https://foodsite.home.blog/wp-content/uploads/2019/01/img_7307-1.jpg',
      EmpName: 'Explore by Restaurant',
      designation: 'select by Restaurant',
      empId: 'RES001'
    },
    {
      id: 2,
      title: 'Explore by Cuisine',
      img_url: 'https://www.shutterstock.com/image-photo/fast-food-unhealthy-eating-concept-600nw-2182172665.jpg',
      EmpName: 'Explore by Cuisine',
      designation: 'select by Cuisine',
      empId: 'CUS002'
    }
  ];

  const handleButtonClick = (id) => {
    if (id === 1) {
      navigate('/restaurant');
    } else if (id === 2) {
      navigate('/cus');
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
                {data.id === 1 ? 'Explore by Restaurant' : 'Explore by Cuisine'}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
