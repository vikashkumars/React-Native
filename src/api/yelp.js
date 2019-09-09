import axios from 'axios';

export default axios.create({
 
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer NTL51glt52f8uaZ4QFbwVSby6vD0BrBPyX4aL1e5XcM-8z4Vj8hlapjH2uEvbN3kfQQ7Ot7OHjjVA6yFeAkhlSHv2QX8V3ihedXVIvmEraIYIVIUVqvJV5LjiypwXXYx'

    }
});

