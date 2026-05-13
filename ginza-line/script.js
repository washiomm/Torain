const player =
  document.getElementById("audio-player");

function playMusic(file){

  // 同じ曲なら一回停止
  if(player.src.includes(file)){

    player.pause();
    player.currentTime = 0;
  }

  // 新しい曲設定
  player.src = file;

  // 再生
  player.play()
    .catch(error => {

      console.log(
        "再生エラー:",
        error
      );

    });
}

function stopMusic(){

  player.pause();

  player.currentTime = 0;
}
