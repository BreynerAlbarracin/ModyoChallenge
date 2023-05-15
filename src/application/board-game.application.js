import GetImagesToPlay from '../services/apis/Images.service';
import BoardGameStore from '../stores/stores/board-game.store';
import {
  loadImagesToPlay, registerFail, registerSuccess, resetBoard,
} from '../stores/actions/board-game.actions';
import UsersStore from '../stores/stores/users.store';
import { addUserScore } from '../stores/actions/users.actions';

export function loadImagesGame() {
  GetImagesToPlay()
    .then((imagesToPlay) => {
      const images = imagesToPlay.map((imgInfo) => ({ ...imgInfo, id: `${imgInfo.id}|1` }));
      const imagesCopy = imagesToPlay.map((imgInfo) => ({ ...imgInfo, id: `${imgInfo.id}|2` }));

      BoardGameStore.dispatch(loadImagesToPlay([...images, ...imagesCopy]));
    });
}

export function setSuccess() {
  BoardGameStore.dispatch(registerSuccess());
}

export function setFail() {
  BoardGameStore.dispatch(registerFail());
}

export function finishGame() {
  const usersState = UsersStore.getState();
  const boardGameState = BoardGameStore.getState();

  UsersStore.dispatch(addUserScore({
    userId: usersState.userId,
    success: boardGameState.success,
    fails: boardGameState.fails,
  }));
}

export function resetGame() {
  BoardGameStore.dispatch(resetBoard());
}
