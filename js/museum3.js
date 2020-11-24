/*----mainImage slidebanner-----*/
$(function () {
    /*슬라이드 요소 준비*/
    $('#mainImage').each(function () {
        //요소에 필요한 변수 선언
        var $container = $(this); //a
        var $slideGroup = $container.find('.slideImage'); //b
        var $slides = $slideGroup.find('.slide'); //c
        var $nav = $container.find('.slidebtn'); //d
        var $indicator = $container.find('.slide_indicator'); //e 
        /*
        	a - 슬라이드쇼 전체 박스 
        	b - 슬라이드 이미지 그룹
        	c - 슬라이드 이미지
        	d - 네비게이션 (prev/next)
        	e - 인디케이터 
        */

        var slideCount = $slides.length // 슬라이드 개수 
        var indicatorHTML = ''; //인디케이터 콘텐츠 - 공란
        var currentIndex = 0; //현재 슬라이드 인덱스
        var duration = 500; //애니메이션이 넘어가는 시간
        var easing = "easeInOutExpo" //애니메이션 가속함수
        var interval = 7500; //자동으로 다음 슬라이드 넘어갈 때까지 시간
        var timer; //타이머

        //html 요소로 indicator 생성 삽입
        //각 슬라이드의 위치를 결정하고, 해당 인디케이터 생성
        $slides.each(function (i) {
            /*i 매개체 , i=index와 비슷, 슬라이드 개수만큼의 숫자*/
            $(this).css({
                left: 100 * i + '%'
            });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });
        //인디케이터 콘텐츠 삽입
        $indicator.html(indicatorHTML);


        //함수정의
        //모든 슬라이드를 표시하는 함수
        function goToSlide(index) {
            /*이미지 슬라이드 개수만큼 채워짐*/
            //슬라이드 그룹을 대상 위치에 맞게 이동
            $slideGroup.stop().animate({
                left: -100 * index + '%'
            }, duration, easing);
            currentIndex = index;
            //네비게이션 상태 업데이트 prev,next버튼 보일지 말지 설정
            updateNav();
        }
        //슬라이드 상태에 따른 네비게이션 및 인디케이터 업뎃 함수
        function updateNav() {
            var $navPrev = $nav.find('.prev');
            var $navNext = $nav.find('.next');

            //만약 첫번째 슬라이드라면 prv버튼을 해제
            if (currentIndex === 0) {
                $navPrev.addClass('on');
            } else {
                $navPrev.removeClass('on');
            }
            //만약 마지막 슬라이드라면 next 버튼 해제
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('on');
            } else {
                $navNext.removeClass('on');
            }
            //현재 슬라이드 표시 해제 indicator
            $indicator.find('a').removeClass('on').eq(currentIndex).addClass('on');
        }
        //타이머를 시작하는 함수
        function startTimer() {
            //변수 interval에서 설정한 시간이 경과할 때마다 작업 수행
            timer = setInterval(function () {
                //현재 슬라이드의 인덱스에 따라서 다음 표시할 슬라이드를 결정
                //만약 마지막 슬라이드면 첫번째 슬라이드에 타이머 적용
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);

            }, interval);
        }
        //타이머중지 
        function stopTimer() {
            clearInterval(timer);
        }
        //네비게이션 클릭하면 슬라이드 이동 
        $nav.on('click', 'a', function (e) {
            e.preventDefault(); /*이동하는 것을 막아줌*/

            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });
        //인디케이터 링크를 클릭하면 해당 슬라이드 표시 
        $indicator.on('click', 'a', function (e) {
            e.preventDefault();
            if (!$(this).hasClass('on')) {
                goToSlide($(this).index());
            }
        });
        //마우스 오버를 하면 타이머를 정지 그렇지 않으면 시작
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });

        //슬라이드쇼 시작
        //첫번째 슬라이드 표시
        goToSlide(currentIndex);

        //타이머 시작
        startTimer();
    });
    /*------------Section2--------*/

    /*슬라이드 요소 준비*/
    $('#special').each(function () {
        //요소에 필요한 변수 선언
        var $container = $(this); //a
        var $slideGroup = $container.find('.innerspec'); //b
        var $slides = $slideGroup.find('.specinfo'); //c
        var $nav = $container.find('.slidebtn'); //d
        var $indicator = $container.find('.slide_indicator'); //e 
        /*
        	a - 슬라이드쇼 전체 박스 
        	b - 슬라이드 이미지 그룹
        	c - 슬라이드 이미지
        	d - 네비게이션 (prev/next)
        	e - 인디케이터 
        */

        var slideCount = $slides.length // 슬라이드 개수 
        var indicatorHTML = ''; //인디케이터 콘텐츠 - 공란
        var currentIndex = 0; //현재 슬라이드 인덱스
        var duration = 500; //애니메이션이 넘어가는 시간
        var easing = "easeInOutExpo" //애니메이션 가속함수
        var interval = 7500; //자동으로 다음 슬라이드 넘어갈 때까지 시간
        var timer; //타이머

        //html 요소로 indicator 생성 삽입
        //각 슬라이드의 위치를 결정하고, 해당 인디케이터 생성
        $slides.each(function (i) {
            /*i 매개체 , i=index와 비슷, 슬라이드 개수만큼의 숫자*/
            $(this).css({
                left: 100 * i + '%'
            });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });
        //인디케이터 콘텐츠 삽입
        $indicator.html(indicatorHTML);


        //함수정의
        //모든 슬라이드를 표시하는 함수
        function goToSlide(index) {
            /*이미지 슬라이드 개수만큼 채워짐*/
            //슬라이드 그룹을 대상 위치에 맞게 이동
            $slideGroup.stop().animate({
                left: -100 * index + '%'
            }, duration, easing);
            currentIndex = index;
            //네비게이션 상태 업데이트 prev,next버튼 보일지 말지 설정
            updateNav();
        }
        //슬라이드 상태에 따른 네비게이션 및 인디케이터 업뎃 함수
        function updateNav() {
            var $navPrev = $nav.find('.prev');
            var $navNext = $nav.find('.next');

            //만약 첫번째 슬라이드라면 prv버튼을 해제
            if (currentIndex === 0) {
                $navPrev.addClass('on');
            } else {
                $navPrev.removeClass('on');
            }
            //만약 마지막 슬라이드라면 next 버튼 해제
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('on');
            } else {
                $navNext.removeClass('on');
            }
            //현재 슬라이드 표시 해제 indicator
            $indicator.find('a').removeClass('on').eq(currentIndex).addClass('on');
        }
        //타이머를 시작하는 함수
        function startTimer() {
            //변수 interval에서 설정한 시간이 경과할 때마다 작업 수행
            timer = setInterval(function () {
                //현재 슬라이드의 인덱스에 따라서 다음 표시할 슬라이드를 결정
                //만약 마지막 슬라이드면 첫번째 슬라이드에 타이머 적용
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);

            }, interval);
        }
        //타이머중지 
        function stopTimer() {
            clearInterval(timer);
        }
        //네비게이션 클릭하면 슬라이드 이동 
        $nav.on('click', 'a', function (e) {
            e.preventDefault(); /*이동하는 것을 막아줌*/

            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });
        //인디케이터 링크를 클릭하면 해당 슬라이드 표시 
        $indicator.on('click', 'a', function (e) {
            e.preventDefault();
            if (!$(this).hasClass('on')) {
                goToSlide($(this).index());
            }
        });
        //마우스 오버를 하면 타이머를 정지 그렇지 않으면 시작
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });

        //슬라이드쇼 시작
        //첫번째 슬라이드 표시
        goToSlide(currentIndex);

        //타이머 시작
        startTimer();
    });
    /*-------------Section4-------*/
    /*슬라이드 요소 준비*/
    $('#education').each(function () {
        //요소에 필요한 변수 선언
        var $container = $(this); //a
        var $slideGroup = $container.find('.mainEdu'); //b
        var $slides = $slideGroup.find('.eduContent'); //c
        var $nav = $container.find('.slidebtn'); //d
        var $indicator = $container.find('.slide_indicator'); //e 
        /*
        	a - 슬라이드쇼 전체 박스 
        	b - 슬라이드 이미지 그룹
        	c - 슬라이드 이미지
        	d - 네비게이션 (prev/next)
        	e - 인디케이터 
        */

        var slideCount = $slides.length // 슬라이드 개수 
        var indicatorHTML = ''; //인디케이터 콘텐츠 - 공란
        var currentIndex = 0; //현재 슬라이드 인덱스
        var duration = 500; //애니메이션이 넘어가는 시간
        var easing = "easeInOutExpo" //애니메이션 가속함수
        var interval = 8000; //자동으로 다음 슬라이드 넘어갈 때까지 시간
        var timer; //타이머

        //html 요소로 indicator 생성 삽입
        //각 슬라이드의 위치를 결정하고, 해당 인디케이터 생성
        $slides.each(function (i) {
            /*i 매개체 , i=index와 비슷, 슬라이드 개수만큼의 숫자*/
            $(this).css({
                left: 100 * i + '%'
            });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });
        //인디케이터 콘텐츠 삽입
        $indicator.html(indicatorHTML);


        //함수정의
        //모든 슬라이드를 표시하는 함수
        function goToSlide(index) {
            /*이미지 슬라이드 개수만큼 채워짐*/
            //슬라이드 그룹을 대상 위치에 맞게 이동
            $slideGroup.stop().animate({
                left: -100 * index + '%'
            }, duration, easing);
            currentIndex = index;
            //네비게이션 상태 업데이트 prev,next버튼 보일지 말지 설정
            updateNav();
        }
        //슬라이드 상태에 따른 네비게이션 및 인디케이터 업뎃 함수
        function updateNav() {
            var $navPrev = $nav.find('.prev');
            var $navNext = $nav.find('.next');

            //만약 첫번째 슬라이드라면 prv버튼을 해제
            if (currentIndex === 0) {
                $navPrev.addClass('on');
            } else {
                $navPrev.removeClass('on');
            }
            //만약 마지막 슬라이드라면 next 버튼 해제
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('on');
            } else {
                $navNext.removeClass('on');
            }
            //현재 슬라이드 표시 해제 indicator
            $indicator.find('a').removeClass('on').eq(currentIndex).addClass('on');
        }
        //타이머를 시작하는 함수
        function startTimer() {
            //변수 interval에서 설정한 시간이 경과할 때마다 작업 수행
            timer = setInterval(function () {
                //현재 슬라이드의 인덱스에 따라서 다음 표시할 슬라이드를 결정
                //만약 마지막 슬라이드면 첫번째 슬라이드에 타이머 적용
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);

            }, interval);
        }
        //타이머중지 
        function stopTimer() {
            clearInterval(timer);
        }
        //네비게이션 클릭하면 슬라이드 이동 
        $nav.on('click', 'a', function (e) {
            e.preventDefault(); /*이동하는 것을 막아줌*/

            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });
        //인디케이터 링크를 클릭하면 해당 슬라이드 표시 
        $indicator.on('click', 'a', function (e) {
            e.preventDefault();
            if (!$(this).hasClass('on')) {
                goToSlide($(this).index());
            }
        });
        //마우스 오버를 하면 타이머를 정지 그렇지 않으면 시작
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });

        //슬라이드쇼 시작
        //첫번째 슬라이드 표시
        goToSlide(currentIndex);

        //타이머 시작
        startTimer();
    });

    /*---------section5---------*/
    /*슬라이드 요소 준비*/
    $('#play').each(function () {
        //요소에 필요한 변수 선언
        var $container = $(this); //a
        var $slideGroup = $container.find('.innerplay'); //b
        var $slides = $slideGroup.find('.playInfo'); //c
        var $nav = $container.find('.slidebtn'); //d
        var $indicator = $container.find('.slide_indicator'); //e 
        /*
        	a - 슬라이드쇼 전체 박스 
        	b - 슬라이드 이미지 그룹
        	c - 슬라이드 이미지
        	d - 네비게이션 (prev/next)
        	e - 인디케이터 
        */

        var slideCount = $slides.length // 슬라이드 개수 
        var indicatorHTML = ''; //인디케이터 콘텐츠 - 공란
        var currentIndex = 0; //현재 슬라이드 인덱스
        var duration = 500; //애니메이션이 넘어가는 시간
        var easing = "easeInOutExpo" //애니메이션 가속함수
        var interval = 7500; //자동으로 다음 슬라이드 넘어갈 때까지 시간
        var timer; //타이머

        //html 요소로 indicator 생성 삽입
        //각 슬라이드의 위치를 결정하고, 해당 인디케이터 생성
        $slides.each(function (i) {
            /*i 매개체 , i=index와 비슷, 슬라이드 개수만큼의 숫자*/
            $(this).css({
                left: 100 * i + '%'
            });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });
        //인디케이터 콘텐츠 삽입
        $indicator.html(indicatorHTML);


        //함수정의
        //모든 슬라이드를 표시하는 함수
        function goToSlide(index) {
            /*이미지 슬라이드 개수만큼 채워짐*/
            //슬라이드 그룹을 대상 위치에 맞게 이동
            $slideGroup.stop().animate({
                left: -100 * index + '%'
            }, duration, easing);
            currentIndex = index;
            //네비게이션 상태 업데이트 prev,next버튼 보일지 말지 설정
            updateNav();
        }
        //슬라이드 상태에 따른 네비게이션 및 인디케이터 업뎃 함수
        function updateNav() {
            var $navPrev = $nav.find('.prev');
            var $navNext = $nav.find('.next');

            //만약 첫번째 슬라이드라면 prv버튼을 해제
            if (currentIndex === 0) {
                $navPrev.addClass('on');
            } else {
                $navPrev.removeClass('on');
            }
            //만약 마지막 슬라이드라면 next 버튼 해제
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('on');
            } else {
                $navNext.removeClass('on');
            }
            //현재 슬라이드 표시 해제 indicator
            $indicator.find('a').removeClass('on').eq(currentIndex).addClass('on');
        }
        //타이머를 시작하는 함수
        function startTimer() {
            //변수 interval에서 설정한 시간이 경과할 때마다 작업 수행
            timer = setInterval(function () {
                //현재 슬라이드의 인덱스에 따라서 다음 표시할 슬라이드를 결정
                //만약 마지막 슬라이드면 첫번째 슬라이드에 타이머 적용
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);

            }, interval);
        }
        //타이머중지 
        function stopTimer() {
            clearInterval(timer);
        }
        //네비게이션 클릭하면 슬라이드 이동 
        $nav.on('click', 'a', function (e) {
            e.preventDefault(); /*이동하는 것을 막아줌*/

            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });
        //인디케이터 링크를 클릭하면 해당 슬라이드 표시 
        $indicator.on('click', 'a', function (e) {
            e.preventDefault();
            if (!$(this).hasClass('on')) {
                goToSlide($(this).index());
            }
        });
        //마우스 오버를 하면 타이머를 정지 그렇지 않으면 시작
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });

        //슬라이드쇼 시작
        //첫번째 슬라이드 표시
        goToSlide(currentIndex);

        //타이머 시작
        startTimer();
    });
    /*-------------Section6-------*/
    /*슬라이드 요소 준비*/
    $('#item').each(function () {
        //요소에 필요한 변수 선언
        var $container = $(this); //a
        var $slideGroup = $container.find('.mainItem'); //b
        var $slides = $slideGroup.find('.itemlist'); //c
        var $nav = $container.find('.slidebtn'); //d
        var $indicator = $container.find('.slide_indicator'); //e 
        /*
        	a - 슬라이드쇼 전체 박스 
        	b - 슬라이드 이미지 그룹
        	c - 슬라이드 이미지
        	d - 네비게이션 (prev/next)
        	e - 인디케이터 
        */

        var slideCount = $slides.length // 슬라이드 개수 
        var indicatorHTML = ''; //인디케이터 콘텐츠 - 공란
        var currentIndex = 0; //현재 슬라이드 인덱스
        var duration = 500; //애니메이션이 넘어가는 시간
        var easing = "easeInOutExpo" //애니메이션 가속함수
        var interval = 8000; //자동으로 다음 슬라이드 넘어갈 때까지 시간
        var timer; //타이머

        //html 요소로 indicator 생성 삽입
        //각 슬라이드의 위치를 결정하고, 해당 인디케이터 생성
        $slides.each(function (i) {
            /*i 매개체 , i=index와 비슷, 슬라이드 개수만큼의 숫자*/
            $(this).css({
                left: 100 * i + '%'
            });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });
        //인디케이터 콘텐츠 삽입
        $indicator.html(indicatorHTML);


        //함수정의
        //모든 슬라이드를 표시하는 함수
        function goToSlide(index) {
            /*이미지 슬라이드 개수만큼 채워짐*/
            //슬라이드 그룹을 대상 위치에 맞게 이동
            $slideGroup.stop().animate({
                left: -100 * index + '%'
            }, duration, easing);
            currentIndex = index;
            //네비게이션 상태 업데이트 prev,next버튼 보일지 말지 설정
            updateNav();
        }
        //슬라이드 상태에 따른 네비게이션 및 인디케이터 업뎃 함수
        function updateNav() {
            var $navPrev = $nav.find('.prev');
            var $navNext = $nav.find('.next');

            //만약 첫번째 슬라이드라면 prv버튼을 해제
            if (currentIndex === 0) {
                $navPrev.addClass('on');
            } else {
                $navPrev.removeClass('on');
            }
            //만약 마지막 슬라이드라면 next 버튼 해제
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('on');
            } else {
                $navNext.removeClass('on');
            }
            //현재 슬라이드 표시 해제 indicator
            $indicator.find('a').removeClass('on').eq(currentIndex).addClass('on');
        }
        //타이머를 시작하는 함수
        function startTimer() {
            //변수 interval에서 설정한 시간이 경과할 때마다 작업 수행
            timer = setInterval(function () {
                //현재 슬라이드의 인덱스에 따라서 다음 표시할 슬라이드를 결정
                //만약 마지막 슬라이드면 첫번째 슬라이드에 타이머 적용
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);

            }, interval);
        }
        //타이머중지 
        function stopTimer() {
            clearInterval(timer);
        }
        //네비게이션 클릭하면 슬라이드 이동 
        $nav.on('click', 'a', function (e) {
            e.preventDefault(); /*이동하는 것을 막아줌*/

            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });
        //인디케이터 링크를 클릭하면 해당 슬라이드 표시 
        $indicator.on('click', 'a', function (e) {
            e.preventDefault();
            if (!$(this).hasClass('on')) {
                goToSlide($(this).index());
            }
        });
        //마우스 오버를 하면 타이머를 정지 그렇지 않으면 시작
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });

        //슬라이드쇼 시작
        //첫번째 슬라이드 표시
        goToSlide(currentIndex);

        //타이머 시작
        startTimer();
    });

    /*topNav 박물관 바로가기 -점프메뉴*/
    $('.listbtn').on('click', function (e) {
        if ($(this).hasClass('on')) {
            $(this).add('.list').removeClass('on');
        } else {
            $(this).add('.list').addClass('on');
        }
        e.preventDefault();
    });
    /*language -점프메뉴*/
    $('.langbtn a').on('click', function (e) {
        if ($(this).hasClass('on')) {
            $(this).add('.langlist').removeClass('on');
        } else {
            $(this).add('.langlist').addClass('on');
        }
        e.preventDefault();
    });

    /**** 롤메뉴*/
    var offsetLeft = 0;
    var boxWidth = $('div.rollMenu div.rollbox').innerWidth(); // 박스의padding영역 까지의 넓이 
    var barWidth = 0; //막대기길이
    var minOffsetLeft = 0; // 최소 위치값
    //최대 위치값 0 -맨왼쪽

    $('div.rollMenu ul.banner li').each(function () {
        barWidth += $(this).outerWidth(true); // 마진까지 포함한 영역

    }); // 각각의 li 너비 값을 누적해서 더해준다. 길이가 각각다를 수 있기 떄문에 가장 정확

    //alert(barWidth //마진까지 포함한 li의 길이를 확인

    $('div.rollMenu ul.banner').css({
        'width': barWidth + 'px'
    });
    minOffsetLeft = -(barWidth - boxWidth);
    //alert(minOffsetLeft); // 움직일 범위 확인

    $('div.rollMenu p.control a.prev').on('click', function () {
        if (offsetLeft === 0) { //2 끝인걸 확인할 수 있도록 최대 위치일 때 요소가 튕기도록
            $('div.rollMenu ul.banner').stop(true).animate({
                'left': '10px'
            }, 50).animate({
                'left': 0
            }, 100);
        } else {
            offsetLeft += 200;
            if (offsetLeft > 0) offsetLeft = 0; //1 if문 문장이 한줄이면 중괄호 없어도됨 자바스크립트 문법/ 옆으로 무한대로 가지 못하게 끝으로 가도록 만든다.
            $('div.rollMenu ul.banner').stop(true).animate({
                'left': offsetLeft + 'px'
            }, 500);
            //목적지에 대한 값을 정해놓고 거기까지 이동해라
        }
    });
    $('div.rollMenu p.control a.next').on('click', function () {
        if (offsetLeft === minOffsetLeft) {
            $('div.rollMenu ul.banner').stop(true).animate({
                'left': (minOffsetLeft - 10) + 'px'
            }, 50).animate({
                'left': minOffsetLeft + 'px'
            }, 100);
        } else {
            offsetLeft -= 200;
            if (offsetLeft < minOffsetLeft) offsetLeft = minOffsetLeft; // if문 문장이 한줄이면 중괄호 없어도됨 자바스크립트 문법/ 옆으로 무한대로 가지 못하게 끝으로 가도록 만든다.
            $('div.rollMenu ul.banner').stop(true).animate({
                'left': offsetLeft + 'px'
            }, 500);
            //목적지에 대한 값을 정해놓고 거기까지 이동해라
        }
    });

    $('#scrollTop').on('click', function () {
        $('html, body').animate({
            'scrollTop': 0
        }, 500);
    });


});
