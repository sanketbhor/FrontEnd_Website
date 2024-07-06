function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span > ${dets} </span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
});

gsap.to("#page2>h1>span",{
    scrollTrigger:{
    trigger:`#page2>h1>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5,
},
    stagger:.2,
    color:`#fff`    
})




function canvas(){
const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./assets/frames00007.png
    ./assets/frames00010.png
    ./assets/frames00013.png
    ./assets/frames00016.png
    ./assets/frames00019.png
    ./assets/frames00022.png
    ./assets/frames00025.png
    ./assets/frames00028.png
    ./assets/frames00031.png
    ./assets/frames00034.png
    ./assets/frames00037.png
    ./assets/frames00040.png
    ./assets/frames00043.png
    ./assets/frames00046.png
    ./assets/frames00049.png
    ./assets/frames00052.png
    ./assets/frames00055.png
    ./assets/frames00058.png
    ./assets/frames00061.png
    ./assets/frames00064.png
    ./assets/frames00067.png
    ./assets/frames00070.png
    ./assets/frames00073.png
    ./assets/frames00076.png
    ./assets/frames00079.png
    ./assets/frames00082.png
    ./assets/frames00085.png
    ./assets/frames00088.png
    ./assets/frames00091.png
    ./assets/frames00094.png
    ./assets/frames00097.png
    ./assets/frames00100.png
    ./assets/frames00103.png
    ./assets/frames00106.png
    ./assets/frames00109.png
    ./assets/frames00112.png
    ./assets/frames00115.png
    ./assets/frames00118.png
    ./assets/frames00121.png
    ./assets/frames00124.png
    ./assets/frames00127.png
    ./assets/frames00130.png
    ./assets/frames00133.png
    ./assets/frames00136.png
    ./assets/frames00139.png
    ./assets/frames00142.png
    ./assets/frames00145.png
    ./assets/frames00148.png
    ./assets/frames00151.png
    ./assets/frames00154.png
    ./assets/frames00157.png
    ./assets/frames00160.png
    ./assets/frames00163.png
    ./assets/frames00166.png
    ./assets/frames00169.png
    ./assets/frames00172.png
    ./assets/frames00175.png
    ./assets/frames00178.png
    ./assets/frames00181.png
    ./assets/frames00184.png
    ./assets/frames00187.png
    ./assets/frames00190.png
    ./assets/frames00193.png
    ./assets/frames00196.png
    ./assets/frames00199.png
    ./assets/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 66;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger:"#page3" ,
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}

canvas();




var clutter = "";

document.querySelector("#page4>h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span > ${dets} </span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
});

