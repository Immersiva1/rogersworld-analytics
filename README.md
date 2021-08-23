# Roger's World Analytics Web SDK

<section>

__analytics__

<section>

__app__

<section>

__pages__

<section>

__home__



<code>analytics.app.pages.home()</code>

</section>

<section>

__auth__



<code>analytics.app.pages.auth()</code>

</section>

<section>

__payment__



<code>analytics.app.pages.payment({ _userId_ })</code>

</section>

</section>

<section>

__events__

<section>

__auth__

<section>

__signedUp__



<code>analytics.app.events.auth.signedUp({ _userId_ })</code>

</section>

<section>

__loggedIn__



<code>analytics.app.events.auth.loggedIn({ _userId_ })</code>

</section>

<section>

__loggedOut__



<code>analytics.app.events.auth.loggedOut({ _userId_ })</code>

</section>

<section>

__canceled__



<code>analytics.app.events.auth.canceled()</code>

</section>

<section>

__required__



<code>analytics.app.events.auth.required({ _episodeId_ })</code>

</section>

</section>

<section>

__payment__

<section>

__required__



<code>analytics.app.events.payment.required({ _userId_ })</code>

</section>

<section>

__completed__



<code>analytics.app.events.payment.completed({ _userId_ })</code>

</section>

</section>

<section>

__episode__

<section>

__detailsViewed__



<code>analytics.app.events.episode.detailsViewed({ _episodeId_, userId })</code>

</section>

</section>

<section>

__room__

<section>

__created__



<code>analytics.app.events.room.created({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

__exited__



<code>analytics.app.events.room.exited({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

__backToAllEpisodes__



<code>analytics.app.events.room.backToAllEpisodes({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

__exitToLobby__



<code>analytics.app.events.room.exitToLobby({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

__joined__



<code>analytics.app.events.room.joined({ _roomId_, _episodeId_, _deviceId_, _playerId_ })</code>

</section>

</section>

<section>

__device__

<section>

__connected__



<code>analytics.app.events.device.connected({ _roomId_, _episodeId_, _deviceId_ })</code>

</section>

<section>

__disconnected__



<code>analytics.app.events.device.disconnected({ _roomId_, _episodeId_, _deviceId_ })</code>

</section>

</section>

<section>

__scene__

<section>

__started__



<code>analytics.app.events.scene.started({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

__completed__



<code>analytics.app.events.scene.completed({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

__skipped__



<code>analytics.app.events.scene.skipped({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

__video__

<section>

__segmentStarted__



<code>analytics.app.events.scene.video.segmentStarted({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

__segmentCompleted__



<code>analytics.app.events.scene.video.segmentCompleted({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

__autoplayPrevented__



<code>analytics.app.events.scene.video.autoplayPrevented({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

__paused__



<code>analytics.app.events.scene.video.paused({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

__played__



<code>analytics.app.events.scene.video.played({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

__looped__



<code>analytics.app.events.scene.video.looped({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

</section>

<section>

__prompt__

<section>

__answered__



<code>analytics.app.events.scene.prompt.answered({ _roomId_, _episodeId_, _sceneId_, _answer_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

__multipleChoice__

<section>

__answered__



<code>analytics.app.events.scene.multipleChoice.answered({ _roomId_, _episodeId_, _sceneId_, _answer_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

__buttonPrompt__

<section>

__pressed__



<code>analytics.app.events.scene.buttonPrompt.pressed({ _roomId_, _episodeId_, _sceneId_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

__timer__

<section>

__started__



<code>analytics.app.events.scene.timer.started({ _roomId_, _episodeId_, _sceneId_ })</code>

</section>

<section>

__ended__



<code>analytics.app.events.scene.timer.ended({ _roomId_, _episodeId_, _sceneId_ })</code>

</section>

</section>

</section>

</section>

</section>

</section>

<style>

section {
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,.2);
}

</style>
