const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

const Restaurant = require('./model/restaurantModel'); // Use the model to query data

require('./connection'); // Ensure you have a MongoDB connection

app.use(express.json());
app.use(cors());

// Add route to handle search requests
app.get('/search-cuisine', async (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';

    try {
        // Find restaurants matching the search query
        const filteredRestaurants = await Restaurant.find({
            $or: [
                { shop_name: { $regex: query, $options: 'i' } }, // Case-insensitive regex match
                { cuisine: { $elemMatch: { $regex: query, $options: 'i' } } },
                { 'menu.items.name': { $regex: query, $options: 'i' } },
                { 'menu.items.tags': { $elemMatch: { $regex: query, $options: 'i' } } }
            ]
        });

        if (filteredRestaurants.length > 0) {
            res.status(200).json({ success: true, data: filteredRestaurants });
        } else {
            res.status(404).json({ success: false, message: 'No restaurants found' });
        }
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
