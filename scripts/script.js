new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      currentSeconds: 0,
		  durationSeconds: 0,
      previousVolume: 35,
		  showVolume: false,
		  volume: 100,
      tracks: [
        {
          name: "Nevermind",
          artist: "Dennis Llyod",
          cover: "./img/1.jpg",
          source: "./mp3/1.mp3",
          url: "./mp3/1.mp3",
          num:1,
        },
        {
          name: "Rather Be",
          artist: "Clean Bandit",
          cover: "./img/2.jpg",
          source: "./mp3/2.mp3",
          url: "./mp3/2.mp3",
          num:2,
        },
        {
          name: "Audio",
          artist: "Sia",
          cover: "./img/3.jpg",
          source:"./mp3/3.mp3",
          url: "./mp3/3.mp3",
          num:3,
        },
        {
          name: "Baby",
          artist: "Clean Bandit",
          cover: "./img/4.jpg",
          source: "./mp3/4.mp3",
          url: "./mp3/4.mp3",
          num:4,
        },
        {
          name: "Brave",
          artist: "Zayde Wolf",
          cover: "./img/5.jpg",
          source: "./mp3/5.mp3",
          url: "./mp3/5.mp3",
          num:5,
        },
        {
          name: "Sunflower",
          artist: "Post Malone",
          cover: "./img/6.jpg",
          source:"./mp3/6.mp3",
          url: "./mp3/6.mp3",
          num:6,
        },
        {
          name: "Renegades",
          artist: "X Ambassadors",
          cover: "./img/7.jpg",
          source: "./mp3/7.mp3",
          url: "./mp3/7.mp3",
          num:7,
        },
        {
          name: "Gimme Shelter",
          artist: "Rolling Stones",
          cover: "./img/8.jpg",
          source: "./mp3/8.mp3",
          url: "./mp3/8.mp3",
          num:8,
        },
        {
          name: "Mr. Blue Sky",
          artist: "Electric Light Orchestra",
          cover: "./img/9.jpg",
          source: "./mp3/9.mp3",
          url: "./mp3/9.mp3",
          num:9,
        },
        {
          name: "Come and Get Your Love",
          artist: "Redbone",
          cover: "./img/10.jpg",
          source: "./mp3/10.mp3",
          url: "./mp3/10.mp3",
          num:10,
        },
        {
          name: "Someone You Loved",
          artist: "Lewis Capaldi",
          cover: "./img/11.jpg",
          source: "./mp3/11.mp3",
          url: "./mp3/11.mp3",
          num:11,
        },
        {
          name: "Woke Up Late",
          artist: "Drax Project",
          cover: "./img/12.jpg",
          source: "./mp3/12.mp3",
          url: "./mp3/12.mp3",
          num:12,
        },
        {
          name: "Someone To You",
          artist: "Banners",
          cover: "./img/13.jpg",
          source: "./mp3/13.mp3",
          url: "./mp3/13.mp3",
          num:13,
        },
        {
          name: "Yürek",
          artist: "Duman",
          cover: "./img/14.jpg",
          source: "./mp3/14.mp3",
          url: "./mp3/14.mp3",
          num:14,
        },
        {
          name: "Koca yaşlı şişko dünya",
          artist: "Adamlar",
          cover: "./img/15.jpg",
          source: "./mp3/15.mp3",
          url: "./mp3/15.mp3",
          num:15,
        },
        {
          name: "Fireball",
          artist: "SYNAPSON",
          cover: "./img/1.jpg",
          source: "./mp3/16.mp3",
          url: "./mp3/16.mp3",
          num:16,
        },
        {
          name: "Happiest Man on Earth",
          artist: "Broken Back",
          cover: "./img/2.jpg",
          source: "./mp3/17.mp3",
          url: "./mp3/17.mp3",
          num:17,
        },
        {
          name: "Halcyon Birds",
          artist: "Broken Back",
          cover: "./img/3.jpg",
          source: "./mp3/18.mp3",
          url: "./mp3/18.mp3",
          num:18,
        },
        {
          name: "Aşk Davası",
          artist: "Hey Douglas",
          cover: "./img/4.jpg",
          source: "./mp3/19.mp3",
          url: "./mp3/19.mp3",
          num:19,
        },
        {
          name: "Deterjan",
          artist: "Hey Douglas ft. Can Gox",
          cover: "./img/5.jpg",
          source: "./mp3/20.mp3",
          url: "./mp3/20.mp3",
          num:20,
        },
        {
          name: "Far From Any Road",
          artist: "The Handsome Family",
          cover: "./img/6.jpg",
          source: "./mp3/21.mp3",
          url: "./mp3/21.mp3",
          num:21,
        },
        {
          name: "Levitating",
          artist: "Dua Lipa",
          cover: "./img/7.jpg",
          source: "./mp3/22.mp3",
          url: "./mp3/22.mp3",
          num:22,
        },
        {
          name: "Unstoppable",
          artist: "Sia",
          cover: "./img/8.jpg",
          source: "./mp3/23.mp3",
          url: "./mp3/23.mp3",
          num:23,
        },
        {
          name: "Unstoppable",
          artist: "The Score",
          cover: "./img/9.jpg",
          source: "./mp3/24.mp3",
          url: "./mp3/24.mp3",
          num:24,
        },
        {
          name: "Elastic Heart",
          artist: "Sia",
          cover: "./img/10.jpg",
          source: "./mp3/25.mp3",
          url: "./mp3/25.mp3",
          num:25,
        },
        {
          name: "Kids",
          artist: "OneRepublic",
          cover: "./img/11.jpg",
          source: "./mp3/26.mp3",
          url: "./mp3/26.mp3",
          num:26,
        },
        {
          name: "Adventure Of A Lifetime",
          artist: "Coldplay",
          cover: "./img/12.jpg",
          source: "./mp3/27.mp3",
          url: "./mp3/27.mp3",
          num:27,
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  computed: {
    muted() {
			return this.volume / 100 === 0;
		},
		percentComplete() {
			return parseInt(this.currentSeconds / this.durationSeconds * 100);
		}
  },
  watch: {
		volume(value) {
			this.audio.volume = this.volume / 100;
		}
	},
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    mute() {
			if (this.muted) {
				return this.volume = this.previousVolume;
			}

			this.previousVolume = this.volume;
			this.volume = 0;
		},
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    forceFileDownload(response){
      const elt = this.tracks[this.currentTrackIndex]
      const url ="https://github.com/YunusEmreAlps/mini-player/blob/gh-pages/mp3/"+elt.num+".mp3?raw=true"
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'music.mp3') //or any other extension
      document.body.appendChild(link)
      link.click()
   },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }

});
