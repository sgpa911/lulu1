import { Box, Grid, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const cuisines = [
  { name: "Burger", img: "https://as1.ftcdn.net/v2/jpg/02/84/57/30/1000_F_284573041_bSjTuUemABfNt9Bbw9XUzS7773Xy0vSR.jpg" },
  { name: "Pizza", img: "https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-small-slice-up-pizza-on-a-white-background-with-pepperoni-on-image_13156258.jpg" },
  { name: "CAKE", img: "https://t4.ftcdn.net/jpg/02/52/80/65/360_F_252806534_HkpmruoDjSPwXx4X9y4Lht8WBmj9GfEN.jpg" },
  { name: "ROLLS", img: "https://media.istockphoto.com/id/628234028/photo/tortilla.jpg?s=612x612&w=0&k=20&c=UL3a4aFRNxbqp-4A1dHvy8At1xM_ElRWCyijIJFt8lc=" },
  { name: "Milkshake", img: "https://img.freepik.com/premium-photo/delicious-chocolate-milkshake-with-drizzles-chocolate-syrup-isolated-white-background_878783-10258.jpg" },
  { name: "Biryani", img: "https://img.freepik.com/premium-photo/isolated-delicious-spicy-chicken-biryani-white-bowl-white-background-indian-pakistani-ramz_877796-961.jpg" }
];

const CuisineGrid = () => {
  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Search by Cuisine..." 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#39424E", fontSize: "20px" }} /> {/* Adjusted icon color and size */}
            </InputAdornment>
          ),
          style: {
            borderRadius: "50px", // Round corners
            height: "40px", // Adjust the height to match
            backgroundColor: "#FFFFFF", // Light background color
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            paddingLeft: "10px" // Spacing between icon and border
          },
        }}
        sx={{
          backgroundColor: "#F0F0F0",
          mb: 4,
          mt: 2,
        }}
      />

      {/* Cuisine Grid */}
      <Grid 
        container 
        spacing={{ xs: 3, sm: 4, md: 5 }}  // Adjust spacing dynamically based on screen size
        justifyContent="center"
      >
        {cuisines.map((cuisine, index) => (
          <Grid 
            item 
            xs={6}  // Two items per row on extra small screens
            sm={4}  // Three items per row on small screens
            md={3}  // Four items per row on medium screens
            lg={2}  // Six items per row on large screens
            key={index}
            sx={{ textAlign: "auto" }}
          >
            <Box
              sx={{
                width: { xs: "90px", sm: "110px", md: "120px" }, // Adjust width of the circle based on screen size
                height: { xs: "90px", sm: "110px", md: "120px" }, // Adjust height of the circle based on screen size
                borderRadius: "50%",
                backgroundColor: "#21005D", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(1,0,0,10)", 
                margin: "10px", // Adjust the margin around each circle
              }}
            >
              <Box
                component="img"
                src={cuisine.img}
                alt={cuisine.name}
                sx={{
                  width: { xs: "70px", sm: "80px", md: "100px" }, // Adjust image size inside the circle based on screen size
                  height: { xs: "70px", sm: "80px", md: "100px" }, 
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold" 
              align="center" 
              sx={{ marginTop: '10px', fontSize: { xs: "12px", sm: "14px", md: "16px" }}}  // Adjust font size based on screen size
            >
              {cuisine.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CuisineGrid;
