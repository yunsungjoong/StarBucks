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
