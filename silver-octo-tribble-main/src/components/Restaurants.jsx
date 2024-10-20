import React from 'react';
import { FaSearch, FaHome } from 'react-icons/fa';

const restaurants = [
  { name: 'McDonald\'s', logo: 'data:image/png;base64,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' },
  { name: 'Burger King', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--1MJsy7_DWpEDHBVdc8L7Vn-neqF-M_MyA&s' },
  { name: 'Subway', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoghfyrkT5Rh3ykrQboTb9zxBCuIy4g919WA&s' },
  { name: 'Pizza Hut', logo: 'https://e7.pngegg.com/pngimages/399/362/png-clipart-pizza-hut-kfc-delivery-restaurant-hut-logo-pizza-delivery-thumbnail.png' },
  { name: 'Paragon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Paragonrestlogo.jpg/200px-Paragonrestlogo.jpg' },
  { name: 'Domino\'s Pizza', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/2048px-Dominos_pizza_logo.svg.png' },
  { name: 'Baskin Robbins', logo: 'https://www.logo.wine/a/logo/Baskin-Robbins/Baskin-Robbins-Logo.wine.svg' },
  { name: 'Starbucks', logo: 'https://e7.pngegg.com/pngimages/129/962/png-clipart-coffee-cafe-starbucks-logo-frappuccino-campus-emblem-label.png' },
  { name: 'Taco Bell', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXwG0rT4BryhBTAkTXXavKN_DkqCAp2Z7dw&s' },
  { name: 'ChicKing', logo: 'https://mir-s3-cdn-cf.behance.net/projects/404/05d50c197547609.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg' },
];

const MallRestaurants = () => {
  return (
    <div style={styles.container}>
    

      <div style={styles.searchContainer}>
        <FaSearch style={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search by Restaurant..."
          style={styles.searchInput}
        />
      </div>

      <div style={styles.restaurantGrid}>
        {restaurants.map((restaurant, index) => (
          <div key={index} style={styles.restaurantCard}>
            <img src={restaurant.logo} alt={restaurant.name} style={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '375px',
    margin: '0 auto',
    padding: '10px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#490970',
    padding: '15px',
    color: 'white',
    borderRadius: '10px 10px 0 0',
  },
  homeIcon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    margin: '20px 0',
  },
  searchIcon: {
    fontSize: '20px',
    marginRight: '10px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    flex: 1,
  },
  restaurantGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
  },
  restaurantCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
  },
};

export default MallRestaurants;
