$(document).ready(function () {
	var avatarArr = []; // to store avatar images

	$.ajax({
		url: "https://api.github.com/orgs/goshippo/members",
		success: function(result) {
			result.forEach(function (item) {
				$(".list-group").append("<button type='button' class='list-group-item avatar'>"+item.login+"</button>");
				avatarArr.push(item.avatar_url);
			});
		}
	});

	// on click of a button, get the index of the button in the list 
	// and using the array *avatarArr* which has all the images in order respective to the button list order
	// sets the "src" property of the img element 
	$(".list-group").on('click', 'button', function() {
		var avatar_index = $(this).index();
		$("#avatar").prop('src', avatarArr[avatar_index-1]);
	});
});
