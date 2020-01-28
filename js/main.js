
$(document).ready(function(){

	//Code to center the subscription pup-up box
	$box = $('#box');
	$box.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box.width()/2 + 'px',
		'margin-top' : -$box.height()/2 + 'px'
	});


	//Subscription pup-up
	$('.start_btn').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box').fadeIn(200);

		return false;
	});

	$('#lightbox, .close').click(function(){
		$('#lightbox').width(0).height(0).fadeOut(200);
		$('#box').fadeOut(200);

		return false;
	});
         // 비디오, 오디오 제어하기 https://www.w3schools.com/tags/ref_av_dom.asp

         // 비디오 객체 가져오기 
         var player=$('video')[0];
         // var player=document.getElementById('video');
         console.log(player);
         
         //재생/일시정지 
         $('#btn-play-pause').click(function (e) { 
            e.preventDefault();
            if(player.paused){//일시정지 상태이면
               player.play();
               $(this).find('i').text('pause');
            }else{//재생상태이면
               player.pause();
               $(this).find('i').text('play_arrow');
            }
         });

         //다시시작 
         $('#btn-replay').click(function (e) { 
            e.preventDefault();
            player.currentTime=0;//시간을 0으로 초기화 
            player.play();
            $('#btn-play-pause i').text('pause');
         });

         //음소거/해제 
         $('#btn-volume').click(function (e) { 
            e.preventDefault();
            if(player.muted){//음소거 상태면               
               player.muted=false;//음소거 상태를 해제
               $(this).find('i').text('volume_up');
            }else{//음소거가 아니면
               player.muted=true;//음소거 상태를 활성화
               $(this).find('i').text('volume_off');
            }
         });

         //전체화면/기본화면 
         $('#btn-fullscreen').click(function (e) { 
            e.preventDefault();
            if($(this).text()=='fullscreen'){//아이콘이 풀스크린이면
               $('body').addClass('fullscreen');
               $(this).find('i').text('fullscreen_exit');
            }else{
               $('body').removeClass('fullscreen');
               $(this).find('i').text('fullscreen');
            }
         });

});
