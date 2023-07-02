import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoPromise, userPromise]) => {
      console.log(photoPromise.body, userPromise.firstName, userPromise.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
