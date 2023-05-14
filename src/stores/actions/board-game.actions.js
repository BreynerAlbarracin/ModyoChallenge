const BoardGameActions = {
  registerSuccess: 'REGISTER_SUCCESS',
  registerFail: 'REGISTER_FAIL',
  loadImagesToPlay: 'LOAD_IMAGES_PLAY',
};

export function registerSuccess() {
  return { type: BoardGameActions.registerSuccess, count: 1 };
}

export function registerFail() {
  return { type: BoardGameActions.registerFail, count: 1 };
}

export function loadImagesToPlay(imagesToPlay) {
  return {
    type: BoardGameActions.loadImagesToPlay,
    imagestoPlay: imagesToPlay,
  };
}
