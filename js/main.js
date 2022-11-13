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