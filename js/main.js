const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {

    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');  // 01. 속성의 이름  / 02. 속성에 들어갈 실제 값 넣어줌
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');  // 01. 속성의 이름  / 02. 속성에 들어갈 실제 값 넣어줌
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY); 
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간 , 옵션);
        gsap.to(badgeEl, .6 , {
            opacity: 0,
            display: 'none'
        });
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6 , {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수 , 시간 )

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간 , 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) *.7, // 0.7 , 1.4 , 2.1 , 2.7
        opacity: 1
    });
});

// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true, // 자동재생 여부 
    loop : true // 반복 재생여부 
}); 
// new = 생성자(클래스) 여러가지 객체들을 다룰수있다.
//  ('') 안에 넣는것을 인수 데이터라고 한다
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드 가운데 보이기 
    loop: true,
    // autoplay: {
    //     delay: 5000
    // },
    pagination: { // 페이지 번호 사용 여부
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
      },
      navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
      }
}); 


new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    
    }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    // gsap.to(오소, 시간 , 옵션);
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5),  // 애니메이션 동작 시간
    { // 옵션
        y: size,
        repeat : -1,
        yoyo: true,
        ease: Power1.easeOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {   // forEach는 메서드를 써서 각각의 요소들을 반복한다.
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
        triggerHook : .8  //
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});