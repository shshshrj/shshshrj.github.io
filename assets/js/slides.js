$('.slider-1 > .page-btns > div').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('pop-container');
    $this.siblings('.pop-container').removeClass('pop-container');
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find(' > .slides > div.pop-container');
    
    var $post = $slider.find(' > .slides > div').eq(index);
    
    $current.removeClass('pop-container');
    $post.addClass('pop-container');
});

// 좌/우 버튼 추가 슬라이더
$('.slider-1 > .side-btns > div').click(function(){
    var $this = $(this);
    var $slider = $this.closest('.slider-1');
    
    var index = $this.index();
    var isLeft = index == 0;
    
    var $current = $slider.find(' > .page-btns > div.pop-container');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    };
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find(' > .page-btns > div:last-child');
        }
        else {
            $post = $slider.find(' > .page-btns > div:first-child');
        }
    };
    
    $post.click();
});

setInterval(function(){
    $('.slider-1 > .side-btns > div').eq(1).click();
}, 3000);
