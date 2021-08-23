# Roger's World Analytics Web SDK

<section>

## analytics

<section>

### app

<section>

#### pages

<section>

**Web App / Home**

<code>analytics.app.pages.home()</code>

</section>

<section>

**Web App / Auth**

<code>analytics.app.pages.auth()</code>

</section>

<section>

**Web App / Payment**

<code>analytics.app.pages.payment({ _userId_ })</code>

</section>

</section>

<section>

#### events

<section>

##### auth

<section>

**Web App / Auth / Signed Up**

<code>analytics.app.events.auth.signedUp({ _userId_ })</code>

</section>

<section>

**Web App / Auth / Logged In**

<code>analytics.app.events.auth.loggedIn({ _userId_ })</code>

</section>

<section>

**Web App / Auth / Logged Out**

<code>analytics.app.events.auth.loggedOut({ _userId_ })</code>

</section>

<section>

**Web App / Auth / Canceled**

<code>analytics.app.events.auth.canceled()</code>

</section>

<section>

**Web App / Auth / Required**

<code>analytics.app.events.auth.required({ _episodeId_ })</code>

</section>

</section>

<section>

##### payment

<section>

**Web App / Payment / Required**

<code>analytics.app.events.payment.required({ _userId_ })</code>

</section>

<section>

**Web App / Payment / Completed**

<code>analytics.app.events.payment.completed({ _userId_ })</code>

</section>

</section>

<section>

##### episode

<section>

**Web App / Episode / Details Viewed**

<code>analytics.app.events.episode.detailsViewed({ _episodeId_, userId })</code>

</section>

</section>

<section>

##### room

<section>

**Web App / Room / Created**

<code>analytics.app.events.room.created({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

**Web App / Room / Exited**

<code>analytics.app.events.room.exited({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

**Web App / Room / Back to All Episodes**

<code>analytics.app.events.room.backToAllEpisodes({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

**Web App / Room / Back to All Episodes**

<code>analytics.app.events.room.exitToLobby({ _roomId_, _episodeId_, _userId_ })</code>

</section>

<section>

**Web App / Room / Joined**

<code>analytics.app.events.room.joined({ _roomId_, _episodeId_, _deviceId_, _playerId_ })</code>

</section>

</section>

<section>

##### device

<section>

**Web App / Device / Connected**

<code>analytics.app.events.device.connected({ _roomId_, _episodeId_, _deviceId_ })</code>

</section>

<section>

**Web App / Device / Disconnected**

<code>analytics.app.events.device.disconnected({ _roomId_, _episodeId_, _deviceId_ })</code>

</section>

</section>

<section>

##### scene

<section>

**Web App / Scene / Started**

<code>analytics.app.events.scene.started({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

**Web App / Scene / Completed**

<code>analytics.app.events.scene.completed({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

**Web App / Scene / Skipped**

<code>analytics.app.events.scene.skipped({ _sceneId_, _roomId_, _episodeId_ })</code>

</section>

<section>

###### video

<section>

**Web App / Scene / Video / Segment Started**

<code>analytics.app.events.scene.video.segmentStarted({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

**Web App / Scene / Video / Segment Completed**

<code>analytics.app.events.scene.video.segmentCompleted({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

**Web App / Scene / Video / Autoplay Prevented**

<code>analytics.app.events.scene.video.autoplayPrevented({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

**Web App / Scene / Video / Paused**

<code>analytics.app.events.scene.video.paused({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

**Web App / Scene / Video / Played**

<code>analytics.app.events.scene.video.played({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

<section>

**Web App / Scene / Video / Looped**

<code>analytics.app.events.scene.video.looped({ _roomId_, _episodeId_, _sceneId_, _videoId_ })</code>

</section>

</section>

<section>

###### prompt

<section>

**Web App / Scene / Prompt / Answered**

<code>analytics.app.events.scene.prompt.answered({ _roomId_, _episodeId_, _sceneId_, _answer_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

###### multipleChoice

<section>

**Web App / Scene / Multiple Choice / Answered**

<code>analytics.app.events.scene.multipleChoice.answered({ _roomId_, _episodeId_, _sceneId_, _answer_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

###### buttonPrompt

<section>

**Web App / Scene / Button Prompt / Pressed**

<code>analytics.app.events.scene.buttonPrompt.pressed({ _roomId_, _episodeId_, _sceneId_, _playerId_, _deviceId_ })</code>

</section>

</section>

<section>

###### timer

<section>

**Web App / Scene / Timer / Started**

<code>analytics.app.events.scene.timer.started({ _roomId_, _episodeId_, _sceneId_ })</code>

</section>

<section>

**Web App / Scene / Timer / Ended**

<code>analytics.app.events.scene.timer.ended({ _roomId_, _episodeId_, _sceneId_ })</code>

</section>

</section>

</section>

</section>

</section>

</section>
