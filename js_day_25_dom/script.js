// difference between map and foreach

// .forEach( function(){}) :- it is used fo iteration of array --- it doesn't return anything

// .map( function(){}) :- it is used for performing some transformation on array ---  it can return something


// Reels project

const reels = [
  {
    isMuted: true,
    userName: "sophia_carter",
    likeCount: 12800,
    isLiked: false,
    commentCount: 342,
    caption: "Chasing sunsets and good vibes 🌅✨",
    video: "./video/reel1.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 120,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "liam.codes",
    likeCount: 9500,
    isLiked: true,
    commentCount: 210,
    caption: "Debugging is just modern-day detective work 🔍💻",
    video: "./video/reels2.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 75,
    isFollowed: false,
  },
  {
    isMuted: true,
    userName: "emma_designs",
    likeCount: 15400,
    isLiked: false,
    commentCount: 480,
    caption: "Design is intelligence made visible 🎨✨",
    video: "./video/reels3.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 130,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "noah_travels",
    likeCount: 20400,
    isLiked: true,
    commentCount: 620,
    caption: "Woke up in a new country today 🌍✈️",
    video: "./video/reels4.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 300,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "ava_insights",
    likeCount: 8700,
    isLiked: false,
    commentCount: 195,
    caption: "Turning data into decisions 📊🔍",
    video: "./video/reels5.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 64,
    isFollowed: false,
  },
  {
    isMuted: true,
    userName: "chef_aarav",
    likeCount: 31000,
    isLiked: true,
    commentCount: 1020,
    caption: "New dessert recipe coming soon 🍰🔥",
    video: "./video/reels6.mp4",
    userProfile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    shareCount: 460,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "fitness_mia",
    likeCount: 17800,
    isLiked: false,
    commentCount: 410,
    caption: "Strong body, stronger mind 💪🌟",
    video: "./video/reels7.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 142,
    isFollowed: false,
  },
  {
    isMuted: true,
    userName: "tech_raj",
    likeCount: 22100,
    isLiked: true,
    commentCount: 530,
    caption: "AI is not the future—it's the present 🤖⚡",
    video: "./video/reels8.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 310,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "wander_with_lily",
    likeCount: 19200,
    isLiked: false,
    commentCount: 305,
    caption: "Nature always heals 🌲🍃",
    video: "./video/reels9.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 220,
    isFollowed: false,
  },
  {
    isMuted: true,
    userName: "music_by_ethan",
    likeCount: 34200,
    isLiked: true,
    commentCount: 980,
    caption: "New beats dropping tonight 🎧🔥",
    video: "./video/reels10.mp4",
    userProfile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    shareCount: 520,
    isFollowed: true,
  },
];

// let sum = ''

let allReels = document.querySelector(".all-reels");

/*reels.forEach( (elem,indx) => {

  console.log(indx)
    sum =
      sum +
      `<div class="reel">
                <video autoplay loop muted src="${elem.video}"></video>
                <div class="bottom">
                    <div class="user">
                        <img src="${elem.userProfile}" alt="">
                        <h4>${elem.userName}</h4>
                        <button>${
                          elem.isFollowed ? "Unfollow" : "Follow"
                        }</button>
                    </div>
                    <h3>${elem.caption}</h3>
                </div>

                <div class="right">
                    <div id=${indx} class="like">
                        <h4 class="like-icon">${
                          elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'
                        }</h4>
                        <h6>${elem.likeCount}</h6>
                    </div>

                    <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>

                    <div class="share">
                         <h4 class="share-icon"><i class="ri-send-plane-fill"></i></i></h4>
                        <h6>${elem.shareCount}</h6>
                    </div>

                    <div class="menu">
                         <h4 class="menu-icon"><i class="ri-more-2-fill"></i></i></i></h4>
                    </div>

                </div>
            </div>`;
}) */

// console.log(sum)

// allReels.innerHTML = sum


// next day lecture

// let arr = [10,20,30,40]

// arr.forEach( function(elem,indx){
//   console.log(indx)
// })

// forEach ke andar ke function me first parameter se array ke elements ko acess krte h r dusre parameter se array ke index ko


function addData(){
  let sum = "";

  reels.forEach((elem, indx) => {
    
    sum =
      sum +
      `<div class="reel">
                <video autoplay loop ${elem.isMuted ? "muted" : ""} src="${
        elem.video
      }"></video>
                <div class="mute" id=${indx}>${
        elem.isMuted
          ? '<i class="ri-volume-mute-line"></i>'
          : '<i class="ri-volume-up-line"></i>'
      }</i></div>
                <div class="bottom">
                    <div class="user">
                        <img src="${elem.userProfile}" alt="">
                        <h4>${elem.userName}</h4>
                        <button id=${indx} class="follow">${
        elem.isFollowed ? "Unfollow" : "Follow"
      }</button>
                    </div>
                    <h3>${elem.caption}</h3>
                </div>

                <div class="right">
                    <div id=${indx} class="like">
                        <h4 class="like-icon">${
                          elem.isLiked
                            ? '<i class="love ri-heart-3-fill"></i>'
                            : '<i class="ri-heart-3-line"></i>'
                        }</h4>
                        <h6>${elem.likeCount}</h6>
                    </div>

                    <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>

                    <div class="share">
                         <h4 class="share-icon"><i class="ri-send-plane-fill"></i></i></h4>
                        <h6>${elem.shareCount}</h6>
                    </div>

                    <div class="menu">
                         <h4 class="menu-icon"><i class="ri-more-2-fill"></i></i></i></h4>
                    </div>

                </div>
            </div>`;
  });

  allReels.innerHTML = sum;
}

addData();


allReels.addEventListener('click',function(dets){

  if(dets.target.className == 'like') {
  if (!reels[dets.target.id].isLiked)
  {
    reels[dets.target.id].likeCount++;
  reels[dets.target.id].isLiked = true
}
else{
   reels[dets.target.id].likeCount--;
   reels[dets.target.id].isLiked = false;
}
   addData();
  }


  if(dets.target.className == 'follow'){
    if(reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = false
    }
    else{
      reels[dets.target.id].isFollowed = true
    }
    addData();
  }


  if (dets.target.className == "mute") {
    if (reels[dets.target.id].isMuted) {
      reels[dets.target.id].isMuted = false;
    } else {
      reels[dets.target.id].isMuted = true;
    }
    addData();
  }

console.log(dets.target)

  
})