gsap.to("#page4>h1>span",{
    scrollTrigger:{
    trigger:`#page4>h1>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5,
},
    stagger:.2,
    color:`#fff`    
})


function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
      ./assets/bridges00004.png
      ./assets/bridges00007.png
      ./assets/bridges00010.png
      ./assets/bridges00013.png
      ./assets/bridges00016.png
      ./assets/bridges00019.png
      ./assets/bridges00022.png
      ./assets/bridges00025.png
      ./assets/bridges00028.png
      ./assets/bridges00031.png
      ./assets/bridges00034.png
      ./assets/bridges00037.png
      ./assets/bridges00040.png
      ./assets/bridges00043.png
      ./assets/bridges00046.png
      ./assets/bridges00049.png
      ./assets/bridges00052.png
      ./assets/bridges00055.png
      ./assets/bridges00058.png
      ./assets/bridges00061.png
      ./assets/bridges00064.png
      ./assets/bridges00067.png
      ./assets/bridges00070.png
      ./assets/bridges00073.png
      ./assets/bridges00076.png
      ./assets/bridges00079.png
      ./assets/bridges00082.png
      ./assets/bridges00085.png
      ./assets/bridges00088.png
      ./assets/bridges00091.png
      ./assets/bridges00094.png
      ./assets/bridges00097.png
      ./assets/bridges00100.png
      ./assets/bridges00103.png
      ./assets/bridges00106.png
      ./assets/bridges00109.png
      ./assets/bridges00112.png
      ./assets/bridges00115.png
      ./assets/bridges00118.png
      ./assets/bridges00121.png
      ./assets/bridges00124.png
      ./assets/bridges00127.png
      ./assets/bridges00130.png
      ./assets/bridges00133.png
      ./assets/bridges00136.png
      ./assets/bridges00139.png
      ./assets/bridges00142.png
      ./assets/bridges00145.png
      ./assets/bridges00148.png
      ./assets/bridges00151.png
      ./assets/bridges00154.png
      ./assets/bridges00157.png
      ./assets/bridges00160.png
      ./assets/bridges00163.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 54;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page5>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger:"#page5" ,
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  }
  
  canvas1();



  var clutter = "";

  document.querySelector("#page6>h1").textContent.split(" ").forEach(function(dets){
      clutter += `<span > ${dets} </span>`
  
      document.querySelector("#page6>h1").innerHTML = clutter;
  });
  
  gsap.to("#page6>h1>span",{
      scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
      stagger:.2,
      color:`#fff`    
  })

  function canvas2(){
    const canvas = document.querySelector("#page7>canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
https://thisismagma.com/assets/home/lore/seq/1.webp?2
https://thisismagma.com/assets/home/lore/seq/2.webp?2
https://thisismagma.com/assets/home/lore/seq/3.webp?2
https://thisismagma.com/assets/home/lore/seq/4.webp?2
https://thisismagma.com/assets/home/lore/seq/5.webp?2
https://thisismagma.com/assets/home/lore/seq/6.webp?2
https://thisismagma.com/assets/home/lore/seq/7.webp?2
https://thisismagma.com/assets/home/lore/seq/8.webp?2
https://thisismagma.com/assets/home/lore/seq/9.webp?2
https://thisismagma.com/assets/home/lore/seq/10.webp?2
https://thisismagma.com/assets/home/lore/seq/11.webp?2
https://thisismagma.com/assets/home/lore/seq/12.webp?2
https://thisismagma.com/assets/home/lore/seq/13.webp?2
https://thisismagma.com/assets/home/lore/seq/14.webp?2
https://thisismagma.com/assets/home/lore/seq/15.webp?2
https://thisismagma.com/assets/home/lore/seq/16.webp?2
https://thisismagma.com/assets/home/lore/seq/17.webp?2
https://thisismagma.com/assets/home/lore/seq/18.webp?2
https://thisismagma.com/assets/home/lore/seq/19.webp?2
https://thisismagma.com/assets/home/lore/seq/20.webp?2
https://thisismagma.com/assets/home/lore/seq/21.webp?2
https://thisismagma.com/assets/home/lore/seq/22.webp?2
https://thisismagma.com/assets/home/lore/seq/23.webp?2
https://thisismagma.com/assets/home/lore/seq/24.webp?2
https://thisismagma.com/assets/home/lore/seq/25.webp?2
https://thisismagma.com/assets/home/lore/seq/26.webp?2
https://thisismagma.com/assets/home/lore/seq/27.webp?2
https://thisismagma.com/assets/home/lore/seq/28.webp?2
https://thisismagma.com/assets/home/lore/seq/29.webp?2
https://thisismagma.com/assets/home/lore/seq/30.webp?2
https://thisismagma.com/assets/home/lore/seq/31.webp?2
https://thisismagma.com/assets/home/lore/seq/32.webp?2
https://thisismagma.com/assets/home/lore/seq/33.webp?2
https://thisismagma.com/assets/home/lore/seq/34.webp?2
https://thisismagma.com/assets/home/lore/seq/35.webp?2
https://thisismagma.com/assets/home/lore/seq/36.webp?2
https://thisismagma.com/assets/home/lore/seq/37.webp?2
https://thisismagma.com/assets/home/lore/seq/38.webp?2
https://thisismagma.com/assets/home/lore/seq/39.webp?2
https://thisismagma.com/assets/home/lore/seq/40.webp?2
https://thisismagma.com/assets/home/lore/seq/41.webp?2
https://thisismagma.com/assets/home/lore/seq/42.webp?2
https://thisismagma.com/assets/home/lore/seq/43.webp?2
https://thisismagma.com/assets/home/lore/seq/44.webp?2
https://thisismagma.com/assets/home/lore/seq/45.webp?2
https://thisismagma.com/assets/home/lore/seq/46.webp?2
https://thisismagma.com/assets/home/lore/seq/47.webp?2
https://thisismagma.com/assets/home/lore/seq/48.webp?2
https://thisismagma.com/assets/home/lore/seq/49.webp?2
https://thisismagma.com/assets/home/lore/seq/50.webp?2
https://thisismagma.com/assets/home/lore/seq/51.webp?2
https://thisismagma.com/assets/home/lore/seq/52.webp?2
https://thisismagma.com/assets/home/lore/seq/53.webp?2
https://thisismagma.com/assets/home/lore/seq/54.webp?2
https://thisismagma.com/assets/home/lore/seq/55.webp?2
https://thisismagma.com/assets/home/lore/seq/56.webp?2
https://thisismagma.com/assets/home/lore/seq/57.webp?2
https://thisismagma.com/assets/home/lore/seq/58.webp?2
https://thisismagma.com/assets/home/lore/seq/59.webp?2
https://thisismagma.com/assets/home/lore/seq/60.webp?2
https://thisismagma.com/assets/home/lore/seq/61.webp?2
https://thisismagma.com/assets/home/lore/seq/62.webp?2
https://thisismagma.com/assets/home/lore/seq/63.webp?2
https://thisismagma.com/assets/home/lore/seq/64.webp?2
https://thisismagma.com/assets/home/lore/seq/65.webp?2
https://thisismagma.com/assets/home/lore/seq/66.webp?2
https://thisismagma.com/assets/home/lore/seq/67.webp?2
https://thisismagma.com/assets/home/lore/seq/68.webp?2
https://thisismagma.com/assets/home/lore/seq/69.webp?2
https://thisismagma.com/assets/home/lore/seq/70.webp?2
https://thisismagma.com/assets/home/lore/seq/71.webp?2
https://thisismagma.com/assets/home/lore/seq/72.webp?2
https://thisismagma.com/assets/home/lore/seq/73.webp?2
https://thisismagma.com/assets/home/lore/seq/74.webp?2
https://thisismagma.com/assets/home/lore/seq/75.webp?2
https://thisismagma.com/assets/home/lore/seq/76.webp?2
https://thisismagma.com/assets/home/lore/seq/77.webp?2
https://thisismagma.com/assets/home/lore/seq/78.webp?2
https://thisismagma.com/assets/home/lore/seq/79.webp?2
https://thisismagma.com/assets/home/lore/seq/80.webp?2
https://thisismagma.com/assets/home/lore/seq/81.webp?2
https://thisismagma.com/assets/home/lore/seq/82.webp?2
https://thisismagma.com/assets/home/lore/seq/83.webp?2
https://thisismagma.com/assets/home/lore/seq/84.webp?2
https://thisismagma.com/assets/home/lore/seq/85.webp?2
https://thisismagma.com/assets/home/lore/seq/86.webp?2
https://thisismagma.com/assets/home/lore/seq/87.webp?2
https://thisismagma.com/assets/home/lore/seq/88.webp?2
https://thisismagma.com/assets/home/lore/seq/89.webp?2
https://thisismagma.com/assets/home/lore/seq/90.webp?2
https://thisismagma.com/assets/home/lore/seq/91.webp?2
https://thisismagma.com/assets/home/lore/seq/92.webp?2
https://thisismagma.com/assets/home/lore/seq/93.webp?2
https://thisismagma.com/assets/home/lore/seq/94.webp?2
https://thisismagma.com/assets/home/lore/seq/95.webp?2
https://thisismagma.com/assets/home/lore/seq/96.webp?2
https://thisismagma.com/assets/home/lore/seq/97.webp?2
https://thisismagma.com/assets/home/lore/seq/98.webp?2
https://thisismagma.com/assets/home/lore/seq/99.webp?2
https://thisismagma.com/assets/home/lore/seq/100.webp?2
https://thisismagma.com/assets/home/lore/seq/101.webp?2
https://thisismagma.com/assets/home/lore/seq/102.webp?2
https://thisismagma.com/assets/home/lore/seq/103.webp?2
https://thisismagma.com/assets/home/lore/seq/104.webp?2
https://thisismagma.com/assets/home/lore/seq/105.webp?2
https://thisismagma.com/assets/home/lore/seq/106.webp?2
https://thisismagma.com/assets/home/lore/seq/107.webp?2
https://thisismagma.com/assets/home/lore/seq/108.webp?2
https://thisismagma.com/assets/home/lore/seq/109.webp?2
https://thisismagma.com/assets/home/lore/seq/110.webp?2
https://thisismagma.com/assets/home/lore/seq/111.webp?2
https://thisismagma.com/assets/home/lore/seq/112.webp?2
https://thisismagma.com/assets/home/lore/seq/113.webp?2
https://thisismagma.com/assets/home/lore/seq/114.webp?2
https://thisismagma.com/assets/home/lore/seq/115.webp?2
https://thisismagma.com/assets/home/lore/seq/116.webp?2
https://thisismagma.com/assets/home/lore/seq/117.webp?2
https://thisismagma.com/assets/home/lore/seq/118.webp?2
https://thisismagma.com/assets/home/lore/seq/119.webp?2
https://thisismagma.com/assets/home/lore/seq/120.webp?2
https://thisismagma.com/assets/home/lore/seq/121.webp?2
https://thisismagma.com/assets/home/lore/seq/122.webp?2
https://thisismagma.com/assets/home/lore/seq/123.webp?2
https://thisismagma.com/assets/home/lore/seq/124.webp?2
https://thisismagma.com/assets/home/lore/seq/125.webp?2
https://thisismagma.com/assets/home/lore/seq/126.webp?2
https://thisismagma.com/assets/home/lore/seq/127.webp?2
https://thisismagma.com/assets/home/lore/seq/128.webp?2
https://thisismagma.com/assets/home/lore/seq/129.webp?2
https://thisismagma.com/assets/home/lore/seq/130.webp?2
https://thisismagma.com/assets/home/lore/seq/131.webp?2
https://thisismagma.com/assets/home/lore/seq/132.webp?2
https://thisismagma.com/assets/home/lore/seq/133.webp?2
https://thisismagma.com/assets/home/lore/seq/134.webp?2
https://thisismagma.com/assets/home/lore/seq/135.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2     `;
      return data.split("\n")[index];
    }
    
    const frameCount = 136;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page7>canvas`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
    
      trigger:"#page7" ,
      pin: true,
      // markers:true,
      scroller: `#main`,
    //   set start end according to preference
      start: `top top`,
      end: `600% top`,
    });
    }
    
    canvas2();



gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scrub:.5,
    scroller:`#main`,
  },
  scale:1.5
  })

  gsap.to(".page7-cir-inner",{
    scrollTrigger:{
      trigger:`.page7-cir-inner`,
      start:`top center`,
      end:`bottom top`,
      scrub:.5,
      scroller:`#main`,
    },
    backgroundColor:`#0a3bce91`
    })















    //https://thisismagma.com/assets/home/roadmap/seq/1.jpg
    // https://thisismagma.com/assets/home/roadmap/seq/25.jpg
    // https://thisismagma.com/assets/home/roadmap/seq/50.jpg
    // https://thisismagma.com/assets/home/roadmap/seq/75.jpg
    // https://thisismagma.com/wp-content/uploads/2023/09/thisismagma.com-home-da-partners-2.png
    // https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-2-2x.png
    // https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-3-2x.png
    // https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-4-2x.png
    // https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-5-2x.png
    // https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-6-2x.png
    // https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-7-2x.png
    // https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-8-2x.png
    // https://thisismagma.com/wp-content/uploads/2023/11/thisismagma.com-home-francais-data4u.png
    // https://thisismagma.com/wp-content/uploads/2023/12/thisismagma.com-home-autodesk-logo.png
    // https://thisismagma.com/wp-content/uploads/2023/12/thisismagma.com-home-logion-logo.png
    // https://thisismagma.com/wp-content/uploads/2024/02/thisismagma.com-home-francais-image001.png
    // https://thisismagma.com/wp-content/uploads/2024/04/thisismagma.com-home-stegx-logo.png
    // https://thisismagma.com/wp-content/themes/magma/favicon-32x32.png
    // https://www.gstatic.com/recaptcha/api2/logo_48.png


    
// https://thisismagma.com/wp-content/themes/magma/assets/home/lore/1@2x.png
// https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-1.jpeg
// https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-1-1.5x.jpg
// https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-2-1.5x.jpg
// https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-3-1.5x.jpg
// https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-4-1.5x.jpg
// https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-5-1.5x.jpg
// https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-6-1.5x.jpg
// https://thisismagma.com/wp-content/uploads/2024/06/thisismagma.com-magma-joins-tokenys-real-world-assets-tokenization-ecosystem-rwa-tokenization-ecosystem-map.png
// https://thisismagma.com/wp-content/uploads/2024/03/thisismagma.com-live-event-1-min-scaled.jpg
// https://thisismagma.com/wp-content/uploads/2024/03/thisismagma.com-magma-x-stegx-partnership-announcement-magma-real-estate-announcement-cover-new.png
