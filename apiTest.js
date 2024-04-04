const axios = require('axios');

function fakeDataGenerator() {
  describe('get request', function () {
    it('get method', async function () {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(typeof response.data, 'object');
    });
  });

  const postData = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  };

  describe('post request', function () {
    it('post method', async function () {
      const response = await axios.post('https://fakestoreapi.com/products',postDat);
      console.log(response.status);
      console.log(typeof response.data, 'object');
    });
  });

  describe('put request', function () {
    it('put method', function () {
      const putData = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      };
      const response = axios.put(
        'https://fakestoreapi.com/products/7s',
        putData
      );
      console.log(response.status);
      console.log(typeof response.data, 'object');
    });
  });

  describe('delete request', function () {
    it('delete method', async function () {
      const response = await axios.delete(
        'https://fakestoreapi.com/products/6'
      );
      console.log(response.status);
      console.log(typeof response.data, 'object');
    });
  });
}

module.export = fakeDataGenerator;
