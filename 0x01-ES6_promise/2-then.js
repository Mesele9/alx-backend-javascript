function handleResponseFromAPI(promise) {
  promise.then(() => {
    const response = {
      status: 200,
      body: 'success',
    };
    console.log('Got a response from the API');
    return response;
  })
    .catch(() => new Error());
}

export default handleResponseFromAPI;
