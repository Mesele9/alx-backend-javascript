function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'Success',
    };
    if (success === true) {
      resolve(obj);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
