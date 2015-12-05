import { Rangers } from '../data';

let rangers = [...Rangers];

export default class PowerRangersResource {
  find() {
    return new Promise(resolve => resolve(rangers));
  }

  findById(id) {
    const ranger = rangers.find(ranger => ranger.id === Number(id));
    return new Promise((resolve, reject) => {
      if (ranger) {
        resolve(ranger);
      } else {
        reject(`Invalid id (${id}).`);
      }
    });
  }

  update(ranger) {
    const rangerIndex = rangers.findIndex(ranger => ranger.id === Number(id));
    return new Promise((resolve, reject) => {
      if (rangerIndex >= 0) {
        rangers = [
          ...rangers.slice(0, rangerIndex),
          ranger,
          ...rangers.slice(rangerIndex + 1)
        ];
        resolve(ranger);
      } else {
        reject('Invalid id.');
      }
    });
  }

  destroy(id) {
    const rangerIndex = rangers.findIndex(ranger => ranger.id === Number(id));
    return new Promise((resolve, reject) => {
      if (rangerIndex >= 0) {
        rangers = [
          ...rangers.slice(0, rangerIndex),
          ...rangers.slice(rangerIndex + 1)
        ];
        resolve();
      } else {
        reject('Invalid id.');
      }
    });
  }
}
