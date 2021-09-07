# Roger's World Analytics Web SDK

<section>

## analytics

<section>

### app

<section>

#### pages

<section>

__Web App / Home__

<code>analytics.app.pages.home()</code>

</section>

<section>

__Web App / Auth__

<code>analytics.app.pages.auth()</code>

</section>

<section>

__Web App / Payment__

<code>analytics.app.pages.payment({ _userId_ })</code>

</section>

</section>

<section>

#### events

<section>

##### auth

<section>

__Web App / Auth / Signed Up__

<code>analytics.app.events.auth.signedUp({ _userId_ })</code>

</section>

<section>

__Web App / Auth / Logged In__

<code>analytics.app.events.auth.loggedIn({ _userId_ })</code>

</section>

<section>

__Web App / Auth / Logged Out__

<code>analytics.app.events.auth.loggedOut({ _userId_ })</code>

</section>

<section>

__Web App / Auth / Canceled__

<code>analytics.app.events.auth.canceled()</code>

</section>

<section>

__Web App / Auth / Required__

<code>analytics.app.events.auth.required({ _episodeId_ })</code>

</section>

</section>

<section>

##### payment

<section>

__Web App / Payment / Required__

<code>analytics.app.events.payment.required({ _userId_ })</code>

</section>

<section>

__Web App / Payment / Completed__

<code>analytics.app.events.payment.completed({ _userId_ })</code>

</section>

</section>

<section>

##### episode

<section>

__Web App / Episode / Details Viewed__

<code>analytics.app.events.episode.detailsViewed({ _episodeId_, userId })</code>

</section>

</section>

<section>

##### device

<section>

__Web App / Device / Connected__

<code>analytics.app.events.device.connected({ _roomId_, _episodeId_, _deviceId_ })</code>

</section>

<section>

__Web App / Device / Disconnected__

<code>analytics.app.events.device.disconnected({ _roomId_, _episodeId_, _deviceId_ })</code>

</section>

</section>

<section>

##### room

<section>

__Web App / Room / Created__

<code>analytics.app.events.room.created({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

__Web App / Room / Exited__

<code>analytics.app.events.room.exited({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

__Web App / Room / Back to All Episodes__

<code>analytics.app.events.room.backToAllEpisodes({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

__Web App / Room / Joined__

<code>analytics.app.events.room.joined({ _roomId_, _episodeId_, _deviceId_, _playerId_ })</code>

</section>

<section>

__Web App / Room / Episode Started__

<code>analytics.app.events.room.episodeStarted({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

__Web App / Room / Episode Completed__

<code>analytics.app.events.room.episodeCompleted({ _roomId_, _episodeId_, _userId_ })</code>

</section>

</section>

<section>

##### scene

<section>

__Web App / Scene / Started__

<code>analytics.app.events.scene.started({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

__Web App / Scene / Completed__

<code>analytics.app.events.scene.completed({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

__Web App / Scene / Skipped__

<code>analytics.app.events.scene.skipped({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

###### video

<section>

__Web App / Scene / Video / Segment Started__

<code>analytics.app.events.scene.video.segmentStarted({ _roomId_, _episodeId_, _sceneId_, _videoId_, _timestamp_ })</code>

</section>

<section>

__Web App / Scene / Video / Segment Completed__

<code>analytics.app.events.scene.video.segmentCompleted({ _roomId_, _episodeId_, _sceneId_, _videoId_, _timestamp_ })</code>

</section>

<section>

__Web App / Scene / Video / Autoplay Prevented__

<code>analytics.app.events.scene.video.autoplayPrevented({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

__Web App / Scene / Video / Paused__

<code>analytics.app.events.scene.video.paused({ _roomId_, _episodeId_, _sceneId_, _videoId_, _timestamp_ })</code>

</section>

<section>

__Web App / Scene / Video / Resumed__

<code>analytics.app.events.scene.video.resumed({ _roomId_, _episodeId_, _sceneId_, _sceneIndex_, _scenesRemaining_, _sceneProgress_, _videoId_, _timestamp_ })</code>

</section>

<section>

__Web App / Scene / Video / Looped__

<code>analytics.app.events.scene.video.looped({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

</section>

<section>

###### prompt

<section>

__Web App / Scene / Prompt / Answered__

<code>analytics.app.events.scene.prompt.answered({ _roomId_, _episodeId_, _sceneId_, _answer_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

###### multipleChoice

<section>

__Web App / Scene / Multiple Choice / Answered__

<code>analytics.app.events.scene.multipleChoice.answered({ _roomId_, _episodeId_, _sceneId_, _answer_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

###### buttonPrompt

<section>

__Web App / Scene / Button Prompt / Pressed__

<code>analytics.app.events.scene.buttonPrompt.pressed({ _roomId_, _episodeId_, _sceneId_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

###### timer

<section>

__Web App / Scene / Timer / Started__

<code>analytics.app.events.scene.timer.started({ _roomId_, _episodeId_, _sceneId_ })</code>

</section>

<section>

__Web App / Scene / Timer / Ended__

<code>analytics.app.events.scene.timer.ended({ _roomId_, _episodeId_, _sceneId_ })</code>

</section>

</section>

</section>

</section>

</section>

</section>
